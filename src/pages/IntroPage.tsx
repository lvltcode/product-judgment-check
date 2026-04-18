import { Link } from 'react-router-dom'
import { useLocale } from '../state/LocaleContext'

const INTRO_COPY = {
  vi: {
    title: 'Trước khi bắt đầu',
    description:
      'Bài đánh giá này thiên về thực tế, không thiên về lý thuyết. Một số bài buộc bạn phải chọn giữa các phương án chưa hoàn hảo. Cách nghĩ rõ ràng quan trọng hơn câu chữ bóng bẩy.',
    taskTypesTitle: 'Các dạng bài trong lượt này',
    expectationsTitle: 'Những gì bạn sẽ gặp',
    oneTask: 'Mỗi màn chỉ có một bài',
    visibleProgress: 'Luôn thấy tiến độ làm bài',
    concise: 'Không cần câu chữ hoàn hảo',
    directional: 'Kết quả mang tính định hướng, không phải chứng chỉ',
    back: 'Quay lại',
    begin: 'Bắt đầu làm bài'
  },
  en: {
    title: 'Before you begin',
    description:
      'This assessment is practical, not theoretical. Some tasks require choosing between imperfect options. Clear thinking matters more than polished writing.',
    taskTypesTitle: 'Task types in this run',
    expectationsTitle: 'What to expect',
    oneTask: 'One task per screen',
    visibleProgress: 'Progress is visible throughout',
    concise: 'No perfect wording required',
    directional: 'Result is directional, not a formal certification',
    back: 'Back',
    begin: 'Begin Tasks'
  }
} as const

export const IntroPage = () => {
  const { locale } = useLocale()
  const copy = INTRO_COPY[locale]

  return (
    <main className="page-shell">
      <section className="content-block">
        <h1 className="page-title">{copy.title}</h1>
        <p className="page-description">{copy.description}</p>

        <div className="panel">
          <h2 className="section-title">{copy.taskTypesTitle}</h2>
          <ul className="meta-list">
            <li>Scenario-Based Assessment (2)</li>
            <li>Forced Trade-off (2)</li>
            <li>Critique Task (2)</li>
            <li>Rewrite Task (1)</li>
            <li>AI Collaboration Task (1)</li>
          </ul>
        </div>

        <div className="panel">
          <h2 className="section-title">{copy.expectationsTitle}</h2>
          <ul className="meta-list">
            <li>{copy.oneTask}</li>
            <li>{copy.visibleProgress}</li>
            <li>{copy.concise}</li>
            <li>{copy.directional}</li>
          </ul>
        </div>

        <div className="action-row">
          <Link className="button-secondary" to="/">
            {copy.back}
          </Link>
          <Link className="button-primary" to="/assessment">
            {copy.begin}
          </Link>
        </div>
      </section>
    </main>
  )
}
