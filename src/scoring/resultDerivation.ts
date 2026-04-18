import {
  AI_PRESSURE_TEMPLATES,
  CAPABILITY_LABELS,
  GAP_POOL,
  LEVEL_SUMMARIES,
  NEXT_STEP_SUGGESTIONS,
  STRENGTH_POOL,
  type ResultUiCopy,
  RESULT_UI_COPY
} from '../content/results'
import type { Locale } from '../types/locale'
import type {
  AIPressurePattern,
  AssessmentResult,
  CapabilityKey
} from '../types/session'
import type { ScoringSnapshot } from './engine'

const CAPABILITY_STRENGTH_IDS: Record<CapabilityKey, string[]> = {
  problemFraming: ['strength_user_clarity', 'strength_action_focus', 'strength_rewrite'],
  flowJudgment: ['strength_flow_meaningful', 'strength_state_recovery', 'strength_feature_flow'],
  systemAwareness: ['strength_cross_surface', 'strength_structural_vs_surface'],
  tradeoffQuality: ['strength_commitment', 'strength_user_clarity'],
  aiCollaborationMaturity: ['strength_ai_selective']
}

const CAPABILITY_GAP_IDS: Record<CapabilityKey, string[]> = {
  problemFraming: ['gap_rewrite_vague', 'gap_too_local', 'gap_value_vs_volume'],
  flowJudgment: ['gap_miss_main_issue', 'gap_polish_reaction', 'gap_visual_vs_product'],
  systemAwareness: ['gap_system_thin', 'gap_too_local'],
  tradeoffQuality: ['gap_tradeoff_ambiguity', 'gap_avoid_commitment', 'gap_value_vs_volume'],
  aiCollaborationMaturity: ['gap_ai_extremes']
}

const unique = <T>(items: T[]): T[] => {
  const result: T[] = []
  for (const item of items) {
    if (!result.includes(item)) {
      result.push(item)
    }
  }
  return result
}

const taskPercent = (snapshot: ScoringSnapshot, taskId: string): number => {
  const task = snapshot.taskScores[taskId]
  if (!task || task.max <= 0) {
    return 0
  }
  return (task.total / task.max) * 100
}

const average = (values: number[]): number => {
  if (values.length === 0) {
    return 0
  }

  return values.reduce((sum, value) => sum + value, 0) / values.length
}

const getAIPressurePattern = (snapshot: ScoringSnapshot): AIPressurePattern => {
  const aiScore = snapshot.capabilityScores.aiCollaborationMaturity
  const critiqueAverage = average([taskPercent(snapshot, 'T5'), taskPercent(snapshot, 'T6')])
  const tradeoffAverage = average([taskPercent(snapshot, 'T3'), taskPercent(snapshot, 'T4')])
  const rewriteScore = taskPercent(snapshot, 'T7')

  if (
    (snapshot.level === 'Executor' || snapshot.level === 'Reliable Builder') &&
    (aiScore < 55 || critiqueAverage < 55 || tradeoffAverage < 50)
  ) {
    return 'lower'
  }

  if (
    (snapshot.level === 'System Designer' || snapshot.level === 'Product Judge') &&
    aiScore >= 70 &&
    critiqueAverage >= 65 &&
    tradeoffAverage >= 60 &&
    rewriteScore >= 60
  ) {
    return 'higher'
  }

  return 'mid'
}

const deriveStrengths = (snapshot: ScoringSnapshot): string[] => {
  const candidateIds: string[] = []

  for (const capability of snapshot.topCapabilities) {
    candidateIds.push(...CAPABILITY_STRENGTH_IDS[capability])
  }

  const t7 = taskPercent(snapshot, 'T7')
  const t8 = taskPercent(snapshot, 'T8')
  const critiqueAverage = average([taskPercent(snapshot, 'T5'), taskPercent(snapshot, 'T6')])
  const tradeoffAverage = average([taskPercent(snapshot, 'T3'), taskPercent(snapshot, 'T4')])

  if (t7 >= 70) {
    candidateIds.unshift('strength_rewrite')
  }
  if (t8 >= 70) {
    candidateIds.unshift('strength_ai_selective')
  }
  if (critiqueAverage >= 70) {
    candidateIds.unshift('strength_state_recovery', 'strength_structural_vs_surface')
  }
  if (tradeoffAverage >= 70) {
    candidateIds.unshift('strength_commitment')
  }

  const uniqueIds = unique(candidateIds)
  const maxStrengths = snapshot.completionPenalty < 1 ? 2 : 4
  const minStrengths = snapshot.completionPenalty < 1 ? 1 : 2
  const selected = uniqueIds.slice(0, maxStrengths)

  if (selected.length >= minStrengths) {
    return selected
  }

  return uniqueIds.slice(0, minStrengths)
}

