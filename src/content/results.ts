import type { Locale } from '../types/locale'
import type {
  AIPressurePattern,
  AssessmentLevel,
  CapabilityKey
} from '../types/session'

export type ResultUiCopy = {
  inProgressTitle: string
  inProgressDescription: string
  backToIntro: string
  continueAssessment: string
  fallbackTitle: string
  fallbackDescription: string
  restart: string
  reviewAnswers: string
  scoreLabel: string
  levelLabel: string
  summaryTitle: string
  strengthsTitle: string
  gapsTitle: string
  capabilityTitle: string
  aiPressureTitle: string
  aiAlreadyLabel: string
  aiHelpsLabel: string
  aiHumanLabel: string
  nextStepsTitle: string
  completedWithMissingData: string
  launchNoteTitle: string
  launchExperimentNote: string
  launchOpenSourceNote: string
}

export const RESULT_UI_COPY: Record<Locale, ResultUiCopy> = {
  vi: {
    inProgressTitle: 'Bạn vẫn đang làm bài đánh giá',
    inProgressDescription: 'Hãy hoàn tất toàn bộ bài trước, sau đó xem kết quả.',
    backToIntro: 'Về trang giới thiệu',
    continueAssessment: 'Tiếp tục làm bài',
    fallbackTitle: 'Chưa thể hiển thị kết quả',
    fallbackDescription:
      'Dữ liệu kết quả đang thiếu hoặc chưa hợp lệ. Bạn có thể quay lại bài đánh giá và hoàn tất lại.',
    restart: 'Làm lại bài đánh giá',
    reviewAnswers: 'Quay lại bài đánh giá',
    scoreLabel: 'Điểm tổng',
    levelLabel: 'Cấp độ',
    summaryTitle: 'Tóm tắt',
    strengthsTitle: 'Điểm mạnh',
    gapsTitle: 'Khoảng trống cần cải thiện',
    capabilityTitle: 'Phân rã theo năng lực',
    aiPressureTitle: 'Áp lực từ AI',
    aiAlreadyLabel: 'AI đã xử lý tốt',
    aiHelpsLabel: 'AI hỗ trợ, nhưng vẫn cần phán đoán',
    aiHumanLabel: 'Vẫn thiên về phán đoán của con người',
    nextStepsTitle: 'Nên cải thiện tiếp theo',
    completedWithMissingData:
      'Bạn đã hoàn tất bài nhưng còn thiếu một số câu trả lời, nên độ tin cậy của kết quả đã bị giảm.',
    launchNoteTitle: 'Ghi chú thử nghiệm',
    launchExperimentNote: 'Phiên bản công khai này là bản thử nghiệm tạm thời và có thể được gỡ sau giai đoạn thử nghiệm.',
    launchOpenSourceNote: 'Dự án sẽ được công khai mã nguồn trên GitHub sau giai đoạn thử nghiệm.'
  },
  en: {
    inProgressTitle: 'Assessment in progress',
    inProgressDescription: 'Finish all task screens first, then view your result.',
    backToIntro: 'Back to Intro',
    continueAssessment: 'Continue Assessment',
    fallbackTitle: 'Result is not ready',
    fallbackDescription:
      'Result data is missing or invalid. You can return to the assessment and complete it again.',
    restart: 'Restart Assessment',
    reviewAnswers: 'Back to Assessment',
    scoreLabel: 'Final score',
    levelLabel: 'Level',
    summaryTitle: 'Summary',
    strengthsTitle: 'Strengths',
    gapsTitle: 'Gaps',
    capabilityTitle: 'Capability breakdown',
    aiPressureTitle: 'AI pressure layer',
    aiAlreadyLabel: 'AI already handles well',
    aiHelpsLabel: 'AI helps, but you still need judgment',
    aiHumanLabel: 'Still strongly human-heavy',
    nextStepsTitle: 'What to improve next',
    completedWithMissingData:
      'You completed the assessment with some missing answers, so a completion penalty was applied.',
    launchNoteTitle: 'Experiment note',
    launchExperimentNote:
      'This public version is temporary and may be taken down after the experiment period.',
    launchOpenSourceNote:
      'The project will be published on GitHub as open source after the experiment period.'
  }
}

