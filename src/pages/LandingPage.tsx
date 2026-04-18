import { Link } from 'react-router-dom'
import { useLocale } from '../state/LocaleContext'

type CellTone = 'danger' | 'critical' | 'warning' | 'strategic' | 'leverage' | 'builder'

type MatrixCell = {
  icon: string
  tone: CellTone
  text: string
}

type MatrixRow = {
  label: string
  cells: [MatrixCell, MatrixCell, MatrixCell]
}

type MatrixSection = {
  title: string
  subtitle: string
  columns: [string, string, string]
  highlightColumn?: 0 | 1 | 2
  rows: MatrixRow[]
}

type LandingCopy = {
  eyebrow: string
  title: string
  description: string
  urgency: string
  bullets: [string, string, string]
  cta: string
  legendTitle: string
  legend: [string, string, string, string, string]
  tableOne: MatrixSection
  tableTwo: MatrixSection
}

const LANDING_COPY: Record<'vi' | 'en', LandingCopy> = {
  vi: {
    eyebrow: 'AI-Era Product Positioning Check',
    title: 'AI đang nén giá trị làm UI/UX. Bạn đang đứng ở đâu?',
    description:
      'Bài self-check 15-20 phút cho người build sản phẩm số. Không phải bài tuyển dụng. Không phải bài test riêng cho Designer.',
    urgency:
      'Novice và Junior Designer đang chịu áp lực cực cao. Senior Designer không tự động an toàn. Software Engineer biết build + dùng AI + có product/UX judgment đang có lợi thế tăng nhanh.',
    bullets: [
      '8 tình huống thực tế, không phải quiz lý thuyết',
      'Kết quả cho bạn thấy vùng bị nén giá trị và vùng còn leverage',
      'Xong bài sẽ có hướng nâng cấp cụ thể để không bị bypass'
    ],
    cta: 'Bắt đầu self-check',
    legendTitle: 'Ký hiệu nhanh',
    legend: [
      '☠ Rủi ro rất nặng',
      '🔥 Áp lực bị thay thế cao',
      '⚠ Cảnh báo / chuyển tiếp',
      '🧠 Tư duy và phán đoán',
      '★ Tận dụng AI'
    ],
    tableOne: {
      title: 'Novice / Junior / AI: ai đang ép mạnh nhất vào đâu?',
      subtitle: 'Nhìn nhanh lớp công việc đang bị nén mạnh nhất ở thời điểm hiện tại.',
      columns: ['Novice Designer', 'Junior Designer', 'AI Operator + Tools'],
      rows: [
        {
          label: 'Áp lực hiện tại',
          cells: [
            { icon: '🔥', tone: 'critical', text: 'Áp lực cực cao ở lớp làm màn hình cơ bản.' },
            { icon: '🔥', tone: 'danger', text: 'Áp lực cao ở output UI và tốc độ draft.' },
            { icon: '★', tone: 'leverage', text: 'Đang tăng năng suất rất nhanh ở lớp này.' }
          ]
        },
        {
          label: 'AI đã thay được phần nào',
          cells: [
            { icon: '☠', tone: 'critical', text: 'Wireframe và first draft đã bị thay phần lớn.' },
            { icon: '🔥', tone: 'danger', text: 'Nhiều task chỉnh layout cơ bản bị tự động hóa.' },
            { icon: '★', tone: 'leverage', text: 'Sinh nhiều phương án và copy draft trong vài phút.' }
          ]
        },
        {
          label: 'Vì sao công ty bớt cần vị trí này',
          cells: [
            { icon: '🔥', tone: 'danger', text: 'Team lean không justify được vai trò chỉ vẽ màn hình.' },
            { icon: '🔥', tone: 'danger', text: 'Công ty ưu tiên người xử lý được vấn đề khó hơn.' },
            { icon: '★', tone: 'builder', text: 'Chi phí thấp và tốc độ cao cho output bề mặt.' }
          ]
        },
        {
          label: 'Rủi ro hoặc điểm yếu',
          cells: [
            { icon: '☠', tone: 'critical', text: 'Nguy cơ bị bypass rất mạnh ở vị trí entry-level.' },
            { icon: '🔥', tone: 'danger', text: 'Cạnh tranh khốc liệt, JD đòi skill rộng hơn nhiều.' },
            { icon: '⚠', tone: 'warning', text: 'Bị kỳ vọng như baseline thay vì điểm cộng khác biệt.' }
          ]
        },
        {
          label: 'Muốn còn giá trị thì phải nâng cấp gì',
          cells: [
            { icon: '🧠', tone: 'strategic', text: 'Nâng problem framing và flow critique theo bối cảnh.' },
            { icon: '🧠', tone: 'strategic', text: 'Giỏi trade-off và state logic, không chỉ polished UI.' },
            { icon: '★', tone: 'leverage', text: 'Dùng AI làm lực đòn bẩy, không giao quyền quyết định.' }
          ]
        }
      ]
    },
    tableTwo: {
      title: 'AI / Senior Designer / Software Engineer + AI: ai đang có leverage hơn?',
      subtitle: 'Trong team lean, doanh nghiệp ngày càng nghiêng về ai cho bài toán sản phẩm thực chiến.',
      columns: ['AI Operator + Tools', 'Senior Designer', 'Software Engineer + AI'],
      highlightColumn: 2,
      rows: [
        {
          label: 'Điểm mạnh hiện tại',
          cells: [
            { icon: '★', tone: 'leverage', text: 'Ra draft rất nhanh, phủ nhiều phương án rẻ.' },
            { icon: '🧠', tone: 'strategic', text: 'Giữ chất lượng quyết định và coherence trải nghiệm.' },
            { icon: '🛠', tone: 'builder', text: 'Vừa quyết định vừa build và kiểm chứng trực tiếp.' }
          ]
        },
        {
          label: 'Phần nào AI đã ăn vào',
          cells: [
            { icon: '★', tone: 'leverage', text: 'Đã chiếm phần lớn lớp output lặp lại.' },
            { icon: '⚠', tone: 'warning', text: 'Một phần production craft bị nén nhanh.' },
            { icon: '⚠', tone: 'warning', text: 'Code boilerplate và pattern phổ biến bị nén.' }
          ]
        },
        {
          label: 'Khi nào doanh nghiệp nghiêng về lựa chọn này',
          cells: [
            { icon: '⚠', tone: 'warning', text: 'Khi chỉ cần khám phá phương án nhanh, chi phí thấp.' },
            { icon: '🧠', tone: 'strategic', text: 'Khi cần người chốt quality bar và logic liên hệ thống.' },
            { icon: '★', tone: 'builder', text: 'Khi cần tốc độ build + judgment trong team nhỏ.' }
          ]
        },
        {
          label: 'Rủi ro / điểm yếu',
          cells: [
            { icon: '🔥', tone: 'danger', text: 'Thiếu bối cảnh nên dễ sai ưu tiên quan trọng.' },
            { icon: '⚠', tone: 'warning', text: 'Nếu không cập nhật AI workflow sẽ hụt tốc độ.' },
            { icon: '⚠', tone: 'warning', text: 'Nếu thiếu tư duy trải nghiệm sẽ ship nhanh nhưng lệch.' }
          ]
        },
        {
          label: 'Hướng nâng cấp bắt buộc',
          cells: [
            { icon: '🧠', tone: 'strategic', text: 'Kết hợp guardrail theo domain thay vì dùng mù quáng.' },
            { icon: '★', tone: 'leverage', text: 'Giữ vai trò decision owner và hệ thống hóa tiêu chí.' },
            { icon: '★', tone: 'builder', text: 'Đào sâu product/UX judgment để mở rộng leverage dài hạn.' }
          ]
        }
      ]
    }
  },
  en: {
    eyebrow: 'AI-Era Product Positioning Check',
    title: 'AI is compressing UI/UX production value. Where do you stand?',
    description:
      'A 15-20 minute self-check for digital product builders. Not a hiring test. Not a designer-only test.',
    urgency:
      'Novice and Junior Designers face the highest pressure. Senior Designers are not automatically safe. Software Engineers who build fast with AI and add product/UX judgment are gaining leverage quickly.',
    bullets: [
      '8 practical tasks, not theory trivia',
      'Result shows where your value is being compressed and where leverage remains',
      'You leave with a direct upgrade direction to avoid being bypassed'
    ],
    cta: 'Start Self-Check',
    legendTitle: 'Quick legend',
    legend: [
      '☠ Very severe risk',
      '🔥 High replacement pressure',
      '⚠ Transition / warning',
      '🧠 Thinking and judgment',
      '★ AI leverage'
    ],
    tableOne: {
      title: 'Novice / Junior / AI: where is pressure strongest now?',
      subtitle: 'A compact view of which work layers are being compressed fastest right now.',
      columns: ['Novice Designer', 'Junior Designer', 'AI Operator + Tools'],
      rows: [
        {
          label: 'Current pressure',
          cells: [
            { icon: '🔥', tone: 'critical', text: 'Extremely high pressure on basic screen-production work.' },
            { icon: '🔥', tone: 'danger', text: 'High pressure on UI output and draft speed.' },
            { icon: '★', tone: 'leverage', text: 'Rapidly increasing productivity in this layer.' }
          ]
        },
        {
          label: 'What AI already replaced',
          cells: [
            { icon: '☠', tone: 'critical', text: 'Wireframes and first drafts are largely replaced.' },
            { icon: '🔥', tone: 'danger', text: 'Many basic layout-cleanup tasks are automated.' },
            { icon: '★', tone: 'leverage', text: 'Generates multiple options and copy drafts in minutes.' }
          ]
        },
        {
          label: 'Why companies need these roles less',
          cells: [
            { icon: '🔥', tone: 'danger', text: 'Lean teams struggle to justify screen-only roles.' },
            { icon: '🔥', tone: 'danger', text: 'Companies prioritize people who solve harder problems.' },
            { icon: '★', tone: 'builder', text: 'Low cost and high speed for surface-level output.' }
          ]
        },
        {
          label: 'Risk or weakness',
          cells: [
            { icon: '☠', tone: 'critical', text: 'High bypass risk for entry-level positioning.' },
            { icon: '🔥', tone: 'danger', text: 'Competition is intense; JDs now demand wider scope.' },
            { icon: '⚠', tone: 'warning', text: 'Often treated as baseline, not as differentiated value.' }
          ]
        },
        {
          label: 'Required upgrade to stay valuable',
          cells: [
            { icon: '🧠', tone: 'strategic', text: 'Strengthen problem framing and context-aware critique.' },
            { icon: '🧠', tone: 'strategic', text: 'Get stronger at trade-offs and state logic, not polish only.' },
            { icon: '★', tone: 'leverage', text: 'Use AI as leverage, not as the final decision-maker.' }
          ]
        }
      ]
    },
    tableTwo: {
      title: 'AI / Senior Designer / Software Engineer + AI: who has more leverage?',
      subtitle: 'In lean teams, companies increasingly choose based on practical decision + shipping leverage.',
      columns: ['AI Operator + Tools', 'Senior Designer', 'Software Engineer + AI'],
      highlightColumn: 2,
      rows: [
        {
          label: 'Current strength',
          cells: [
            { icon: '★', tone: 'leverage', text: 'Produces drafts quickly with broad option coverage.' },
            { icon: '🧠', tone: 'strategic', text: 'Holds quality bar and cross-flow experience coherence.' },
            { icon: '🛠', tone: 'builder', text: 'Can decide, implement, and validate in one loop.' }
          ]
        },
        {
          label: 'Where AI already cuts in',
          cells: [
            { icon: '★', tone: 'leverage', text: 'Already owns much of repetitive output work.' },
            { icon: '⚠', tone: 'warning', text: 'Part of production craft is being compressed quickly.' },
            { icon: '⚠', tone: 'warning', text: 'Boilerplate code and common patterns are compressed.' }
          ]
        },
        {
          label: 'When businesses lean toward this option',
          cells: [
            { icon: '⚠', tone: 'warning', text: 'When they need fast option generation at low cost.' },
            { icon: '🧠', tone: 'strategic', text: 'When they need system-level quality and decision clarity.' },
            { icon: '★', tone: 'builder', text: 'When they need speed and judgment in a lean product team.' }
          ]
        },
        {
          label: 'Risk / weakness',
          cells: [
            { icon: '🔥', tone: 'danger', text: 'Weak context handling can miss critical priorities.' },
            { icon: '⚠', tone: 'warning', text: 'Without AI-native workflow, speed gap grows quickly.' },
            { icon: '⚠', tone: 'warning', text: 'Without UX judgment, fast shipping can still miss the mark.' }
          ]
        },
        {
          label: 'Mandatory upgrade direction',
          cells: [
            { icon: '🧠', tone: 'strategic', text: 'Add domain guardrails instead of blind usage.' },
            { icon: '★', tone: 'leverage', text: 'Stay as decision owner and codify quality criteria.' },
            { icon: '★', tone: 'builder', text: 'Deepen product/UX judgment for stronger long-term leverage.' }
          ]
        }
      ]
    }
  }
}

