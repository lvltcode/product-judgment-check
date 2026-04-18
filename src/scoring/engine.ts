import type {
  AICollaborationAnswer,
  AnswerMap,
  AssessmentTask,
  CritiqueAnswer,
  RewriteAnswer,
  ScenarioOrTradeoffAnswer
} from '../types/tasks'
import type {
  AssessmentLevel,
  CapabilityKey,
  TaskScoreDetail
} from '../types/session'

const TASK_WEIGHTS: Record<string, number> = {
  T1: 12,
  T2: 12,
  T3: 9,
  T4: 9,
  T5: 12,
  T6: 12,
  T7: 18,
  T8: 16
}

const TASK_SPLIT: Record<string, { objective: number; judgment: number }> = {
  T1: { objective: 7, judgment: 5 },
  T2: { objective: 7, judgment: 5 },
  T3: { objective: 5, judgment: 4 },
  T4: { objective: 5, judgment: 4 },
  T5: { objective: 7, judgment: 5 },
  T6: { objective: 7, judgment: 5 },
  T7: { objective: 8, judgment: 10 },
  T8: { objective: 7, judgment: 9 }
}

const CAPABILITY_WEIGHTS: Record<CapabilityKey, number> = {
  problemFraming: 20,
  flowJudgment: 25,
  systemAwareness: 20,
  tradeoffQuality: 20,
  aiCollaborationMaturity: 15
}

const CAPABILITY_MATRIX: Record<string, Record<CapabilityKey, number>> = {
  T1: { problemFraming: 4, flowJudgment: 4, systemAwareness: 0, tradeoffQuality: 4, aiCollaborationMaturity: 0 },
  T2: { problemFraming: 4, flowJudgment: 4, systemAwareness: 0, tradeoffQuality: 4, aiCollaborationMaturity: 0 },
  T3: { problemFraming: 0, flowJudgment: 4, systemAwareness: 2, tradeoffQuality: 3, aiCollaborationMaturity: 0 },
  T4: { problemFraming: 3, flowJudgment: 0, systemAwareness: 2, tradeoffQuality: 4, aiCollaborationMaturity: 0 },
  T5: { problemFraming: 0, flowJudgment: 7, systemAwareness: 5, tradeoffQuality: 0, aiCollaborationMaturity: 0 },
  T6: { problemFraming: 3, flowJudgment: 6, systemAwareness: 3, tradeoffQuality: 0, aiCollaborationMaturity: 0 },
  T7: { problemFraming: 7, flowJudgment: 0, systemAwareness: 4, tradeoffQuality: 7, aiCollaborationMaturity: 0 },
  T8: { problemFraming: 2, flowJudgment: 0, systemAwareness: 0, tradeoffQuality: 5, aiCollaborationMaturity: 9 }
}

const CAPABILITY_ORDER: CapabilityKey[] = [
  'problemFraming',
  'flowJudgment',
  'systemAwareness',
  'tradeoffQuality',
  'aiCollaborationMaturity'
]

const SAFE_LANGUAGE_PHRASES = ['it depends', 'depends', 'còn tùy', 'con tuy', 'tuỳ', 'tuy thuoc']

