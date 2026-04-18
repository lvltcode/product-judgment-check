import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode
} from 'react'
import { ASSESSMENT_TASK_COUNT, getAssessmentTasks } from '../content/tasks'
import { useLocale } from './LocaleContext'
import type { Locale } from '../types/locale'
import type { AssessmentResult, AssessmentSessionState } from '../types/session'
import type {
  AnswerMap,
  CritiqueAnswer,
  ScenarioOrTradeoffAnswer,
  TaskAnswer
} from '../types/tasks'

const STORAGE_KEY = 'ai-era-product-judgment-check-batch1'

const createInitialState = (): AssessmentSessionState => ({
  currentTaskIndex: 0,
  answers: {},
  isComplete: false,
  result: null
})

const clampTaskIndex = (value: number): number => {
  if (Number.isNaN(value) || value < 0) {
    return 0
  }

  const maxIndex = ASSESSMENT_TASK_COUNT - 1
  if (value > maxIndex) {
    return maxIndex
  }

  return value
}

const remapOption = (selected: string, fromOptions: string[], toOptions: string[]): string => {
  const index = fromOptions.findIndex((option) => option === selected)
  if (index < 0) {
    return selected
  }
  return toOptions[index] ?? selected
}

const remapOptionList = (selected: string[], fromOptions: string[], toOptions: string[]): string[] => {
  const mapped = selected.map((item) => remapOption(item, fromOptions, toOptions))
  return [...new Set(mapped)]
}

const migrateLocalizedAnswers = (
  answers: AnswerMap,
  fromLocale: Locale,
  toLocale: Locale
): AnswerMap => {
  if (fromLocale === toLocale) {
    return answers
  }

  const fromTasks = getAssessmentTasks(fromLocale)
  const toTasks = getAssessmentTasks(toLocale)
  const toTaskMap = new Map(toTasks.map((task) => [task.id, task]))
  const migratedAnswers: AnswerMap = { ...answers }

  for (const fromTask of fromTasks) {
    const taskId = fromTask.id
    const rawAnswer = answers[taskId]
    const toTask = toTaskMap.get(taskId)

    if (!toTask || !rawAnswer || typeof rawAnswer !== 'object') {
      continue
    }

    if (
      (fromTask.type === 'scenario' || fromTask.type === 'tradeoff') &&
      (toTask.type === 'scenario' || toTask.type === 'tradeoff') &&
      'selectedOption' in rawAnswer &&
      typeof rawAnswer.selectedOption === 'string' &&
      'selectedReasons' in rawAnswer &&
      Array.isArray(rawAnswer.selectedReasons)
    ) {
      const answer = rawAnswer as ScenarioOrTradeoffAnswer
      migratedAnswers[taskId] = {
        ...answer,
        selectedOption: remapOption(
          answer.selectedOption,
          fromTask.primaryOptions,
          toTask.primaryOptions
        ),
        selectedReasons: remapOptionList(
          answer.selectedReasons,
          fromTask.reasonOptions,
          toTask.reasonOptions
        )
      }
      continue
    }

    if (
      fromTask.type === 'critique' &&
      toTask.type === 'critique' &&
      'selectedIssues' in rawAnswer &&
      Array.isArray(rawAnswer.selectedIssues) &&
      'severity' in rawAnswer &&
      typeof rawAnswer.severity === 'string'
    ) {
      const answer = rawAnswer as CritiqueAnswer
      migratedAnswers[taskId] = {
        ...answer,
        selectedIssues: remapOptionList(
          answer.selectedIssues,
          fromTask.issueOptions,
          toTask.issueOptions
        ),
        severity: remapOption(answer.severity, fromTask.severityOptions, toTask.severityOptions)
      }
    }
  }

  return migratedAnswers
}

