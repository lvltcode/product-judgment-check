import { useEffect, useState } from 'react'
import { useLocale } from '../../state/LocaleContext'
import type { CritiqueTask as CritiqueTaskConfig, CritiqueAnswer } from '../../types/tasks'

type CritiqueTaskProps = {
  task: CritiqueTaskConfig
  answer?: CritiqueAnswer
  onChange: (answer: CritiqueAnswer) => void
}

const COPY = {
  vi: {
    assetFallbackAlt: 'Hình minh họa bài phản biện',
    assetMissingTitle: 'Không tải được hình minh họa.',
    assetMissingDescription: 'Bạn vẫn có thể tiếp tục dựa trên mô tả bên dưới.',
    selected: 'đã chọn',
    placeholder: 'Tập trung vào tác động, không chỉ bề mặt thị giác.'
  },
  en: {
    assetFallbackAlt: 'Critique task visual asset',
    assetMissingTitle: 'Could not load the visual asset.',
    assetMissingDescription: 'You can still continue using the summary below.',
    selected: 'selected',
    placeholder: 'Focus on impact, not visual polish only.'
  }
} as const

const getDefaultAnswer = (): CritiqueAnswer => ({
  selectedIssues: [],
  severity: '',
  rationale: ''
})

export const CritiqueTask = ({ task, answer, onChange }: CritiqueTaskProps) => {
  const { locale } = useLocale()
  const copy = COPY[locale]
  const currentAnswer = answer ?? getDefaultAnswer()
  const [assetLoadFailed, setAssetLoadFailed] = useState(false)

  useEffect(() => {
    setAssetLoadFailed(false)
  }, [task.id, task.assetSrc])

  const toggleIssue = (issue: string) => {
    const alreadySelected = currentAnswer.selectedIssues.includes(issue)

    if (alreadySelected) {
      onChange({
        ...currentAnswer,
        selectedIssues: currentAnswer.selectedIssues.filter((item) => item !== issue)
      })
      return
    }

    if (currentAnswer.selectedIssues.length >= task.maxIssueSelections) {
      return
    }

    onChange({
      ...currentAnswer,
      selectedIssues: [...currentAnswer.selectedIssues, issue]
    })
  }

  return (
    <div className="task-layout">
      <p className="task-context">{task.context}</p>
      <h2 className="task-prompt">{task.prompt}</h2>

      {task.assetSrc && !assetLoadFailed ? (
        <figure className="critique-asset">
          <img
            className="critique-asset-image"
            src={task.assetSrc}
            alt={task.assetAlt ?? copy.assetFallbackAlt}
            loading="lazy"
            onError={() => setAssetLoadFailed(true)}
          />
          <figcaption className="helper-text">{task.assetIntent}</figcaption>
        </figure>
      ) : (
        <div className="asset-placeholder" role="note" aria-live="polite">
          <strong>{copy.assetMissingTitle}</strong>
          <p>{copy.assetMissingDescription}</p>
          <p>{task.assetIntent}</p>
        </div>
      )}

      <fieldset className="field-group">
        <legend className="field-label">{task.issueLabel}</legend>
        {task.issueOptions.map((issue) => (
          <label key={issue} className="choice-row">
            <input
              type="checkbox"
              checked={currentAnswer.selectedIssues.includes(issue)}
              onChange={() => toggleIssue(issue)}
            />
            <span>{issue}</span>
          </label>
        ))}
        <p className="helper-text">
          {currentAnswer.selectedIssues.length}/{task.maxIssueSelections} {copy.selected}
        </p>
      </fieldset>

      <fieldset className="field-group">
        <legend className="field-label">{task.severityPrompt}</legend>
        {task.severityOptions.map((option) => (
          <label key={option} className="choice-row">
            <input
              type="radio"
              name={`${task.id}-severity`}
              checked={currentAnswer.severity === option}
              onChange={() =>
                onChange({
                  ...currentAnswer,
                  severity: option
                })
              }
            />
            <span>{option}</span>
          </label>
        ))}
      </fieldset>

      <label className="field-group">
        <span className="field-label">{task.rationalePrompt}</span>
        <textarea
          className="text-input"
          rows={4}
          value={currentAnswer.rationale}
          onChange={(event) =>
            onChange({
              ...currentAnswer,
              rationale: event.target.value
            })
          }
          placeholder={copy.placeholder}
        />
      </label>
    </div>
  )
}
