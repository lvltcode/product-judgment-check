import { Link } from 'react-router-dom'
import { useLocale } from '../state/LocaleContext'

const NOT_FOUND_COPY = {
  vi: {
    title: 'Không tìm thấy trang',
    description: 'Hãy quay về luồng chính để tiếp tục bài đánh giá.',
    cta: 'Về trang bắt đầu'
  },
  en: {
    title: 'Page not found',
    description: 'Use the main flow to continue the assessment.',
    cta: 'Go to Landing'
  }
} as const

export const NotFoundPage = () => {
  const { locale } = useLocale()
  const copy = NOT_FOUND_COPY[locale]

  return (
    <main className="page-shell">
      <section className="content-block">
        <h1 className="page-title">{copy.title}</h1>
        <p className="page-description">{copy.description}</p>
        <Link className="button-primary" to="/">
          {copy.cta}
        </Link>
      </section>
    </main>
  )
}
