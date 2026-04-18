import { useLocale } from '../../state/LocaleContext'
import type {
  AICollaborationTask as AICollaborationTaskConfig,
  AICollaborationAnswer
} from '../../types/tasks'

type AICollaborationTaskProps = {
  task: AICollaborationTaskConfig
  answer?: AICollaborationAnswer
  onChange: (answer: AICollaborationAnswer) => void
}

const COPY = {
  vi: {
    originalPrompt: 'Yêu cầu gốc',
    outputSummary: 'Tóm tắt đầu ra AI',
    bucketPlaceholder: 'Ghi nhận định ngắn gọn.',
    finalPlaceholder: 'Tóm tắt đánh giá tổng thể trong 2-4 câu.'
  },
  en: {
    originalPrompt: 'Original prompt',
    outputSummary: 'AI output summary',
    bucketPlaceholder: 'Concise judgment notes.',
    finalPlaceholder: 'Overall judgment in 2-4 sentences.'
  }
} as const

const getDefaultAnswer = (task: AICollaborationTaskConfig): AICollaborationAnswer => ({
  buckets: Object.fromEntries(task.buckets.map((bucket) => [bucket.id, ''])),
  finalJudgment: ''
})

export const AICollaborationTask = ({
  task,
  answer,
  onChange
}: AICollaborationTaskProps) => {
  const { locale } = useLocale()
  const copy = COPY[locale]
  const currentAnswer = answer ?? getDefaultAnswer(task)

  const setBucketValue = (bucketId: string, value: string) => {
    onChange({
      ...currentAnswer,
      buckets: {
        ...currentAnswer.buckets,
        [bucketId]: value
      }
    })
  }

  return (
    <div className="task-layout">
      <p className="task-context">{task.context}</p>
      <h2 className="task-prompt">{task.prompt}</h2>

      <div className="brief-block">
        <p className="field-label">{copy.originalPrompt}</p>
        <blockquote>{task.originalPrompt}</blockquote>
      </div>

      <div className="brief-block">
        <p className="field-label">{copy.outputSummary}</p>
        <ul className="summary-list">
          {task.aiOutputSummary.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      {task.buckets.map((bucket) => (
        <label key={bucket.id} className="field-group">
          <span className="field-label">{bucket.label}</span>
          <span className="helper-text">{bucket.helper}</span>
          <textarea
            className="text-input"
            rows={3}
            value={currentAnswer.buckets[bucket.id] ?? ''}
            onChange={(event) => setBucketValue(bucket.id, event.target.value)}
            placeholder={copy.bucketPlaceholder}
          />
        </label>
      ))}

      <label className="field-group">
        <span className="field-label">{task.finalJudgmentPrompt}</span>
        <textarea
          className="text-input"
          rows={4}
          value={currentAnswer.finalJudgment}
          onChange={(event) =>
            onChange({
              ...currentAnswer,
              finalJudgment: event.target.value
            })
          }
          placeholder={copy.finalPlaceholder}
        />
      </label>
    </div>
  )
}