const KEYWORDS = {
  valuePriority: [
    'priority',
    'prioritize',
    'clarity',
    'action',
    'weekly',
    'urgent',
    'value',
    'ưu tiên',
    'ro rang',
    'hành động',
    'hanh dong',
    'tuần',
    'tuan',
    'gia tri'
  ],
  friction: [
    'friction',
    'effort',
    'field',
    'root cause',
    'conversion',
    'burden',
    'ma sat',
    'ma sát',
    'truong',
    'trường',
    'nguyen nhan',
    'nguyên nhân',
    'chuyen doi',
    'chuyển đổi'
  ],
  structure: [
    'structure',
    'information architecture',
    'group',
    'label',
    'hierarchy',
    'mental model',
    'cau truc',
    'cấu trúc',
    'kien truc thong tin',
    'kiến trúc thông tin',
    'phan cap',
    'phân cấp',
    'nhom',
    'nhóm'
  ],
  constraints: [
    'constraint',
    'scope',
    'time',
    'day',
    'risk',
    'reversible',
    'reversibility',
    'trust',
    'ràng buộc',
    'rang buoc',
    'pham vi',
    'phạm vi',
    'thoi gian',
    'thời gian',
    'rui ro',
    'rủi ro',
    'dao nguoc',
    'đảo ngược',
    'niem tin',
    'niềm tin'
  ],
  critique: [
    'priority',
    'action',
    'state',
    'recovery',
    'continuity',
    'flow',
    'error',
    'ưu tiên',
    'hanh dong',
    'hành động',
    'trang thai',
    'trạng thái',
    'quay lai',
    'quay lại',
    'lien tuc',
    'liên tục',
    'luong',
    'luồng',
    'loi',
    'lỗi'
  ],
  rewrite: [
    'user',
    'problem',
    'success',
    'metric',
    'constraint',
    'flow',
    'nguoi dung',
    'người dùng',
    'van de',
    'vấn đề',
    'thanh cong',
    'thành công',
    'chi so',
    'chỉ số',
    'rang buoc',
    'ràng buộc',
    'luong',
    'luồng'
  ],
  ai: [
    'assumption',
    'validate',
    'research',
    'trust',
    'refine',
    'priority',
    'workflow',
    'giả định',
    'gia dinh',
    'xac thuc',
    'xác thực',
    'nghien cuu',
    'nghiên cứu',
    'tin',
    'tinh chinh',
    'tinh chỉnh',
    'uu tien',
    'ưu tiên',
    'luong cong viec',
    'luồng công việc'
  ]
} as const

const clamp = (value: number, min: number, max: number): number => {
  if (value < min) {
    return min
  }
  if (value > max) {
    return max
  }
  return value
}

const roundTo = (value: number, precision = 2): number => {
  const factor = 10 ** precision
  return Math.round(value * factor) / factor
}

const normalizeText = (value: string): string => {
  return value
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replace(/\s+/g, ' ')
}

const countKeywordHits = (raw: string, keywords: readonly string[]): number => {
  if (!raw.trim()) {
    return 0
  }

  const normalized = normalizeText(raw)
  let hitCount = 0

  for (const keyword of keywords) {
    if (normalized.includes(normalizeText(keyword))) {
      hitCount += 1
    }
  }

  return hitCount
}

const includesSafeLanguage = (raw: string): boolean => {
  const normalized = normalizeText(raw)
  return SAFE_LANGUAGE_PHRASES.some((phrase) => normalized.includes(normalizeText(phrase)))
}

const scoreRationaleOnRubric = (
  raw: string,
  keywords: readonly string[],
  options?: { extraPenalty?: number }
): number => {
  if (!raw.trim()) {
    return 0
  }

  const normalized = normalizeText(raw)
  let rubric = 1

  if (normalized.length >= 24) {
    rubric = 2
  }

  if (normalized.length >= 60) {
    rubric += 1
  }

  if (countKeywordHits(raw, keywords) >= 2) {
    rubric += 1
  }

  if (includesSafeLanguage(raw)) {
    rubric -= 1
  }

  if (options?.extraPenalty) {
    rubric -= options.extraPenalty
  }

  return clamp(rubric, 0, 4)
}

const toSelectedIndexes = (selected: string[], allOptions: string[]): number[] => {
  const indexes: number[] = []

  for (const item of selected) {
    const index = allOptions.findIndex((option) => option === item)
    if (index >= 0 && !indexes.includes(index)) {
      indexes.push(index)
    }
  }

  return indexes
}

const toSelectedIndex = (selected: string, allOptions: string[]): number => {
  return allOptions.findIndex((option) => option === selected)
}

type TaskScoreOutput = TaskScoreDetail & {
  safeLanguageUsed: boolean
}

const emptyTaskScore = (taskId: string): TaskScoreOutput => ({
  objective: 0,
  judgment: 0,
  total: 0,
  max: TASK_WEIGHTS[taskId] ?? 0,
  completed: false,
  safeLanguageUsed: false
})

const toJudgmentPoints = (rubricScore: number, maxPoints: number): number => {
  return roundTo((clamp(rubricScore, 0, 4) / 4) * maxPoints)
}

