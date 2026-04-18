import { useLocale } from '../state/LocaleContext'

type ProgressBarProps = {
  current: number
  total: number
}

const PROGRESS_COPY = {
  vi: {
    aria: 'Câu',
    of: 'trên',
    label: 'Câu'
  },
  en: {
    aria: 'Task',
    of: 'of',
    label: 'Task'
  }
} as const

export const ProgressBar = ({ current, total }: ProgressBarProps) => {
  const { locale } = useLocale()
  const copy = PROGRESS_COPY[locale]
  const percent = Math.min(100, Math.max(0, (current / total) * 100))

  return (
    <div className="progress-root" aria-label={`${copy.aria} ${current} ${copy.of} ${total}`}>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${percent}%` }} />
      </div>
      <p className="progress-text">
        {copy.label} {current}/{total}
      </p>
    </div>
  )
}