export const CAPABILITY_LABELS: Record<Locale, Record<CapabilityKey, string>> = {
  vi: {
    problemFraming: 'Problem Framing',
    flowJudgment: 'Flow Judgment',
    systemAwareness: 'System Awareness',
    tradeoffQuality: 'Trade-off Quality',
    aiCollaborationMaturity: 'AI Collaboration Maturity'
  },
  en: {
    problemFraming: 'Problem Framing',
    flowJudgment: 'Flow Judgment',
    systemAwareness: 'System Awareness',
    tradeoffQuality: 'Trade-off Quality',
    aiCollaborationMaturity: 'AI Collaboration Maturity'
  }
}

export const LEVEL_SUMMARIES: Record<Locale, Record<AssessmentLevel, string>> = {
  vi: {
    Executor: 'Bạn vẫn đang xử lý vấn đề chủ yếu ở mức tác vụ và bề mặt.',
    'Reliable Builder':
      'Bạn xử lý khá ổn nhiều quyết định ở mức tính năng, nhưng chưa đều ở các ca mơ hồ hơn.',
    'Flow Thinker':
      'Bạn đọc luồng, ma sát và trạng thái tốt hơn mặt bằng chung ở mức triển khai.',
    'System Designer':
      'Bạn nhìn được tác động rộng hơn một màn hình đơn lẻ và đưa ra đánh đổi có cấu trúc hơn.',
    'Product Judge':
      'Bạn thể hiện phán đoán mạnh ở framing, trade-off và cách cộng tác có chọn lọc với AI.'
  },
  en: {
    Executor: 'You are still operating mostly at the task and surface level.',
    'Reliable Builder':
      'You can make many feature-level decisions reasonably well, but your reasoning is still uneven in ambiguity.',
    'Flow Thinker':
      'You understand flow friction and missing states better than many execution-level builders.',
    'System Designer':
      'You can reason beyond single screens and make stronger structure-level trade-offs.',
    'Product Judge':
      'You show strong judgment across framing, trade-offs, and selective AI collaboration.'
  }
}

export const STRENGTH_POOL: Record<Locale, Record<string, string>> = {
  vi: {
    strength_flow_meaningful: 'Bạn nhận ra vấn đề luồng quan trọng nhanh hơn các lỗi thẩm mỹ nhỏ.',
    strength_structural_vs_surface: 'Bạn phân biệt được ma sát cấu trúc với phần bóng bẩy bề mặt.',
    strength_commitment: 'Bạn dám chốt hướng đi thay vì né quyết định bằng câu trả lời mơ hồ.',
    strength_state_recovery: 'Bạn phát hiện tốt các lỗ hổng trạng thái và đường quay lại.',
    strength_rewrite: 'Bạn có thể biến đề bài mơ hồ thành điểm bắt đầu rõ hơn để triển khai.',
    strength_ai_selective: 'Bạn không tin mù quáng vào đầu ra AI đã được làm bóng.',
    strength_feature_flow: 'Bạn thể hiện phán đoán tốt ở mức tính năng và luồng sử dụng.',
    strength_user_clarity: 'Bạn ưu tiên độ rõ cho người dùng hơn độ đầy đủ tính năng.',
    strength_action_focus: 'Bạn tập trung vào điều giúp người dùng hành động, không chỉ vào nội dung.',
    strength_cross_surface: 'Bạn cho thấy tín hiệu tư duy tốt hơn ở mức liên bề mặt.'
  },
  en: {
    strength_flow_meaningful: 'You identify meaningful flow issues faster than cosmetic ones.',
    strength_structural_vs_surface: 'You can distinguish structural friction from surface polish.',
    strength_commitment: 'You commit to a direction instead of hiding behind vague trade-offs.',
    strength_state_recovery: 'You notice state and recovery problems that weaker reviewers often miss.',
    strength_rewrite: 'You can turn a vague brief into a more usable starting point.',
    strength_ai_selective: 'You do not blindly trust polished AI output.',
    strength_feature_flow: 'You show useful judgment at the feature and flow level.',
    strength_user_clarity: 'You can see when user clarity matters more than feature completeness.',
    strength_action_focus: 'You usually focus on what helps the user act, not just what looks complete.',
    strength_cross_surface: 'You show signs of stronger cross-surface thinking.'
  }
}