const scoreScenarioTask = (
  taskId: 'T1' | 'T2',
  task: AssessmentTask,
  answer: ScenarioOrTradeoffAnswer | null
): TaskScoreOutput => {
  if (!answer?.selectedOption) {
    return emptyTaskScore(taskId)
  }

  if (task.type !== 'scenario') {
    return emptyTaskScore(taskId)
  }

  const split = TASK_SPLIT[taskId]
  const optionIndex = toSelectedIndex(answer.selectedOption, task.primaryOptions)
  const reasonIndexes = toSelectedIndexes(answer.selectedReasons, task.reasonOptions)
  const strongReasonIndexes = taskId === 'T1' ? [0, 1, 2, 6] : [0, 2, 4, 6, 7]
  const mediumReasonIndexes = taskId === 'T1' ? [7] : [1]
  const weakReasonIndexes = taskId === 'T1' ? [3, 4, 5] : [3, 5]
  const expectedIndex = taskId === 'T1' ? 0 : 1

  const strongCount = reasonIndexes.filter((index) => strongReasonIndexes.includes(index)).length
  const mediumCount = reasonIndexes.filter((index) => mediumReasonIndexes.includes(index)).length
  const weakCount = reasonIndexes.filter((index) => weakReasonIndexes.includes(index)).length

  let objective = 0
  if (optionIndex === expectedIndex) {
    objective += 4
  }

  objective += strongCount * 0.9
  objective += mediumCount * 0.35
  objective -= weakCount * 0.7
  objective = clamp(roundTo(objective), 0, split.objective)

  let rubric = 0
  rubric += 1 // committed to one direction
  if (optionIndex === expectedIndex) {
    rubric += 1
  }
  if (strongCount >= 1) {
    rubric += 1
  }
  if (strongCount >= 2) {
    rubric += 1
  }
  if (weakCount >= 2) {
    rubric -= 1
  }

  const rationaleRubric = scoreRationaleOnRubric(
    answer.rationale,
    taskId === 'T1' ? KEYWORDS.valuePriority : KEYWORDS.friction
  )
  rubric = clamp(Math.round((rubric + rationaleRubric) / 2), 0, 4)

  const judgment = toJudgmentPoints(rubric, split.judgment)
  const total = clamp(roundTo(objective + judgment), 0, TASK_WEIGHTS[taskId])
  const completed = Boolean(answer.selectedOption)

  return {
    objective,
    judgment,
    total,
    max: TASK_WEIGHTS[taskId],
    completed,
    safeLanguageUsed: includesSafeLanguage(answer.rationale)
  }
}

const scoreT3 = (task: AssessmentTask, answer: ScenarioOrTradeoffAnswer | null): TaskScoreOutput => {
  const taskId = 'T3'
  if (!answer?.selectedOption || task.type !== 'tradeoff') {
    return emptyTaskScore(taskId)
  }

  const split = TASK_SPLIT[taskId]
  const optionIndex = toSelectedIndex(answer.selectedOption, task.primaryOptions)
  const reasonIndexes = toSelectedIndexes(answer.selectedReasons, task.reasonOptions)

  const hierarchyStrong = [0, 2, 5]
  const iaStrong = [1, 3, 6]
  const weak = [4]

  const selectedStrong = optionIndex === 0 ? hierarchyStrong : iaStrong
  const oppositeStrong = optionIndex === 0 ? iaStrong : hierarchyStrong

  const strongCount = reasonIndexes.filter((index) => selectedStrong.includes(index)).length
  const oppositeCount = reasonIndexes.filter((index) => oppositeStrong.includes(index)).length
  const weakCount = reasonIndexes.filter((index) => weak.includes(index)).length

  let objective = 1 // no full-credit shortcut from option choice alone
  objective += strongCount * 1.2
  objective += oppositeCount * 0.35
  objective -= weakCount * 0.8
  objective = clamp(roundTo(objective), 0, split.objective)

  let rubric = scoreRationaleOnRubric(answer.rationale, KEYWORDS.structure)
  if (strongCount >= 1) {
    rubric += 1
  }
  if (strongCount === 0 && oppositeCount >= 2) {
    rubric -= 1
  }
  if (weakCount >= 2) {
    rubric -= 1
  }
  rubric = clamp(rubric, 0, 4)

  const judgment = toJudgmentPoints(rubric, split.judgment)
  const total = clamp(roundTo(objective + judgment), 0, TASK_WEIGHTS[taskId])
  const completed = Boolean(answer.selectedOption)

  return {
    objective,
    judgment,
    total,
    max: TASK_WEIGHTS[taskId],
    completed,
    safeLanguageUsed: includesSafeLanguage(answer.rationale)
  }
}