const loadInitialState = (): AssessmentSessionState => {
  if (typeof window === 'undefined') {
    return createInitialState()
  }

  const raw = window.localStorage.getItem(STORAGE_KEY)
  if (!raw) {
    return createInitialState()
  }

  try {
    const parsed = JSON.parse(raw) as Partial<AssessmentSessionState>
    const parsedResult =
      parsed.result && typeof parsed.result === 'object' ? (parsed.result as AssessmentResult) : null

    return {
      currentTaskIndex: clampTaskIndex(Number(parsed.currentTaskIndex ?? 0)),
      answers: parsed.answers ?? {},
      isComplete: Boolean(parsed.isComplete),
      result: parsedResult
    }
  } catch {
    return createInitialState()
  }
}

type AssessmentContextValue = {
  session: AssessmentSessionState
  totalTasks: number
  answeredTaskCount: number
  setCurrentTaskIndex: (nextIndex: number) => void
  saveAnswer: (taskId: string, answer: TaskAnswer) => void
  goNextTask: () => void
  goPreviousTask: () => void
  markComplete: (result: AssessmentResult) => void
  setResult: (result: AssessmentResult | null) => void
  resetAssessment: () => void
}

const AssessmentContext = createContext<AssessmentContextValue | null>(null)

export const AssessmentProvider = ({ children }: { children: ReactNode }) => {
  const { locale } = useLocale()
  const [session, setSession] = useState<AssessmentSessionState>(() => loadInitialState())
  const previousLocaleRef = useRef<Locale>(locale)

  useEffect(() => {
    const previousLocale = previousLocaleRef.current
    if (previousLocale === locale) {
      return
    }

    setSession((previousSession) => {
      if (Object.keys(previousSession.answers).length === 0) {
        return previousSession
      }

      return {
        ...previousSession,
        answers: migrateLocalizedAnswers(previousSession.answers, previousLocale, locale)
      }
    })

    previousLocaleRef.current = locale
  }, [locale])

  useEffect(() => {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        currentTaskIndex: session.currentTaskIndex,
        answers: session.answers,
        isComplete: session.isComplete,
        result: session.result
      })
    )
  }, [session.currentTaskIndex, session.answers, session.isComplete, session.result])

  const setCurrentTaskIndex = useCallback((nextIndex: number) => {
    setSession((previous) => ({
      ...previous,
      currentTaskIndex: clampTaskIndex(nextIndex)
    }))
  }, [])

  const saveAnswer = useCallback((taskId: string, answer: TaskAnswer) => {
    setSession((previous) => ({
      ...previous,
      answers: {
        ...previous.answers,
        [taskId]: answer
      },
      isComplete: false,
      result: null
    }))
  }, [])

  const goNextTask = useCallback(() => {
    setSession((previous) => ({
      ...previous,
      currentTaskIndex: clampTaskIndex(previous.currentTaskIndex + 1)
    }))
  }, [])

  const goPreviousTask = useCallback(() => {
    setSession((previous) => ({
      ...previous,
      currentTaskIndex: clampTaskIndex(previous.currentTaskIndex - 1)
    }))
  }, [])

  const markComplete = useCallback((result: AssessmentResult) => {
    setSession((previous) => ({
      ...previous,
      isComplete: true,
      result
    }))
  }, [])

  const setResult = useCallback((result: AssessmentResult | null) => {
    setSession((previous) => ({
      ...previous,
      result
    }))
  }, [])

  const resetAssessment = useCallback(() => {
    setSession(createInitialState())
  }, [])

  const value = useMemo<AssessmentContextValue>(
    () => ({
      session,
      totalTasks: ASSESSMENT_TASK_COUNT,
      answeredTaskCount: Object.keys(session.answers).length,
      setCurrentTaskIndex,
      saveAnswer,
      goNextTask,
      goPreviousTask,
      markComplete,
      setResult,
      resetAssessment
    }),
    [
      goNextTask,
      goPreviousTask,
      markComplete,
      resetAssessment,
      saveAnswer,
      session,
      setCurrentTaskIndex,
      setResult
    ]
  )

  return <AssessmentContext.Provider value={value}>{children}</AssessmentContext.Provider>
}

export const useAssessment = (): AssessmentContextValue => {
  const context = useContext(AssessmentContext)
  if (!context) {
    throw new Error('useAssessment must be used inside AssessmentProvider')
  }

  return context
}