export const GAP_POOL: Record<Locale, Record<string, string>> = {
  vi: {
    gap_too_local: 'Câu trả lời của bạn còn cục bộ khi vấn đề thực tế cần góc nhìn hệ thống hơn.',
    gap_polish_reaction: 'Bạn vẫn bị bề mặt bóng bẩy dẫn hướng quá dễ.',
    gap_miss_main_issue: 'Bạn có thấy lỗi, nhưng chưa ổn định ở việc bắt đúng lỗi quan trọng nhất.',
    gap_tradeoff_ambiguity:
      'Chất lượng đánh đổi của bạn giảm khi cả hai phương án đều có vẻ hợp lý.',
    gap_avoid_commitment: 'Bạn còn né quyết định trong các tình huống mơ hồ.',
    gap_rewrite_vague: 'Bạn viết lại gọn hơn, nhưng chưa luôn làm rõ vấn đề sản phẩm cốt lõi.',
    gap_system_thin: 'Lập luận về tác động hệ thống của bạn còn mỏng.',
    gap_ai_extremes: 'Bạn có xu hướng tin AI quá nhanh hoặc bác bỏ quá rộng.',
    gap_value_vs_volume: 'Bạn chưa luôn tách được giá trị người dùng khỏi số lượng tính năng.',
    gap_visual_vs_product: 'Bạn đôi lúc nhầm độ rõ thị giác với độ rõ sản phẩm.'
  },
  en: {
    gap_too_local: 'Your answers stay too local when the real issue is more structural.',
    gap_polish_reaction: 'You still react to polished output too easily.',
    gap_miss_main_issue: 'You notice issues, but not always the ones that matter most.',
    gap_tradeoff_ambiguity:
      'Your trade-off choices become weaker when both options look reasonable.',
    gap_avoid_commitment: 'You still avoid commitment too often in ambiguous situations.',
    gap_rewrite_vague:
      'You rewrite wording, but do not always clarify the actual product problem.',
    gap_system_thin: 'Your reasoning about system effects is still thin.',
    gap_ai_extremes: 'You either trust AI output too quickly or reject it too broadly.',
    gap_value_vs_volume: 'You do not always separate user value from feature volume.',
    gap_visual_vs_product: 'You still confuse visual clarity with product clarity in some cases.'
  }
}

export const NEXT_STEP_SUGGESTIONS: Record<Locale, Record<CapabilityKey, string[]>> = {
  vi: {
    problemFraming: [
      'Luyện viết lại brief mơ hồ thành một vấn đề sản phẩm cụ thể.',
      'Trước khi ideate, buộc mình chốt rõ người dùng, kết quả mong muốn và ràng buộc.',
      'Rà soát nhiều case để tách triệu chứng khỏi nguyên nhân gốc.'
    ],
    flowJudgment: [
      'Luyện critique theo luồng và trạng thái, không chỉ theo màn hình.',
      'Tập bắt các điểm gãy về continuity, recovery path và missing states.',
      'Xem lại các luồng onboarding/checkout/completion bằng lăng kính trạng thái.'
    ],
    systemAwareness: [
      'Luyện truy vết tác động liên bề mặt khi một quyết định cục bộ thay đổi.',
      'Đào sâu thông tin cấu trúc, tính nhất quán và hậu quả downstream.',
      'Khi review sản phẩm, luôn hỏi: một thay đổi nhỏ sẽ làm phần nào khác gãy?'
    ],
    tradeoffQuality: [
      'Tập chọn giữa các phương án chưa hoàn hảo thay vì né bằng lý thuyết.',
      'Luôn ghi rõ downside của phương án bạn chọn.',
      'Đặt trọng tâm vào reversibility, user value và áp lực scope.'
    ],
    aiCollaborationMaturity: [
      'Luyện giữ phần scaffolding hữu ích và loại các giả định nông từ output AI.',
      'Đánh giá output AI theo hướng xác thực, không chạy theo hype.',
      'Rạch ròi hơn: phần nào cần research trước khi được tin.'
    ]
  },
  en: {
    problemFraming: [
      'Practice rewriting vague briefs into concrete product problems.',
      'Force yourself to name user, outcome, and constraints before ideating.',
      'Study how strong product thinkers separate symptoms from root causes.'
    ],
    flowJudgment: [
      'Practice critiquing flows and states, not just static screens.',
      'Get better at spotting continuity gaps, recovery paths, and missing states.',
      'Review onboarding, checkout, and completion flows with a state lens.'
    ],
    systemAwareness: [
      'Practice tracing cross-surface impact from local product decisions.',
      'Study consistency, information structure, and downstream effects.',
      'Review products by asking what else breaks when one part changes.'
    ],
    tradeoffQuality: [
      'Train yourself to choose between imperfect options without hiding behind theory.',
      'Write the downside of your preferred option every time.',
      'Get stricter about reversibility, user value, and scope pressure.'
    ],
    aiCollaborationMaturity: [
      'Practice keeping useful scaffolding while rejecting shallow assumptions.',
      'Review AI output with a validation mindset, not a hype mindset.',
      'Be stricter about what needs research before it deserves confidence.'
    ]
  }
}