const scoreT4 = (task: AssessmentTask, answer: ScenarioOrTradeoffAnswer | null): TaskScoreOutput => {
  const taskId = 'T4'
  if (!answer?.selectedOption || task.type !== 'tradeoff') {
    return emptyTaskScore(taskId)
  }

  const split = TASK_SPLIT[taskId]
  const reasonIndexes = toSelectedIndexes(answer.selectedReasons, task.reasonOptions)
  const strongReasonIndexes = [0, 1, 2, 4, 5, 7]
  const weakReasonIndexes = [3, 6]

  const strongCount = reasonIndexes.filter((index) => strongReasonIndexes.includes(index)).length
  const weakCount = reasonIndexes.filter((index) => weakReasonIndexes.includes(index)).length
  const hasUrgency = reasonIndexes.includes(0) || reasonIndexes.includes(5)
  const hasRiskAwareness = reasonIndexes.includes(1) || reasonIndexes.includes(4) || reasonIndexes.includes(7)

  let objective = 1
  objective += strongCount * 0.75
  objective -= weakCount * 0.85
  if (hasUrgency && hasRiskAwareness) {
    objective += 0.8
  }
  objective = clamp(roundTo(objective), 0, split.objective)

  let rubric = scoreRationaleOnRubric(answer.rationale, KEYWORDS.constraints)
  if (hasUrgency) {
    rubric += 1
  }
  if (hasRiskAwareness) {
    rubric += 1
  }
  if (weakCount >= 2) {
    rubric -= 1
  }
  rubric = clamp(rubric, 0, 4)

  const judgment = toJudgmentPoints(rubric, split.judgment)
  const total = clamp(roundTo(objective + judgment), 0, TASK_WEIGHTS[taskId])
  const completed = Boolean(answer.selectedOption)

  return {
    objective,
    judgment,
    total,
    max: TASK_WEIGHTS[taskId],
    completed,
    safeLanguageUsed: includesSafeLanguage(answer.rationale)
  }
}

const scoreCritiqueTask = (
  taskId: 'T5' | 'T6',
  task: AssessmentTask,
  answer: CritiqueAnswer | null
): TaskScoreOutput => {
  if (task.type !== 'critique') {
    return emptyTaskScore(taskId)
  }

  if (!answer || answer.selectedIssues.length === 0 || !answer.severity) {
    return emptyTaskScore(taskId)
  }

  const split = TASK_SPLIT[taskId]
  const issueIndexes = toSelectedIndexes(answer.selectedIssues, task.issueOptions)
  const severityIndex = toSelectedIndex(answer.severity, task.severityOptions)

  const structuralIndexes = taskId === 'T5' ? [0, 1, 2, 3, 6, 8] : [0, 1, 2, 3, 6, 7]
  const cosmeticIndexes = taskId === 'T5' ? [4, 5, 7] : [4, 5, 8]
  const criticalSeverityIndexes = taskId === 'T5' ? [0, 1] : [0, 1, 2, 3]

  const structuralCount = issueIndexes.filter((index) => structuralIndexes.includes(index)).length
  const cosmeticCount = issueIndexes.filter((index) => cosmeticIndexes.includes(index)).length
  const hasMainPriorityIssue = taskId === 'T5' ? issueIndexes.includes(0) : structuralCount > 0

  let objective = 0
  objective += structuralCount * 1
  objective -= cosmeticCount * 0.7
  if (severityIndex >= 0) {
    objective += 2
  }
  if (criticalSeverityIndexes.includes(severityIndex)) {
    objective += 1
  }
  objective = clamp(roundTo(objective), 0, split.objective)

  let rubric = scoreRationaleOnRubric(answer.rationale, KEYWORDS.critique)
  if (structuralCount >= 2) {
    rubric += 1
  }
  if (cosmeticCount >= 2) {
    rubric -= 1
  }
  if (severityIndex < 0) {
    rubric -= 1
  }
  if (!hasMainPriorityIssue) {
    rubric = Math.min(rubric, 2)
  }
  rubric = clamp(rubric, 0, 4)

  const judgment = toJudgmentPoints(rubric, split.judgment)
  let total = clamp(roundTo(objective + judgment), 0, TASK_WEIGHTS[taskId])

  if (!hasMainPriorityIssue) {
    total = Math.min(total, 6.5)
  }

  const completed = answer.selectedIssues.length > 0 && Boolean(answer.severity)

  return {
    objective,
    judgment,
    total: roundTo(total),
    max: TASK_WEIGHTS[taskId],
    completed,
    safeLanguageUsed: includesSafeLanguage(answer.rationale)
  }
}