const toneClass: Record<CellTone, string> = {
  danger: 'tone-danger',
  critical: 'tone-critical',
  warning: 'tone-warning',
  strategic: 'tone-strategic',
  leverage: 'tone-leverage',
  builder: 'tone-builder'
}

const ImpactMatrix = ({ section }: { section: MatrixSection }) => {
  return (
    <div className="matrix-wrap" role="region" aria-label={section.title}>
      <table className="impact-matrix">
        <thead>
          <tr>
            <th className="matrix-corner" scope="col">
              —
            </th>
            {section.columns.map((column, index) => (
              <th
                key={column}
                className={section.highlightColumn === index ? 'matrix-col-head is-highlight' : 'matrix-col-head'}
                scope="col"
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {section.rows.map((row) => (
            <tr key={row.label}>
              <th className="matrix-row-head" scope="row">
                {row.label}
              </th>
              {row.cells.map((cell, index) => (
                <td
                  key={`${row.label}-${index}`}
                  className={`matrix-cell ${toneClass[cell.tone]} ${
                    section.highlightColumn === index ? 'is-highlight-column' : ''
                  }`}
                >
                  <span className="cell-content">
                    <span
                      className={`cell-icon ${cell.icon === '☠' ? 'is-skull' : ''}`}
                      aria-hidden="true"
                    >
                      {cell.icon}
                    </span>
                    <span>{cell.text}</span>
                  </span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export const LandingPage = () => {
  const { locale } = useLocale()
  const copy = LANDING_COPY[locale]

  return (
    <main className="page-shell">
      <section className="hero-block landing-hero">
        <p className="eyebrow">{copy.eyebrow}</p>
        <h1 className="page-title">{copy.title}</h1>
        <p className="page-description">{copy.description}</p>
        <p className="landing-urgency">{copy.urgency}</p>
        <ul className="landing-points">
          {copy.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
        <Link className="button-primary" to="/intro">
          {copy.cta}
        </Link>
      </section>

      <section className="content-block landing-content">
        <div className="panel matrix-panel">
          <h2 className="section-title">{copy.tableOne.title}</h2>
          <p className="page-description matrix-subtitle">{copy.tableOne.subtitle}</p>
          <div className="matrix-legend" aria-label={copy.legendTitle}>
            {copy.legend.map((item) => (
              <span key={item} className="legend-chip">
                {item}
              </span>
            ))}
          </div>
          <ImpactMatrix section={copy.tableOne} />
        </div>

        <div className="panel matrix-panel">
          <h2 className="section-title">{copy.tableTwo.title}</h2>
          <p className="page-description matrix-subtitle">{copy.tableTwo.subtitle}</p>
          <ImpactMatrix section={copy.tableTwo} />
        </div>
      </section>
    </main>
  )
}