type AIPressureText = {
  alreadyHandledWell: string[]
  helpsButNeedsJudgment: string[]
  stillHumanHeavy: string[]
}

export const AI_PRESSURE_TEMPLATES: Record<
  Locale,
  Record<AIPressurePattern, AIPressureText>
> = {
  vi: {
    lower: {
      alreadyHandledWell: [
        'Bản nháp layout đầu tiên',
        'Nhiều biến thể màn hình nhanh',
        'Ý tưởng giao diện trông bóng bẩy',
        'Mockup ban đầu'
      ],
      helpsButNeedsJudgment: [
        'Dọn dẹp luồng ở mức cơ bản',
        'Critique bề mặt',
        'Ưu tiên bước đầu'
      ],
      stillHumanHeavy: [
        'Quyết định vấn đề nào cần giải trước',
        'Chọn giữa các hướng chưa hoàn hảo',
        'Xác thực cấu trúc có khớp nhu cầu người dùng hay không'
      ]
    },
    mid: {
      alreadyHandledWell: [
        'Tạo nháp giao diện',
        'Khám phá phương án thị giác',
        'Dựng nhanh nhiều hướng ở mức thành phần'
      ],
      helpsButNeedsJudgment: [
        'Critique luồng',
        'Tinh gọn cấu trúc thông tin',
        'Ưu tiên trong mức mơ hồ vừa phải'
      ],
      stillHumanHeavy: [
        'Reframe một bài toán sản phẩm còn mơ hồ',
        'Quyết định điều gì không nên xây',
        'Cân bằng ràng buộc giữa user, business và implementation'
      ]
    },
    higher: {
      alreadyHandledWell: [
        'Bản nháp thiên về production',
        'Khám phá nhanh bố cục và thị giác',
        'Scaffold ban đầu cho màn hình và luồng'
      ],
      helpsButNeedsJudgment: [
        'Tinh chỉnh cấu trúc',
        'Khám phá phương án thay thế',
        'Tăng tốc vòng lặp critique và iteration'
      ],
      stillHumanHeavy: [
        'Problem framing',
        'Đánh đổi ở mức hệ thống',
        'Chấp nhận hay loại đề xuất AI một cách có chọn lọc',
        'Định hướng sản phẩm chất lượng cao trong bối cảnh mơ hồ'
      ]
    }
  },
  en: {
    lower: {
      alreadyHandledWell: [
        'First-draft layouts',
        'Fast screen variations',
        'Polished-looking UI concepts',
        'Early mockup generation'
      ],
      helpsButNeedsJudgment: [
        'Basic flow cleanup',
        'Surface critique',
        'First-pass prioritization'
      ],
      stillHumanHeavy: [
        'Deciding what the product should solve first',
        'Choosing between imperfect directions',
        'Validating whether structure matches user need'
      ]
    },
    mid: {
      alreadyHandledWell: [
        'Draft UI generation',
        'Visual exploration',
        'Many early component-level directions'
      ],
      helpsButNeedsJudgment: [
        'Flow critique',
        'Information shaping',
        'Prioritization under moderate ambiguity'
      ],
      stillHumanHeavy: [
        'Reframing a vague product ask',
        'Deciding what not to build',
        'Balancing constraints across user, business, and implementation realities'
      ]
    },
    higher: {
      alreadyHandledWell: [
        'Production-oriented first drafts',
        'Visual and layout exploration',
        'Initial scaffolding for screens and flows'
      ],
      helpsButNeedsJudgment: [
        'Refining structure',
        'Exploring alternatives',
        'Accelerating critique and iteration'
      ],
      stillHumanHeavy: [
        'Problem framing',
        'System-level trade-offs',
        'Selective acceptance vs rejection of AI suggestions',
        'High-quality product direction under ambiguity'
      ]
    }
  }
}
