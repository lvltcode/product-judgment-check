export type TaskType =
  | 'scenario'
  | 'tradeoff'
  | 'critique'
  | 'rewrite'
  | 'ai-collaboration'

export type TaskId = `T${number}`

type TaskBase = {
  id: TaskId
  type: TaskType
  title: string
  context: string
  prompt: string
}

export type ScenarioOrTradeoffTask = TaskBase & {
  type: 'scenario' | 'tradeoff'
  primaryOptions: string[]
  reasonLabel: string
  reasonOptions: string[]
  maxReasonSelections: number
  rationalePrompt: string
}

export type CritiqueTask = TaskBase & {
  type: 'critique'
  assetIntent: string
  assetSrc?: string
  assetAlt?: string
  issueLabel: string
  issueOptions: string[]
  maxIssueSelections: number
  severityPrompt: string
  severityOptions: string[]
  rationalePrompt: string
}

export type RewriteField = {
  id: string
  label: string
  helper: string
}

export type RewriteTask = TaskBase & {
  type: 'rewrite'
  weakBrief: string
  fields: RewriteField[]
}

export type AICollaborationBucket = {
  id: string
  label: string
  helper: string
}

export type AICollaborationTask = TaskBase & {
  type: 'ai-collaboration'
  originalPrompt: string
  aiOutputSummary: string[]
  buckets: AICollaborationBucket[]
  finalJudgmentPrompt: string
}

export type AssessmentTask =
  | ScenarioOrTradeoffTask
  | CritiqueTask
  | RewriteTask
  | AICollaborationTask

export type ScenarioOrTradeoffAnswer = {
  selectedOption: string
  selectedReasons: string[]
  rationale: string
}

export type CritiqueAnswer = {
  selectedIssues: string[]
  severity: string
  rationale: string
}

export type RewriteAnswer = Record<string, string>

export type AICollaborationAnswer = {
  buckets: Record<string, string>
  finalJudgment: string
}

export type TaskAnswer =
  | ScenarioOrTradeoffAnswer
  | CritiqueAnswer
  | RewriteAnswer
  | AICollaborationAnswer

export type AnswerMap = Record<string, TaskAnswer>