const scoreT7 = (task: AssessmentTask, answer: RewriteAnswer | null): TaskScoreOutput => {
  const taskId = 'T7'
  if (task.type !== 'rewrite' || !answer) {
    return emptyTaskScore(taskId)
  }

  const split = TASK_SPLIT[taskId]
  const fieldValues = task.fields.map((field) =>
    typeof answer[field.id] === 'string' ? answer[field.id].trim() : ''
  )
  const filledCount = fieldValues.filter((value) => value.length > 0).length
  const completed = filledCount >= 3

  if (!completed) {
    return emptyTaskScore(taskId)
  }

  const [
    problemStatement,
    successCriteria,
    primaryUser,
    constraints,
    proposedFlow
  ] = fieldValues

  const hasProblemQuality =
    problemStatement.length >= 24 &&
    countKeywordHits(problemStatement, ['problem', 'pain', 'friction', 'van de', 'vấn đề', 'ma sat']) >= 1
  const hasSuccessQuality =
    successCriteria.length >= 16 &&
    (/\d/.test(successCriteria) ||
      countKeywordHits(successCriteria, ['metric', 'rate', 'time', '%', 'chi so', 'chỉ số', 'ty le', 'tỷ lệ']) >= 1)
  const hasUserQuality =
    primaryUser.length >= 10 &&
    countKeywordHits(primaryUser, ['user', 'teacher', 'parent', 'team', 'nguoi dung', 'người dùng']) >= 1
  const hasConstraintQuality =
    constraints.length >= 12 &&
    countKeywordHits(constraints, ['scope', 'time', 'resource', 'risk', 'pham vi', 'phạm vi', 'thoi gian']) >= 1
  const hasFlowQuality =
    proposedFlow.length >= 16 &&
    countKeywordHits(proposedFlow, ['step', 'then', 'first', 'flow', 'buoc', 'bước', 'sau do', 'sau đó', 'luong']) >= 1

  const qualityFlags = [
    hasProblemQuality,
    hasSuccessQuality,
    hasUserQuality,
    hasConstraintQuality,
    hasFlowQuality
  ]
  const qualityCount = qualityFlags.filter(Boolean).length

  let objective = 0
  objective += filledCount * 0.8
  objective += qualityCount * 0.8

  const buzzwordHits =
    countKeywordHits(
      [problemStatement, successCriteria, primaryUser, constraints, proposedFlow].join(' '),
      ['modern teams', 'work smarter', 'ai dashboard', 'nhom hien dai', 'làm việc thông minh']
    ) > 0

  if (buzzwordHits) {
    objective -= 1.2
  }

  objective = clamp(roundTo(objective), 0, split.objective)

  let rubric = 0
  if (filledCount >= 3) {
    rubric += 1
  }
  if (filledCount >= 5) {
    rubric += 1
  }
  if (qualityCount >= 3) {
    rubric += 1
  }
  if (hasConstraintQuality && hasFlowQuality) {
    rubric += 1
  }
  if (buzzwordHits && qualityCount <= 2) {
    rubric -= 1
  }
  rubric = clamp(rubric, 0, 4)

  const judgment = toJudgmentPoints(rubric, split.judgment)
  const total = clamp(roundTo(objective + judgment), 0, TASK_WEIGHTS[taskId])

  return {
    objective,
    judgment,
    total,
    max: TASK_WEIGHTS[taskId],
    completed,
    safeLanguageUsed: false
  }
}

