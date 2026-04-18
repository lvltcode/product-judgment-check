import type { AnswerMap } from './tasks'

export type AssessmentLevel =
  | 'Executor'
  | 'Reliable Builder'
  | 'Flow Thinker'
  | 'System Designer'
  | 'Product Judge'

export type CapabilityKey =
  | 'problemFraming'
  | 'flowJudgment'
  | 'systemAwareness'
  | 'tradeoffQuality'
  | 'aiCollaborationMaturity'

export type AIPressurePattern = 'lower' | 'mid' | 'higher'

export type TaskScoreDetail = {
  objective: number
  judgment: number
  total: number
  max: number
  completed: boolean
}

export type AssessmentResult = {
  finalScore: number
  level: AssessmentLevel
  capabilityScores: Record<CapabilityKey, number>
  taskScores: Record<string, TaskScoreDetail>
  completedTaskCount: number
  completionPenalty: number
  strengths: string[]
  gaps: string[]
  nextStepCapabilities: CapabilityKey[]
  aiPressurePattern: AIPressurePattern
  topCapabilities: CapabilityKey[]
  lowestCapabilities: CapabilityKey[]
}

export type AssessmentSessionState = {
  currentTaskIndex: number
  answers: AnswerMap
  isComplete: boolean
  result: AssessmentResult | null
}
