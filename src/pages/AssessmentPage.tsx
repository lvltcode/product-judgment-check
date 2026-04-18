import { useNavigate } from 'react-router-dom'
import { TaskRenderer } from '../components/TaskRenderer'
import { ProgressBar } from '../components/ProgressBar'
import { getAssessmentTasks } from '../content/tasks'
import { generateAssessmentResult } from '../scoring'
import { useAssessment } from '../state/AssessmentContext'
import { useLocale } from '../state/LocaleContext'
import type { TaskAnswer } from '../types/tasks'

const TASK_TYPE_LABEL: Record<string, string> = {
  scenario: 'Scenario-Based Assessment',
  tradeoff: 'Forced Trade-off',
  critique: 'Critique Task',
  rewrite: 'Rewrite Task',
  'ai-collaboration': 'AI Collaboration Task'
}

const ASSESSMENT_COPY = {
  vi: {
    missingTitle: 'Không tải được bài',
    missingDescription: 'Chỉ số bài hiện tại đang nằm ngoài phạm vi.',
    previous: 'Quay lại',
    next: 'Tiếp theo',
    finish: 'Hoàn tất và xem kết quả'
  },
  en: {
    missingTitle: 'Task not available',
    missingDescription: 'The current task index is out of range.',
    previous: 'Previous',
    next: 'Next',
    finish: 'Finish and view result'
  }
} as const

export const AssessmentPage = () => {
  const navigate = useNavigate()
  const { locale } = useLocale()
  const copy = ASSESSMENT_COPY[locale]
  const tasks = getAssessmentTasks(locale)
  const { session, totalTasks, saveAnswer, goNextTask, goPreviousTask, markComplete } = useAssessment()

  const task = tasks[session.currentTaskIndex]

  if (!task) {
    return (
      <main className="page-shell">
        <section className="content-block">
          <h1 className="page-title">{copy.missingTitle}</h1>
          <p className="page-description">{copy.missingDescription}</p>
        </section>
      </main>
    )
  }

  const onAnswerChange = (answer: TaskAnswer) => {
    saveAnswer(task.id, answer)
  }

  const onNext = () => {
    const isLastTask = session.currentTaskIndex === totalTasks - 1

    if (isLastTask) {
      const result = generateAssessmentResult(tasks, session.answers)
      markComplete(result)
      navigate('/result')
      return
    }

    goNextTask()
  }

  const onPrevious = () => {
    if (session.currentTaskIndex > 0) {
      goPreviousTask()
    }
  }

  return (
    <main className="page-shell">
      <section className="content-block">
        <ProgressBar current={session.currentTaskIndex + 1} total={totalTasks} />

        <div className="task-header">
          <p className="eyebrow">{TASK_TYPE_LABEL[task.type]}</p>
          <h1 className="page-title">{task.title}</h1>
        </div>

        <TaskRenderer task={task} answer={session.answers[task.id]} onChange={onAnswerChange} />

        <div className="action-row">
          <button
            className="button-secondary"
            onClick={onPrevious}
            disabled={session.currentTaskIndex === 0}
            type="button"
          >
            {copy.previous}
          </button>
          <button className="button-primary" onClick={onNext} type="button">
            {session.currentTaskIndex === totalTasks - 1 ? copy.finish : copy.next}
          </button>
        </div>
      </section>
    </main>
  )
}
