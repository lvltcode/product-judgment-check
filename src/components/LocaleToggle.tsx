import { useLocale } from '../state/LocaleContext'

export const LocaleToggle = () => {
  const { locale, setLocale } = useLocale()

  return (
    <div className="locale-toggle" role="group" aria-label="Language toggle">
      <button
        className={`locale-button ${locale === 'vi' ? 'is-active' : ''}`}
        type="button"
        onClick={() => setLocale('vi')}
      >
        VI
      </button>
      <span className="locale-separator" aria-hidden="true">
        |
      </span>
      <button
        className={`locale-button ${locale === 'en' ? 'is-active' : ''}`}
        type="button"
        onClick={() => setLocale('en')}
      >
        EN
      </button>
    </div>
  )
}
