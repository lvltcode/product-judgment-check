import type {
  AICollaborationAnswer,
  AssessmentTask,
  CritiqueAnswer,
  RewriteAnswer,
  ScenarioOrTradeoffAnswer,
  TaskAnswer
} from '../types/tasks'
import { AICollaborationTask } from './tasks/AICollaborationTask'
import { CritiqueTask } from './tasks/CritiqueTask'
import { RewriteTask } from './tasks/RewriteTask'
import { ScenarioTask } from './tasks/ScenarioTask'
import { TradeoffTask } from './tasks/TradeoffTask'

type TaskRendererProps = {
  task: AssessmentTask
  answer?: TaskAnswer
  onChange: (answer: TaskAnswer) => void
}

export const TaskRenderer = ({ task, answer, onChange }: TaskRendererProps) => {
  switch (task.type) {
    case 'scenario':
      return (
        <ScenarioTask
          task={task}
          answer={answer as ScenarioOrTradeoffAnswer | undefined}
          onChange={(nextAnswer) => onChange(nextAnswer)}
        />
      )

    case 'tradeoff':
      return (
        <TradeoffTask
          task={task}
          answer={answer as ScenarioOrTradeoffAnswer | undefined}
          onChange={(nextAnswer) => onChange(nextAnswer)}
        />
      )

    case 'critique':
      return (
        <CritiqueTask
          task={task}
          answer={answer as CritiqueAnswer | undefined}
          onChange={(nextAnswer) => onChange(nextAnswer)}
        />
      )

    case 'rewrite':
      return (
        <RewriteTask
          task={task}
          answer={answer as RewriteAnswer | undefined}
          onChange={(nextAnswer) => onChange(nextAnswer)}
        />
      )

    case 'ai-collaboration':
      return (
        <AICollaborationTask
          task={task}
          answer={answer as AICollaborationAnswer | undefined}
          onChange={(nextAnswer) => onChange(nextAnswer)}
        />
      )

    default:
      return null
  }
}
