import { useLocale } from '../../state/LocaleContext'
import type { RewriteTask as RewriteTaskConfig, RewriteAnswer } from '../../types/tasks'

type RewriteTaskProps = {
  task: RewriteTaskConfig
  answer?: RewriteAnswer
  onChange: (answer: RewriteAnswer) => void
}

const COPY = {
  vi: {
    weakBrief: 'Đề bài gốc còn mơ hồ',
    placeholder: 'Trả lời ngắn gọn, thực tế.'
  },
  en: {
    weakBrief: 'Weak brief',
    placeholder: 'Short, practical answer.'
  }
} as const

const getDefaultAnswer = (): RewriteAnswer => ({})

export const RewriteTask = ({ task, answer, onChange }: RewriteTaskProps) => {
  const { locale } = useLocale()
  const copy = COPY[locale]
  const currentAnswer = answer ?? getDefaultAnswer()

  const setFieldValue = (fieldId: string, value: string) => {
    onChange({
      ...currentAnswer,
      [fieldId]: value
    })
  }

  return (
    <div className="task-layout">
      <p className="task-context">{task.context}</p>
      <h2 className="task-prompt">{task.prompt}</h2>

      <div className="brief-block">
        <p className="field-label">{copy.weakBrief}</p>
        <blockquote>{task.weakBrief}</blockquote>
      </div>

      {task.fields.map((field) => (
        <label key={field.id} className="field-group">
          <span className="field-label">{field.label}</span>
          <span className="helper-text">{field.helper}</span>
          <textarea
            className="text-input"
            rows={3}
            value={currentAnswer[field.id] ?? ''}
            onChange={(event) => setFieldValue(field.id, event.target.value)}
            placeholder={copy.placeholder}
          />
        </label>
      ))}
    </div>
  )
}