const scoreT8 = (task: AssessmentTask, answer: AICollaborationAnswer | null): TaskScoreOutput => {
  const taskId = 'T8'
  if (task.type !== 'ai-collaboration' || !answer) {
    return emptyTaskScore(taskId)
  }

  const split = TASK_SPLIT[taskId]
  const buckets = answer.buckets
  const finalJudgment = answer.finalJudgment?.trim() ?? ''

  const getBucket = (id: string): string => (buckets[id] ?? '').trim()

  const keepText = getBucket('keep')
  const removeText = getBucket('remove')
  const refineText = getBucket('refine')
  const researchText = getBucket('researchMore')
  const distrustText = getBucket('doNotTrustYet')

  const bucketValues = [keepText, removeText, refineText, researchText, distrustText]
  const filledBuckets = bucketValues.filter((value) => value.length > 0).length
  const completed = filledBuckets >= 3 || finalJudgment.length > 0

  if (!completed) {
    return emptyTaskScore(taskId)
  }

  const keepSignal = countKeywordHits(keepText, ['scaffold', 'structure', 'starting point', 'layout', 'khung', 'cau truc', 'điểm bắt đầu']) >= 1
  const removeSignal = countKeywordHits(removeText, ['noise', 'false sophistication', 'vague', 'thừa', 'nhieu', 'gimmick']) >= 1
  const refineSignal = countKeywordHits(refineText, ['priority', 'workflow', 'clarity', 'specific', 'uu tien', 'luong', 'ro rang']) >= 1
  const researchSignal = countKeywordHits(researchText, ['research', 'validate', 'test', 'data', 'nghien cuu', 'xac thuc', 'thu nghiem']) >= 1
  const distrustSignal = countKeywordHits(distrustText, ['assumption', 'not trust', 'evidence', 'gia dinh', 'bang chung', 'chua the tin']) >= 1

  const selectiveTrustPattern = keepText.length > 0 && (removeText.length > 0 || distrustText.length > 0)
  const blanketTrustPattern =
    keepText.length > 0 &&
    removeText.length === 0 &&
    refineText.length === 0 &&
    researchText.length === 0 &&
    distrustText.length === 0
  const blanketRejectPattern =
    keepText.length === 0 &&
    (removeText.length > 0 || distrustText.length > 0) &&
    refineText.length === 0 &&
    researchText.length === 0

  let objective = 0
  objective += filledBuckets * 0.4
  objective += keepSignal ? 0.6 : 0
  objective += removeSignal ? 0.6 : 0
  objective += refineSignal ? 0.6 : 0
  objective += researchSignal ? 0.6 : 0
  objective += distrustSignal ? 0.6 : 0
  objective += finalJudgment.length > 0 ? 0.5 : 0
  if (selectiveTrustPattern && researchText.length > 0) {
    objective += 1.5
  }
  objective = clamp(roundTo(objective), 0, split.objective)

  if (blanketTrustPattern || blanketRejectPattern) {
    objective = Math.min(objective, 3)
  }

  let rubric = 0
  if (selectiveTrustPattern) {
    rubric += 1
  }
  if (refineText.length > 0 && researchText.length > 0) {
    rubric += 1
  }
  if (countKeywordHits(finalJudgment, KEYWORDS.ai) >= 2 && finalJudgment.length >= 28) {
    rubric += 1
  }
  if (distrustText.length > 0 && (researchSignal || distrustSignal)) {
    rubric += 1
  }
  if (blanketTrustPattern || blanketRejectPattern) {
    rubric -= 1
  }
  rubric = clamp(rubric, 0, 4)

  const judgment = toJudgmentPoints(rubric, split.judgment)
  const total = clamp(roundTo(objective + judgment), 0, TASK_WEIGHTS[taskId])

  return {
    objective,
    judgment,
    total,
    max: TASK_WEIGHTS[taskId],
    completed,
    safeLanguageUsed: includesSafeLanguage(finalJudgment)
  }
}

const getScenarioOrTradeoffAnswer = (raw: AnswerMap[string] | undefined): ScenarioOrTradeoffAnswer | null => {
  if (!raw || typeof raw !== 'object') {
    return null
  }

  if (
    'selectedOption' in raw &&
    typeof raw.selectedOption === 'string' &&
    'selectedReasons' in raw &&
    Array.isArray(raw.selectedReasons) &&
    raw.selectedReasons.every((item) => typeof item === 'string') &&
    'rationale' in raw &&
    typeof raw.rationale === 'string'
  ) {
    return raw as ScenarioOrTradeoffAnswer
  }

  return null
}

