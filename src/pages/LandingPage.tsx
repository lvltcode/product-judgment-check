import { Link } from 'react-router-dom'
import { useLocale } from '../state/LocaleContext'

const LANDING_COPY = {
  vi: {
    title:
      'Bài đánh giá ngắn để kiểm tra năng lực phán đoán về sản phẩm và trải nghiệm người dùng (UX) trong thời AI.',
    description:
      'Không kiểm tra Figma, không hỏi lý thuyết suông. Bạn sẽ đi qua các tình huống thực tế, bài đánh đổi, bài phản biện và cách xử lý đầu ra từ AI.',
    duration: 'Thời lượng: 15-20 phút',
    format: 'Hình thức: 8 bài thực tế',
    note: 'Thử nghiệm công khai: miễn phí, gọn nhẹ',
    cta: 'Bắt đầu bài đánh giá'
  },
  en: {
    title: 'A short assessment to check your product and UX judgment in the AI era.',
    description:
      'Not a Figma skill test and not theory trivia. You will work through practical scenarios, trade-offs, critiques, and AI collaboration decisions.',
    duration: 'Duration: 15-20 minutes',
    format: 'Format: 8 practical tasks',
    note: 'Public experiment: free and lightweight',
    cta: 'Start Assessment'
  }
} as const

export const LandingPage = () => {
  const { locale } = useLocale()
  const copy = LANDING_COPY[locale]

  return (
    <main className="page-shell">
      <section className="hero-block">
        <p className="eyebrow">AI-Era Product Judgment Check</p>
        <h1 className="page-title">{copy.title}</h1>
        <p className="page-description">{copy.description}</p>
        <ul className="meta-list">
          <li>{copy.duration}</li>
          <li>{copy.format}</li>
          <li>{copy.note}</li>
        </ul>
        <Link className="button-primary" to="/intro">
          {copy.cta}
        </Link>
      </section>
    </main>
  )
}