const deriveGaps = (snapshot: ScoringSnapshot): string[] => {
  const candidateIds: string[] = []

  for (const capability of snapshot.lowestCapabilities) {
    candidateIds.push(...CAPABILITY_GAP_IDS[capability])
  }

  const t5 = taskPercent(snapshot, 'T5')
  const t6 = taskPercent(snapshot, 'T6')
  const t7 = taskPercent(snapshot, 'T7')
  const t8 = taskPercent(snapshot, 'T8')
  const tradeoffAverage = average([taskPercent(snapshot, 'T3'), taskPercent(snapshot, 'T4')])

  if (t5 < 55) {
    candidateIds.unshift('gap_polish_reaction', 'gap_visual_vs_product')
  }
  if (t6 < 55) {
    candidateIds.unshift('gap_miss_main_issue', 'gap_too_local')
  }
  if (t7 < 55) {
    candidateIds.unshift('gap_rewrite_vague')
  }
  if (t8 < 55) {
    candidateIds.unshift('gap_ai_extremes')
  }
  if (tradeoffAverage < 55) {
    candidateIds.unshift('gap_tradeoff_ambiguity', 'gap_avoid_commitment')
  }

  const uniqueIds = unique(candidateIds)
  const selected = uniqueIds.slice(0, 4)

  if (selected.length >= 2) {
    return selected
  }

  return uniqueIds.slice(0, 2)
}

const deriveNextStepCapabilities = (snapshot: ScoringSnapshot): CapabilityKey[] => {
  const capabilityEntries = Object.entries(snapshot.capabilityScores) as Array<[CapabilityKey, number]>
  capabilityEntries.sort((left, right) => left[1] - right[1])

  return capabilityEntries.slice(0, 3).map(([capability]) => capability)
}

export const buildAssessmentResult = (snapshot: ScoringSnapshot): AssessmentResult => {
  const aiPressurePattern = getAIPressurePattern(snapshot)
  const strengths = deriveStrengths(snapshot)
  const gaps = deriveGaps(snapshot)
  const nextStepCapabilities = deriveNextStepCapabilities(snapshot)

  return {
    finalScore: snapshot.finalScore,
    level: snapshot.level,
    capabilityScores: snapshot.capabilityScores,
    taskScores: snapshot.taskScores,
    completedTaskCount: snapshot.completedTaskCount,
    completionPenalty: snapshot.completionPenalty,
    strengths,
    gaps,
    nextStepCapabilities,
    aiPressurePattern,
    topCapabilities: snapshot.topCapabilities,
    lowestCapabilities: snapshot.lowestCapabilities
  }
}

type LocalizedResultContent = {
  summary: string
  strengths: string[]
  gaps: string[]
  aiPressure: {
    alreadyHandledWell: string[]
    helpsButNeedsJudgment: string[]
    stillHumanHeavy: string[]
  }
  nextSteps: string[]
}

const FALLBACK_STRENGTH = 'strength_feature_flow'
const FALLBACK_GAP = 'gap_too_local'

export const localizeAssessmentResult = (
  result: AssessmentResult,
  locale: Locale
): LocalizedResultContent => {
  const strengthPool = STRENGTH_POOL[locale]
  const gapPool = GAP_POOL[locale]
  const aiPressure = AI_PRESSURE_TEMPLATES[locale][result.aiPressurePattern]
  const summary = LEVEL_SUMMARIES[locale][result.level]

  const strengths = (result.strengths.length > 0 ? result.strengths : [FALLBACK_STRENGTH])
    .map((id) => strengthPool[id])
    .filter(Boolean)

  const gaps = (result.gaps.length > 0 ? result.gaps : [FALLBACK_GAP])
    .map((id) => gapPool[id])
    .filter(Boolean)

  const nextSteps = result.nextStepCapabilities.map((capability, index) => {
    const suggestions = NEXT_STEP_SUGGESTIONS[locale][capability]
    return suggestions[index % suggestions.length]
  })

  return {
    summary,
    strengths,
    gaps,
    aiPressure,
    nextSteps
  }
}

export const getResultUiCopy = (locale: Locale): ResultUiCopy => RESULT_UI_COPY[locale]

export const getCapabilityLabels = (
  locale: Locale
): Record<CapabilityKey, string> => CAPABILITY_LABELS[locale]