const getCritiqueAnswer = (raw: AnswerMap[string] | undefined): CritiqueAnswer | null => {
  if (!raw || typeof raw !== 'object') {
    return null
  }

  if (
    'selectedIssues' in raw &&
    Array.isArray(raw.selectedIssues) &&
    raw.selectedIssues.every((item) => typeof item === 'string') &&
    'severity' in raw &&
    typeof raw.severity === 'string' &&
    'rationale' in raw &&
    typeof raw.rationale === 'string'
  ) {
    return raw as CritiqueAnswer
  }

  return null
}

const getRewriteAnswer = (raw: AnswerMap[string] | undefined): RewriteAnswer | null => {
  if (!raw || typeof raw !== 'object') {
    return null
  }

  if ('problemStatement' in raw || 'successCriteria' in raw || 'primaryUser' in raw) {
    return raw as RewriteAnswer
  }

  return null
}

const getAICollaborationAnswer = (
  raw: AnswerMap[string] | undefined
): AICollaborationAnswer | null => {
  if (!raw || typeof raw !== 'object') {
    return null
  }

  if (
    'buckets' in raw &&
    typeof raw.buckets === 'object' &&
    raw.buckets !== null &&
    Object.values(raw.buckets as Record<string, unknown>).every((value) => typeof value === 'string') &&
    'finalJudgment' in raw &&
    typeof raw.finalJudgment === 'string'
  ) {
    return raw as AICollaborationAnswer
  }

  return null
}

type ScoreTaskCollection = {
  taskScores: Record<string, TaskScoreOutput>
  completedTaskCount: number
  safeLanguageCount: number
}

const scoreTasks = (tasks: AssessmentTask[], answers: AnswerMap): ScoreTaskCollection => {
  const taskScores: Record<string, TaskScoreOutput> = {}
  let completedTaskCount = 0
  let safeLanguageCount = 0

  for (const task of tasks) {
    const rawAnswer = answers[task.id]
    let scored: TaskScoreOutput

    if (task.id === 'T1') {
      scored = scoreScenarioTask('T1', task, getScenarioOrTradeoffAnswer(rawAnswer))
    } else if (task.id === 'T2') {
      scored = scoreScenarioTask('T2', task, getScenarioOrTradeoffAnswer(rawAnswer))
    } else if (task.id === 'T3') {
      scored = scoreT3(task, getScenarioOrTradeoffAnswer(rawAnswer))
    } else if (task.id === 'T4') {
      scored = scoreT4(task, getScenarioOrTradeoffAnswer(rawAnswer))
    } else if (task.id === 'T5') {
      scored = scoreCritiqueTask('T5', task, getCritiqueAnswer(rawAnswer))
    } else if (task.id === 'T6') {
      scored = scoreCritiqueTask('T6', task, getCritiqueAnswer(rawAnswer))
    } else if (task.id === 'T7') {
      scored = scoreT7(task, getRewriteAnswer(rawAnswer))
    } else if (task.id === 'T8') {
      scored = scoreT8(task, getAICollaborationAnswer(rawAnswer))
    } else {
      scored = emptyTaskScore(task.id)
    }

    if (scored.completed) {
      completedTaskCount += 1
    }
    if (scored.safeLanguageUsed) {
      safeLanguageCount += 1
    }

    taskScores[task.id] = scored
  }

  return { taskScores, completedTaskCount, safeLanguageCount }
}

const getCompletionPenalty = (completedTaskCount: number, totalTaskCount: number): number => {
  const missing = totalTaskCount - completedTaskCount

  if (missing <= 0) {
    return 1
  }
  if (missing === 1) {
    return 0.95
  }
  if (missing === 2) {
    return 0.88
  }
  return 0.75
}

