import type { AssessmentTask, AnswerMap } from '../types/tasks'
import type { AssessmentResult } from '../types/session'
import { scoreAssessment } from './engine'
import { buildAssessmentResult } from './resultDerivation'

export const generateAssessmentResult = (
  tasks: AssessmentTask[],
  answers: AnswerMap
): AssessmentResult => {
  const snapshot = scoreAssessment(tasks, answers)
  return buildAssessmentResult(snapshot)
}
