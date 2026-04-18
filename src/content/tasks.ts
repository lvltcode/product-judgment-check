import type { Locale } from '../types/locale'
import type { AssessmentTask } from '../types/tasks'

const TASKS_VI: AssessmentTask[] = [
  {
    id: 'T1',
    type: 'scenario',
    title: 'Nên phát hành màn nào trước?',
    context:
      'Một ứng dụng cho giáo viên đang thêm cổng phụ huynh lần đầu. Nhóm chỉ có thể phát hành một màn trong v1: Home (tóm tắt bài học tuần này, buổi học kế tiếp, mục tiêu luyện tập) hoặc Pieces (danh sách tác phẩm kèm trạng thái và tiến độ).',
    prompt: 'Bạn sẽ ưu tiên màn nào trước?',
    primaryOptions: ['Home', 'Pieces'],
    reasonLabel: 'Lý do hỗ trợ (chọn tối đa 3)',
    reasonOptions: [
      'Nó giải quyết nhu cầu có tần suất sử dụng cao nhất của người dùng',
      'Nó cho phụ huynh sự rõ ràng ngay sau mỗi buổi học',
      'Nó giúp phụ huynh hành động trong tuần này thay vì chỉ lướt thông tin',
      'Nó đầy đủ hơn',
      'Nó có nhiều nội dung hơn',
      'Nó trông ấn tượng hơn',
      'Nó hỗ trợ vòng lặp cốt lõi theo tuần sớm hơn',
      'Nó giúp nhìn tiến độ dễ hơn'
    ],
    maxReasonSelections: 3,
    rationalePrompt: 'Vì sao bạn chọn hướng này?'
  },
  {
    id: 'T2',
    type: 'scenario',
    title: 'Bạn sẽ thử gì trước?',
    context:
      'Luồng thanh toán đang mất nhiều người dùng ở bước điền thông tin. Nhóm có hai hướng thử nghiệm tiếp theo: cải thiện nút hành động (CTA) và phần chữ hỗ trợ, hoặc giảm số trường bắt buộc.',
    prompt: 'Bạn sẽ thử hướng nào trước?',
    primaryOptions: ['Cải thiện nút hành động (CTA) và phần chữ hỗ trợ', 'Giảm số trường bắt buộc'],
    reasonLabel: 'Lý do hỗ trợ (chọn tối đa 3)',
    reasonOptions: [
      'Ma sát ở cấu trúc nhiều khả năng là thứ chặn hoàn tất',
      'Câu chữ rõ hơn có thể giúp người dùng hiểu hành động cần làm',
      'Ít công nhập liệu hơn thường giảm sự kháng cự',
      'Vấn đề lớn nhất có thể nằm ở độ rõ thông điệp thương hiệu',
      'Các trường bắt buộc tạo áp lực cam kết cao hơn',
      'Chỉ cần chỉnh phần chữ là thường đủ để sửa tỉ lệ chuyển đổi',
      'Nên thử giả thuyết gần nguyên nhân gốc nhất trước',
      'Bước này đang yêu cầu quá nhiều trước khi người dùng thấy giá trị'
    ],
    maxReasonSelections: 3,
    rationalePrompt: 'Vì sao đây là phép thử đầu tiên tốt hơn?'
  },
  {
    id: 'T3',
    type: 'tradeoff',
    title: 'Trong chu kỳ này bạn nên đổi gì?',
    context:
      'Bảng điều khiển trông bóng bẩy, nhưng người dùng liên tục nói: "Tôi không biết cái gì là quan trọng." Nhóm chỉ đủ thời gian cho một hướng trong chu kỳ này: sửa hệ phân cấp thị giác trong cấu trúc hiện tại, hoặc cấu trúc lại kiến trúc thông tin sâu hơn.',
    prompt: 'Bạn sẽ chọn hướng nào?',
    primaryOptions: ['Sửa hệ phân cấp thị giác trước', 'Cấu trúc lại kiến trúc thông tin trước'],
    reasonLabel: 'Lý do đánh đổi (trade-off) (chọn tối đa 3)',
    reasonOptions: [
      'Người dùng đã tìm thấy đúng nội dung, nhưng chưa thấy đúng mức ưu tiên',
      'Chính cấu trúc đang gây rối',
      'Cách nhấn thị giác đang làm phẳng khác biệt quan trọng',
      'Cách nhóm và đặt nhãn chưa khớp với quyết định của người dùng',
      'Một thay đổi nhỏ vẫn tốt hơn, dù chưa xử lý được gốc rễ',
      'Cấu trúc hiện tại có thể vẫn dùng được nếu xếp hạng rõ hơn',
      'Cấu trúc hiện tại đang bám theo hệ thống hơn là theo người dùng'
    ],
    maxReasonSelections: 3,
    rationalePrompt: 'Vấn đề thật sự ở đây là gì?'
  },
  {
    id: 'T4',
    type: 'tradeoff',
    title: 'Khi bị áp lực thời gian, bạn chọn gì?',
    context:
      'Một nhóm cần ra mắt v1 chạy được trong 10 ngày. Họ có thể phát hành bản hẹp hơn nhưng hơi lộn xộn để giải quyết vấn đề chính ngay, hoặc hoãn ra mắt để làm cấu trúc sạch và linh hoạt hơn.',
    prompt: 'Bạn sẽ chọn hướng nào?',
    primaryOptions: ['Phát hành bản hẹp hơn, hơi lộn xộn ngay bây giờ', 'Hoãn lại để làm cấu trúc sạch hơn trước'],
    reasonLabel: 'Lý do đánh đổi (chọn tối đa 3)',
    reasonOptions: [
      'Tốc độ quan trọng khi vấn đề người dùng đang gấp',
      'Nên hoãn nếu bản vội có thể làm giảm niềm tin của người dùng',
      'Một chút lộn xộn có thể chấp nhận nếu có giới hạn và đảo ngược được',
      'Cấu trúc sạch quan trọng hơn giá trị sớm cho người dùng',
      'Nên hoãn ra mắt nếu logic sản phẩm có thể vỡ rõ ràng',
      'Học từ hành vi sử dụng thật sớm hơn thường tốt hơn',
      'Độ gọn nội bộ thường nên thắng áp lực triển khai',
      'Khả năng đảo ngược quan trọng hơn sự tinh khiết'
    ],
    maxReasonSelections: 3,
    rationalePrompt: 'Vì sao đây là đánh đổi tốt hơn?'
  },
  {
    id: 'T5',
    type: 'critique',
    title: 'Bảng điều khiển này sai nhất ở đâu?',
    context: 'Bạn đang đánh giá một bảng điều khiển trông hiện đại và gọn gàng ở cái nhìn đầu tiên.',
    prompt: 'Hãy chọn các vấn đề lớn nhất trên màn này.',
    assetIntent: 'Giao diện trông mượt, nhưng độ rõ ưu tiên hành động và bước tiếp theo còn yếu.',
    assetSrc: '/assets/critique/t5-dashboard-critique.svg',
    assetAlt:
      'Màn dashboard SaaS trông bóng bẩy với nhiều khối ngang trọng số và hành động chính mờ nhạt',
    issueLabel: 'Danh sách vấn đề (chọn tối đa 4)',
    issueOptions: [
      'Mức ưu tiên chính không rõ',
      'Hành động chính quá yếu',
      'Quá nhiều vùng có trọng số thị giác ngang nhau',
      'Thông tin cho bước tiếp theo đang bị chôn',
      'Đổ bóng của thẻ hơi nhẹ',
      'Khoảng cách có vài chỗ chưa đều',
      'Màn hình sạch nhưng không dẫn người dùng tới hành động',
      'Bảng màu nên ấm hơn',
      'Cấu trúc bắt người dùng tự diễn giải quá nhiều'
    ],
    maxIssueSelections: 4,
    severityPrompt: 'Vấn đề nào nghiêm trọng nhất?',
    severityOptions: [
      'Mức ưu tiên chính không rõ',
      'Hành động chính quá yếu',
      'Quá nhiều vùng có trọng số thị giác ngang nhau',
      'Thông tin cho bước tiếp theo đang bị chôn',
      'Cấu trúc bắt người dùng tự diễn giải quá nhiều'
    ],
    rationalePrompt: 'Vì sao đó là vấn đề nghiêm trọng nhất?'
  },
  {
    id: 'T6',
    type: 'critique',
    title: 'Luồng hướng dẫn ban đầu này vỡ ở đâu?',
    context: 'Bạn đang đánh giá một luồng hướng dẫn ban đầu trông sạch và thân thiện ở cái nhìn đầu tiên.',
    prompt: 'Hãy chọn các vấn đề lớn nhất trong luồng này.',
    assetIntent: 'Luồng thuận lợi trông mượt, nhưng tính liên tục, trạng thái và khả năng quay lại còn yếu.',
    assetSrc: '/assets/critique/t6-onboarding-critique.svg',
    assetAlt:
      'Màn onboarding gọn đẹp nhưng thiếu trạng thái sau hoàn tất và đường quay lại khi người dùng bị gián đoạn',
    issueLabel: 'Danh sách vấn đề (chọn tối đa 4)',
    issueOptions: [
      'Không rõ chuyện gì xảy ra sau khi hoàn tất',
      'Luồng thiếu đường quay lại khi người dùng bị gián đoạn',
      'Thiếu các trạng thái quan trọng',
      'Cách xử lý lỗi còn mơ hồ',
      'Phong cách minh họa quá đại trà',
      'Kiểu chữ quá trung tính',
      'Luồng này chỉ chạy ổn ở luồng thuận lợi',
      'Giao diện mượt nhưng tính liên tục của trải nghiệm còn yếu',
      'Nhãn nút có thể sinh động hơn'
    ],
    maxIssueSelections: 4,
    severityPrompt: 'Vấn đề nào nghiêm trọng nhất?',
    severityOptions: [
      'Không rõ chuyện gì xảy ra sau khi hoàn tất',
      'Luồng thiếu đường quay lại khi người dùng bị gián đoạn',
      'Thiếu các trạng thái quan trọng',
      'Cách xử lý lỗi còn mơ hồ',
      'Luồng này chỉ chạy ổn ở luồng thuận lợi',
      'Giao diện mượt nhưng tính liên tục của trải nghiệm còn yếu'
    ],
    rationalePrompt: 'Vì sao đó là vấn đề nghiêm trọng nhất?'
  },
  {
    id: 'T7',
    type: 'rewrite',
    title: 'Viết lại đề bài này thành bản có thể triển khai',
    context:
      'Hãy biến một yêu cầu mơ hồ thành điểm bắt đầu rõ hơn cho quyết định sản phẩm và trải nghiệm người dùng (UX).',
    prompt: 'Viết lại đề bài này thành một điểm xuất phát rõ ràng hơn.',
    weakBrief:
      'Chúng tôi muốn một bảng điều khiển AI cho các nhóm hiện đại để họ làm việc nhanh hơn và thông minh hơn.',
    fields: [
      {
        id: 'problemStatement',
        label: 'Vấn đề cốt lõi',
        helper: 'Vấn đề cụ thể nào thực sự đáng để giải quyết?'
      },
      {
        id: 'successCriteria',
        label: 'Tiêu chí thành công',
        helper: 'Dựa vào đâu để biết giải pháp này đang hiệu quả?'
      },
      {
        id: 'primaryUser',
        label: 'Người dùng chính',
        helper: 'Ai là đối tượng cần phục vụ đầu tiên?'
      },
      {
        id: 'constraints',
        label: 'Ràng buộc',
        helper: 'Những giới hạn nào cần định hình phiên bản đầu tiên?'
      },
      {
        id: 'proposedFlow',
        label: 'Luồng đề xuất',
        helper: 'Luồng nhỏ nhất nhưng vẫn đáng tin để chạy được là gì?'
      }
    ]
  },
  {
    id: 'T8',
    type: 'ai-collaboration',
    title: 'Bạn sẽ xử lý đầu ra AI này thế nào?',
    context:
      'Đọc yêu cầu gốc và bản tóm tắt đầu ra, sau đó tách rõ phần có thể tận dụng với phần giả định rủi ro.',
    prompt: 'Hãy quyết định phần nào nên giữ, bỏ, tinh chỉnh, cần nghiên cứu thêm và chưa thể tin ngay.',
    originalPrompt:
      'Hãy tạo một bảng điều khiển làm việc hiện đại có AI cho năng suất nhóm. Bao gồm gợi ý thông minh, công cụ cộng tác, thẻ hành động, khối phân tích số liệu và đề xuất cá nhân hóa cho từng người dùng.',
    aiOutputSummary: [
      'Bảng điều khiển trông bóng bẩy với các thẻ gợi ý thông minh',
      'Có các khối phân tích số liệu và khu vực phân tích bằng AI',
      'Nhiều tính năng bề mặt nghe có vẻ hữu ích',
      'Giả định về nhu cầu người dùng còn mơ hồ',
      'Ưu tiên còn yếu và tính liên tục của luồng công việc chưa rõ',
      'Chưa có bằng chứng rõ bảng điều khiển giúp một người dùng cụ thể làm một việc cụ thể tốt hơn'
    ],
    buckets: [
      {
        id: 'keep',
        label: 'Giữ lại',
        helper: 'Phần nào đủ hữu ích để giữ làm điểm bắt đầu?'
      },
      {
        id: 'remove',
        label: 'Loại bỏ',
        helper: 'Phần nào đang tạo nhiễu hoặc làm mọi thứ có vẻ quá hào nhoáng?'
      },
      {
        id: 'refine',
        label: 'Cần tinh chỉnh',
        helper: 'Phần nào có tiềm năng nhưng cần nghĩ lại cho rõ hơn?'
      },
      {
        id: 'researchMore',
        label: 'Cần nghiên cứu thêm',
        helper: 'Phần nào cần xác thực với người dùng hoặc sản phẩm trước khi làm tiếp?'
      },
      {
        id: 'doNotTrustYet',
        label: 'Chưa thể tin ngay',
        helper: 'Phần nào không nên chấp nhận ngay ở thời điểm này?'
      }
    ],
    finalJudgmentPrompt: 'Đánh giá tổng thể của bạn về đầu ra này là gì?'
  }
]

