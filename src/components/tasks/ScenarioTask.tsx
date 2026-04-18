import { useLocale } from '../../state/LocaleContext'
import type { ScenarioOrTradeoffTask, ScenarioOrTradeoffAnswer } from '../../types/tasks'

type ScenarioTaskProps = {
  task: ScenarioOrTradeoffTask
  answer?: ScenarioOrTradeoffAnswer
  onChange: (answer: ScenarioOrTradeoffAnswer) => void
}

const COPY = {
  vi: {
    primaryDirection: 'Hướng chính',
    selected: 'đã chọn',
    placeholder: 'Giữ câu trả lời ngắn gọn.'
  },
  en: {
    primaryDirection: 'Primary direction',
    selected: 'selected',
    placeholder: 'Keep this concise.'
  }
} as const

const getDefaultAnswer = (): ScenarioOrTradeoffAnswer => ({
  selectedOption: '',
  selectedReasons: [],
  rationale: ''
})

export const ScenarioTask = ({ task, answer, onChange }: ScenarioTaskProps) => {
  const { locale } = useLocale()
  const copy = COPY[locale]
  const currentAnswer = answer ?? getDefaultAnswer()

  const toggleReason = (reason: string) => {
    const alreadySelected = currentAnswer.selectedReasons.includes(reason)

    if (alreadySelected) {
      onChange({
        ...currentAnswer,
        selectedReasons: currentAnswer.selectedReasons.filter((item) => item !== reason)
      })
      return
    }

    if (currentAnswer.selectedReasons.length >= task.maxReasonSelections) {
      return
    }

    onChange({
      ...currentAnswer,
      selectedReasons: [...currentAnswer.selectedReasons, reason]
    })
  }

  return (
    <div className="task-layout">
      <p className="task-context">{task.context}</p>
      <h2 className="task-prompt">{task.prompt}</h2>

      <fieldset className="field-group">
        <legend className="field-label">{copy.primaryDirection}</legend>
        {task.primaryOptions.map((option) => (
          <label key={option} className="choice-row">
            <input
              type="radio"
              name={`${task.id}-primary`}
              checked={currentAnswer.selectedOption === option}
              onChange={() =>
                onChange({
                  ...currentAnswer,
                  selectedOption: option
                })
              }
            />
            <span>{option}</span>
          </label>
        ))}
      </fieldset>

      <fieldset className="field-group">
        <legend className="field-label">{task.reasonLabel}</legend>
        {task.reasonOptions.map((reason) => (
          <label key={reason} className="choice-row">
            <input
              type="checkbox"
              checked={currentAnswer.selectedReasons.includes(reason)}
              onChange={() => toggleReason(reason)}
            />
            <span>{reason}</span>
          </label>
        ))}
        <p className="helper-text">
          {currentAnswer.selectedReasons.length}/{task.maxReasonSelections} {copy.selected}
        </p>
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