const distributeCapabilities = (taskScores: Record<string, TaskScoreOutput>) => {
  const capabilityPoints: Record<CapabilityKey, number> = {
    problemFraming: 0,
    flowJudgment: 0,
    systemAwareness: 0,
    tradeoffQuality: 0,
    aiCollaborationMaturity: 0
  }
  const capabilityMax: Record<CapabilityKey, number> = {
    problemFraming: 0,
    flowJudgment: 0,
    systemAwareness: 0,
    tradeoffQuality: 0,
    aiCollaborationMaturity: 0
  }

  for (const [taskId, score] of Object.entries(taskScores)) {
    const distribution = CAPABILITY_MATRIX[taskId]
    const taskWeight = TASK_WEIGHTS[taskId]
    if (!distribution || !taskWeight) {
      continue
    }

    for (const capability of CAPABILITY_ORDER) {
      const contributionWeight = distribution[capability]
      if (contributionWeight <= 0) {
        continue
      }

      capabilityPoints[capability] += score.total * (contributionWeight / taskWeight)
      capabilityMax[capability] += contributionWeight
    }
  }

  const capabilityScores: Record<CapabilityKey, number> = {
    problemFraming: 0,
    flowJudgment: 0,
    systemAwareness: 0,
    tradeoffQuality: 0,
    aiCollaborationMaturity: 0
  }

  for (const capability of CAPABILITY_ORDER) {
    const maxValue = capabilityMax[capability]
    if (maxValue <= 0) {
      capabilityScores[capability] = 0
      continue
    }
    capabilityScores[capability] = roundTo((capabilityPoints[capability] / maxValue) * 100)
  }

  return capabilityScores
}

const getLevelFromScore = (score: number): AssessmentLevel => {
  if (score >= 85) {
    return 'Product Judge'
  }
  if (score >= 70) {
    return 'System Designer'
  }
  if (score >= 55) {
    return 'Flow Thinker'
  }
  if (score >= 40) {
    return 'Reliable Builder'
  }
  return 'Executor'
}

const sortCapabilities = (capabilityScores: Record<CapabilityKey, number>) => {
  const sorted = [...CAPABILITY_ORDER].sort(
    (left, right) => capabilityScores[right] - capabilityScores[left]
  )

  return {
    top: sorted.slice(0, 2),
    bottom: [...sorted].reverse().slice(0, 2)
  }
}

export type ScoringSnapshot = {
  finalScore: number
  level: AssessmentLevel
  capabilityScores: Record<CapabilityKey, number>
  taskScores: Record<string, TaskScoreDetail>
  completedTaskCount: number
  completionPenalty: number
  safeLanguageCount: number
  topCapabilities: CapabilityKey[]
  lowestCapabilities: CapabilityKey[]
}

export const scoreAssessment = (tasks: AssessmentTask[], answers: AnswerMap): ScoringSnapshot => {
  const { taskScores, completedTaskCount, safeLanguageCount } = scoreTasks(tasks, answers)
  const capabilityScores = distributeCapabilities(taskScores)

  let weightedScore = 0
  for (const capability of CAPABILITY_ORDER) {
    weightedScore += capabilityScores[capability] * (CAPABILITY_WEIGHTS[capability] / 100)
  }

  const completionPenalty = getCompletionPenalty(completedTaskCount, tasks.length)
  weightedScore *= completionPenalty

  if (safeLanguageCount >= 3) {
    weightedScore = Math.min(weightedScore, 84)
  }

  // Product Judge should require balanced high capability, not just one strong slice.
  if (
    weightedScore >= 85 &&
    (capabilityScores.problemFraming < 84 ||
      capabilityScores.tradeoffQuality < 84 ||
      capabilityScores.aiCollaborationMaturity < 80)
  ) {
    weightedScore = 84
  }

  const finalScore = Math.round(clamp(weightedScore, 0, 100))
  const level = getLevelFromScore(finalScore)
  const { top, bottom } = sortCapabilities(capabilityScores)

  const normalizedTaskScores: Record<string, TaskScoreDetail> = {}
  for (const [taskId, score] of Object.entries(taskScores)) {
    normalizedTaskScores[taskId] = {
      objective: score.objective,
      judgment: score.judgment,
      total: score.total,
      max: score.max,
      completed: score.completed
    }
  }

  return {
    finalScore,
    level,
    capabilityScores,
    taskScores: normalizedTaskScores,
    completedTaskCount,
    completionPenalty: roundTo(completionPenalty),
    safeLanguageCount,
    topCapabilities: top,
    lowestCapabilities: bottom
  }
}