const TASKS_EN: AssessmentTask[] = [
  {
    id: 'T1',
    type: 'scenario',
    title: 'What should ship first?',
    context:
      'A teacher app is adding a parent portal for the first time. The team can only ship one surface in v1: Home (weekly lesson summary, next lesson, practice goal) or Pieces (full piece list with statuses and progress).',
    prompt: 'Which surface should ship first?',
    primaryOptions: ['Home', 'Pieces'],
    reasonLabel: 'Supporting reasons (select up to 3)',
    reasonOptions: [
      'It solves the highest-frequency user need first',
      'It gives parents immediate clarity after each lesson',
      'It helps parents act this week, not just browse information',
      'It is more complete',
      'It has more content',
      'It feels more impressive',
      'It can support the core weekly loop sooner',
      'It is easier to visualize progress'
    ],
    maxReasonSelections: 3,
    rationalePrompt: 'Why did you choose this direction?'
  },
  {
    id: 'T2',
    type: 'scenario',
    title: 'What would you test first?',
    context:
      'A checkout flow is losing many users at the information step. The team has two likely directions for the next experiment: improve CTA and supporting copy, or reduce the number of required form fields.',
    prompt: 'Which direction would you test first?',
    primaryOptions: ['Improve CTA and supporting copy', 'Reduce required form fields'],
    reasonLabel: 'Supporting reasons (select up to 3)',
    reasonOptions: [
      'Structural friction is more likely blocking completion',
      'Clearer wording may help users understand the action',
      'Lower effort usually reduces resistance',
      'The biggest issue is likely brand clarity',
      'Required fields create stronger commitment pressure',
      'Copy polish is usually enough to fix conversion',
      'The team should test the most likely root cause first',
      'This step asks for too much before value is clear'
    ],
    maxReasonSelections: 3,
    rationalePrompt: 'What makes this the better first test?'
  },
  {
    id: 'T3',
    type: 'tradeoff',
    title: 'What should change this sprint?',
    context:
      'A dashboard looks polished, but users keep saying: "I do not know what matters here." The team has time for only one next move this sprint: fix visual hierarchy in the current structure, or restructure the information architecture more deeply.',
    prompt: 'Which direction would you choose?',
    primaryOptions: ['Fix visual hierarchy first', 'Restructure information architecture first'],
    reasonLabel: 'Trade-off logic (select up to 3)',
    reasonOptions: [
      'Users can find the right content, but not the right priority',
      'The structure itself is causing confusion',
      'Visual emphasis is flattening important differences',
      'Grouping and labeling are mismatched with user decisions',
      'A smaller change is better, even if it does not solve the root issue',
      'The current structure is probably workable with clearer ranking',
      'The current structure is organized around the system, not the user'
    ],
    maxReasonSelections: 3,
    rationalePrompt: 'What is the real problem here?'
  },
  {
    id: 'T4',
    type: 'tradeoff',
    title: 'What would you choose under time pressure?',
    context:
      'A team needs to launch a working v1 in 10 days. They can either ship a narrower but slightly messy version now, or delay launch to make the structure cleaner and more flexible.',
    prompt: 'Which direction would you choose?',
    primaryOptions: [
      'Ship the narrower but slightly messy version now',
      'Delay and make the structure cleaner first'
    ],
    reasonLabel: 'Trade-off logic (select up to 3)',
    reasonOptions: [
      'Speed matters when the user problem is urgent',
      'Delay is worth it if a rushed version could damage user trust',
      'Some mess is acceptable if it is bounded and reversible',
      'Clean structure matters more than early user value',
      'A launch should wait if product logic will obviously break',
      'It is better to learn from real usage sooner',
      'Internal neatness should usually win over rollout pressure',
      'Reversibility matters more than purity'
    ],
    maxReasonSelections: 3,
    rationalePrompt: 'Why is this the better trade-off?'
  },
  {
    id: 'T5',
    type: 'critique',
    title: 'What is most wrong with this dashboard?',
    context:
      'You are reviewing a dashboard that looks modern and clean at first glance.',
    prompt: 'Pick the biggest issues in this screen.',
    assetIntent: 'The UI looks polished, but action priority and next-step clarity are weak.',
    assetSrc: '/assets/critique/t5-dashboard-critique.svg',
    assetAlt:
      'A polished SaaS dashboard with many equal-weight sections and a weak primary action',
    issueLabel: 'Issue list (select up to 4)',
    issueOptions: [
      'The main priority is unclear',
      'The primary action is too weak',
      'Too many sections have equal visual weight',
      'Important next-step information is buried',
      'Card shadows are slightly too subtle',
      'Spacing is slightly inconsistent in places',
      'The screen looks clean but does not guide action',
      'The color palette should be warmer',
      'The structure asks users to interpret too much on their own'
    ],
    maxIssueSelections: 4,
    severityPrompt: 'Which issue matters most?',
    severityOptions: [
      'The main priority is unclear',
      'The primary action is too weak',
      'Too many sections have equal visual weight',
      'Important next-step information is buried',
      'The structure asks users to interpret too much on their own'
    ],
    rationalePrompt: 'Why is that the biggest issue?'
  },
  {
    id: 'T6',
    type: 'critique',
    title: 'Where does this onboarding flow break?',
    context:
      'You are reviewing an onboarding flow that looks clean and friendly at first glance.',
    prompt: 'Pick the biggest issues in this flow.',
    assetIntent: 'The happy path looks smooth, but continuity, state handling, and recovery are weak.',
    assetSrc: '/assets/critique/t6-onboarding-critique.svg',
    assetAlt:
      'A smooth onboarding screen with unclear completion state, weak recovery path, and missing edge states',
    issueLabel: 'Issue list (select up to 4)',
    issueOptions: [
      'It is unclear what happens after completion',
      'The flow lacks recovery paths when users are interrupted',
      'Important states are missing',
      'Error handling is under-defined',
      'The illustration style feels too generic',
      'Typography feels too neutral',
      'The flow only works well on the happy path',
      'The UI looks smooth, but continuity is weak',
      'Button labels could be more playful'
    ],
    maxIssueSelections: 4,
    severityPrompt: 'Which issue matters most?',
    severityOptions: [
      'It is unclear what happens after completion',
      'The flow lacks recovery paths when users are interrupted',
      'Important states are missing',
      'Error handling is under-defined',
      'The flow only works well on the happy path',
      'The UI looks smooth, but continuity is weak'
    ],
    rationalePrompt: 'Why is that the biggest issue?'
  },
  {
    id: 'T7',
    type: 'rewrite',
    title: 'Rewrite this brief into something workable',
    context:
      'Turn an ambiguous request into a clearer starting point for product and UX decisions.',
    prompt: 'Rewrite this into a clearer product starting point.',
    weakBrief:
      'We want an AI dashboard for modern teams so they can move faster and work smarter.',
    fields: [
      {
        id: 'problemStatement',
        label: 'Problem statement',
        helper: 'What specific problem is actually worth solving?'
      },
      {
        id: 'successCriteria',
        label: 'Success criteria',
        helper: 'How would you know this is working?'
      },
      {
        id: 'primaryUser',
        label: 'Primary user',
        helper: 'Who is this really for first?'
      },
      {
        id: 'constraints',
        label: 'Constraints',
        helper: 'What should limit or shape the first version?'
      },
      {
        id: 'proposedFlow',
        label: 'Proposed flow',
        helper: 'What is the smallest believable user flow?'
      }
    ]
  },
  {
    id: 'T8',
    type: 'ai-collaboration',
    title: 'What would you do with this AI output?',
    context:
      'Read the original prompt and output summary, then separate useful scaffolding from risky assumptions.',
    prompt:
      'Decide what to keep, remove, refine, research further, and what should not be trusted yet.',
    originalPrompt:
      'Create a modern AI-powered workspace dashboard for team productivity. Include smart insights, collaboration tools, action cards, analytics blocks, and personalized recommendations for each user.',
    aiOutputSummary: [
      'A polished-looking dashboard with smart recommendation cards',
      'Analytics blocks and an AI insight area',
      'Several surface-level features that sound useful',
      'Vague assumptions about user needs',
      'Weak prioritization and unclear workflow continuity',
      'No clear proof the dashboard helps a specific user do a specific job better'
    ],
    buckets: [
      {
        id: 'keep',
        label: 'Keep',
        helper: 'What is useful enough to keep as a starting point?'
      },
      {
        id: 'remove',
        label: 'Remove',
        helper: 'What is adding noise or false sophistication?'
      },
      {
        id: 'refine',
        label: 'Refine',
        helper: 'What has potential but needs clearer thinking?'
      },
      {
        id: 'researchMore',
        label: 'Research more',
        helper: 'What needs user or product validation before moving forward?'
      },
      {
        id: 'doNotTrustYet',
        label: 'Do not trust yet',
        helper: 'What should not be accepted at face value?'
      }
    ],
    finalJudgmentPrompt: 'What is your overall judgment of this output?'
  }
]

export const ASSESSMENT_TASKS_BY_LOCALE: Record<Locale, AssessmentTask[]> = {
  vi: TASKS_VI,
  en: TASKS_EN
}

export const ASSESSMENT_TASK_COUNT = TASKS_VI.length

export const getAssessmentTasks = (locale: Locale): AssessmentTask[] => {
  return ASSESSMENT_TASKS_BY_LOCALE[locale]
}
