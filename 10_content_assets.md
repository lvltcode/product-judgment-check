# AI-Era Product Judgment Check — Content Assets
> Source of truth for v1 content payloads. Lock this before implementation. Use this file to populate task content, answer options, critique cases, AI-collaboration case, and result-copy templates.

---

## Purpose

This file contains the actual content assets for v1.

It defines:
- task prompts
- answer option sets
- rationale options
- critique case notes
- AI collaboration case
- result-copy templates
- AI pressure copy templates
- next-step suggestion templates

This file should stay practical and implementation-friendly.

---

## Content Rules

All content must be:
- compact
- realistic
- plain-language
- role-agnostic
- not jargon-heavy
- not theory-first
- not visually ornamental

Do not write content that sounds like:
- marketing fluff
- design-twitter performance
- motivational coaching
- academic exam wording

---

## Task Assets

---

## T1 — Parent Portal Priority

### Task Type
Scenario-Based Assessment

### Title
What should ship first?

### Context
A teacher app is adding a parent portal for the first time.

The team can only ship one surface in v1:

- **Home**: weekly lesson summary, next lesson, practice goal
- **Pieces**: full piece list with statuses and progress

### Prompt
Which surface should ship first?

### Primary Options
- Home
- Pieces

### Supporting Reason Options
Select up to 3:
- It solves the highest-frequency user need first
- It gives users immediate clarity after each lesson
- It helps users act this week, not just browse information
- It is more complete
- It contains more content
- It feels more impressive
- It can support the core weekly loop sooner
- It is easier to visualize progress

### Short Rationale Prompt
Why did you choose this?

### Notes for Implementation
- `maxReasonSelections = 3`
- rationale field should be short, not essay-like

---

## T2 — Checkout Drop Fix

### Task Type
Scenario-Based Assessment

### Title
What would you test first?

### Context
A checkout flow is losing many users at the information step.

The team has two likely directions for the next experiment:

- improve CTA and supporting copy
- reduce the number of required form fields

### Prompt
Which direction would you test first?

### Primary Options
- Improve CTA and supporting copy
- Reduce required form fields

### Supporting Reason Options
Select up to 3:
- Structural friction is more likely blocking completion
- Better wording may help users understand the action
- Less effort usually reduces user resistance
- The biggest issue is probably branding clarity
- Required fields create more commitment pressure
- Copy polish is usually enough to fix conversion
- The team should test the likely root cause first
- This step asks for too much before value is clear

### Short Rationale Prompt
What makes this the better first test?

---

## T3 — Dashboard Clarity vs Rebuild

### Task Type
Forced Trade-off

### Title
What would you change this sprint?

### Context
A dashboard looks polished, but users keep saying:

> “I don’t know what matters here.”

The team has time for only one next move this sprint:

- fix visual hierarchy inside the current structure
- restructure the information architecture more deeply

### Prompt
Which direction would you choose?

### Primary Options
- Fix visual hierarchy first
- Restructure information architecture first

### Trade-off Logic Options
Select up to 3:
- Users can already find the right content, but not the right priority
- The structure itself is causing confusion
- Visual emphasis is flattening important differences
- Grouping and labeling are mismatched to user decisions
- A smaller change is better, even if it does not solve the root issue
- The current structure is probably workable with clearer ranking
- The current structure is organizing around the system, not the user

### Short Rationale Prompt
What is the real problem here?

---

## T4 — MVP Speed vs Structural Cleanliness

### Task Type
Forced Trade-off

### Title
What would you choose under time pressure?

### Context
A team needs to launch a working v1 in 10 days.

They have two implementation directions:

- ship a narrower but slightly messy version that solves the main user problem now
- delay launch to make the structure cleaner and more flexible

### Prompt
Which direction would you choose?

### Primary Options
- Ship the narrower but slightly messy version now
- Delay and make the structure cleaner first

### Trade-off Logic Options
Select up to 3:
- Speed matters when the user problem is urgent
- Delay is worth it if the rushed version would damage trust
- Some mess is acceptable if it is bounded and reversible
- Clean structure matters more than early user value
- A launch should wait if the product logic will break in obvious ways
- It is better to learn from real usage sooner
- Internal neatness should usually win over rollout pressure
- Reversibility matters more than purity

### Short Rationale Prompt
Why is this the better trade-off?

---

## T5 — Critique Case 1

### Task Type
Critique Task

### Title
What is most wrong with this dashboard?

### Asset Type
Static image or mock screen

### Asset Intent
A polished AI-generated dashboard for a SaaS workspace.

### Required Surface Characteristics
At first glance, it should look:
- modern
- clean
- organized
- high-fidelity

### Hidden UX Problems
The case should include these deeper issues:
- no clear primary action
- too many equal-weight cards
- top section does not tell the user what matters now
- key priority is visually buried
- user must scan too much before acting

### Prompt
Pick the biggest issues in this screen.

### Issue Option Set
Select up to 4:
- The main priority is unclear
- The primary action is too weak
- Too many sections have equal visual weight
- Important next-step information is buried
- The card shadows are too subtle
- The spacing feels slightly inconsistent
- The screen looks clean but does not guide action well
- The color palette should be warmer
- The structure asks the user to interpret too much on their own

### Severity Ranking Prompt
Which issue matters most?

### Severity Ranking Options
- The main priority is unclear
- The primary action is too weak
- Too many sections have equal visual weight
- Important next-step information is buried
- The structure asks the user to interpret too much on their own

### Short Rationale Prompt
Why is that the biggest issue?

### Asset Notes
The image should not look obviously bad.
It should tempt weaker users into commenting on surface polish only.

---

## T6 — Critique Case 2

### Task Type
Critique Task

### Title
Where does this onboarding flow break?

### Asset Type
Static image sequence or one compact mock flow screen

### Asset Intent
A smooth-looking onboarding flow for a productivity app.

### Required Surface Characteristics
At first glance, it should look:
- elegant
- minimal
- well-designed
- friendly

### Hidden UX Problems
The case should include:
- no clear recovery if the user leaves halfway
- no visible post-completion state
- weak or missing empty states
- missing error handling
- state transitions are unclear
- happy path is shown, but real continuity is weak

### Prompt
Pick the biggest issues in this flow.

### Issue Option Set
Select up to 4:
- It is unclear what happens after completion
- The flow has weak recovery paths
- Important states are missing
- Error handling appears under-defined
- The illustration style is too generic
- The typography is too neutral
- The flow only works well on the happy path
- The UI looks smooth, but continuity is weak
- The button labels could be more playful

### Severity Ranking Prompt
Which issue matters most?

### Severity Ranking Options
- It is unclear what happens after completion
- The flow has weak recovery paths
- Important states are missing
- Error handling appears under-defined
- The flow only works well on the happy path
- The UI looks smooth, but continuity is weak

### Short Rationale Prompt
Why is that the biggest issue?

---

## T7 — Rewrite Task

### Task Type
Rewrite Task

### Title
Rewrite this brief into something workable

### Weak Brief
> We want an AI dashboard for modern teams so they can move faster and work smarter.

### Prompt
Rewrite this into a clearer product starting point.

### Structured Fields
- Problem statement
- Success criteria
- Primary user
- Constraints
- Proposed flow

### Field Guidance

#### Problem statement
What specific problem is actually worth solving?

#### Success criteria
How would you know this is working?

#### Primary user
Who is this really for first?

#### Constraints
What should limit or shape the first version?

#### Proposed flow
What is the smallest believable user flow?

### Field Input Rules
- short to medium answer
- no essay expectation
- structured form only

### Reviewer Notes
A strong response should reduce vagueness, remove buzzwords, define a real user, and create an actual starting point.

---

## T8 — AI Collaboration Task

### Task Type
AI Collaboration Task

### Title
What would you do with this AI output?

### Original Prompt
> Create a modern AI-powered workspace dashboard for team productivity. Include smart insights, collaboration tools, action cards, analytics, and personalized recommendations for each user.

### AI Output Summary
Use a realistic AI-generated output that includes:
- a polished-looking dashboard
- smart recommendations cards
- analytics blocks
- “AI insights” area
- several surface-level features that sound useful
- vague assumptions about user needs
- weak prioritization
- unclear workflow continuity
- no clear proof that the dashboard helps a specific user do a specific job better

### Prompt
Review the prompt and the AI output. Decide what to keep, what to remove, what to refine, what needs more research, and what you would not trust yet.

### Structured Buckets

#### Keep
What is useful enough to keep as a starting point?

#### Remove
What is adding noise or false sophistication?

#### Refine
What has potential but needs clearer thinking?

#### Research More
What needs user or product validation before moving forward?

#### Do Not Trust Yet
What should not be accepted at face value?

### Final Judgment Prompt
What is your overall judgment of this output?

### Reviewer Notes
A strong answer should not worship the output or dismiss it emotionally.
It should separate useful scaffolding from risky assumptions.

---

## Result Copy Templates

---

## Level Template — Executor

### Summary
You are still thinking mostly at the task and surface level.

### Strength Tone
You can react to obvious issues and follow clear directions.

### Gap Tone
Your answers stay too local, and deeper prioritization or reframing is still weak.

### Next-Step Tone
Your best improvement comes from learning to identify the real problem before jumping into the solution.

---

## Level Template — Reliable Builder

### Summary
You can make many feature-level decisions reasonably well.

### Strength Tone
You avoid some common mistakes and can spot several useful issues.

### Gap Tone
Your reasoning is still uneven when trade-offs become ambiguous or system effects matter.

### Next-Step Tone
You should practice choosing under constraints and thinking beyond a single screen or feature.

---

## Level Template — Flow Thinker

### Summary
You understand flows, friction, and missing states better than many execution-level builders.

### Strength Tone
You can spot meaningful experience problems and improve local product decisions.

### Gap Tone
You are not consistently strong yet at broader system trade-offs or deeper product reframing.

### Next-Step Tone
Your next growth comes from thinking across surfaces, not just within a flow.

---

## Level Template — System Designer

### Summary
You can see broader impact, not just local UX issues.

### Strength Tone
You reason well about cross-feature effects, structure, and stronger trade-offs.

### Gap Tone
You may still have uneven judgment in problem framing or selective AI collaboration at the highest level.

### Next-Step Tone
Your next step is to sharpen decision quality under ambiguity, not just system awareness.

---

## Level Template — Product Judge

### Summary
You show strong judgment across framing, trade-offs, and selective critique.

### Strength Tone
You can usually see the real problem, not just react to polished output or local friction.

### Gap Tone
At this level, the useful improvement is not basic skill growth but sharper calibration in harder edge cases.

### Next-Step Tone
Keep pushing on higher-stakes ambiguity, validation discipline, and selective AI use.

---

## Strength Statement Pool

Use these as selectable strength outputs.

- You identify meaningful flow issues faster than cosmetic ones.
- You can distinguish structural friction from surface polish.
- You are willing to commit to a direction instead of hiding behind vague trade-offs.
- You notice state and recovery problems that weaker reviewers often miss.
- You can turn a vague brief into a more usable starting point.
- You do not blindly trust polished AI output.
- You show useful judgment at the feature and flow level.
- You can see when user clarity matters more than feature completeness.
- You usually focus on what helps the user act, not just what looks complete.
- You show signs of stronger cross-surface thinking.

---

## Gap Statement Pool

Use these as selectable gap outputs.

- Your answers stay too local when the real issue is more structural.
- You still react to polished output too easily.
- You notice some issues, but not always the ones that matter most.
- Your trade-off choices become weaker when both options look reasonable.
- You avoid commitment too often in ambiguous situations.
- You rewrite vague language, but do not always clarify the actual product problem.
- Your reasoning about system effects is still thin.
- You either trust AI output too quickly or reject it too broadly.
- You do not always separate user value from feature volume.
- You still confuse visual clarity with product clarity in some cases.

---

## AI Pressure Templates

Use capability-bucket framing, not brand-war framing.

---

## AI Pressure — Lower Pattern

### AI already handles well
- first-draft layouts
- fast screen variations
- polished-looking UI concepts
- early mockup generation

### AI helps, but you still need judgment
- basic flow cleanup
- surface critique
- first-pass prioritization

### Still human-heavy
- deciding what the product should solve first
- choosing between imperfect directions
- validating whether structure matches user need

---

## AI Pressure — Mid Pattern

### AI already handles well
- draft UI generation
- visual exploration
- many early component-level directions

### AI helps, but you still need judgment
- flow critique
- information shaping
- prioritization under moderate ambiguity

### Still human-heavy
- reframing a vague product ask
- deciding what not to build
- balancing constraints across user, business, and implementation realities

---

## AI Pressure — Higher Pattern

### AI already handles well
- production-oriented first drafts
- visual and layout exploration
- initial scaffolding for screens and flows

### AI helps, but you still need judgment
- refining structure
- exploring alternatives
- accelerating critique and iteration

### Still human-heavy
- problem framing
- system-level trade-offs
- selective acceptance vs rejection of AI suggestions
- high-quality product direction under ambiguity

---

## Next-Step Suggestion Templates

Select up to 3.

### Problem Framing Suggestions
- Practice rewriting vague briefs into concrete product problems.
- Force yourself to name the user, the outcome, and the constraint before ideating.
- Study how strong product people separate symptoms from root problems.

### Flow Judgment Suggestions
- Practice critiquing flows, not just screens.
- Get better at spotting missing states, recovery paths, and continuity gaps.
- Review more onboarding, checkout, and task-completion flows with a state lens.

### System Awareness Suggestions
- Practice tracing how one local decision affects other surfaces.
- Study consistency, information structure, and downstream impact.
- Review products by asking what breaks when one part changes.

### Trade-off Suggestions
- Train yourself to choose between imperfect options without hiding behind theory.
- Write the downside of your preferred option every time.
- Get stricter about reversibility, user value, and scope pressure.

### AI Collaboration Suggestions
- Practice keeping useful scaffolding while rejecting shallow assumptions.
- Review AI output with a validation mindset, not a hype mindset.
- Get more precise about what needs research before it deserves confidence.

---

## Homepage Copy Seed (Vietnamese, Draft)

Use only as a starting point.

### Headline
Bài test ngắn để xem năng lực product / UX judgment của bạn đang ở đâu trong thời AI.

### Subheadline
Không kiểm tra Figma, không hỏi lý thuyết suông. Chỉ có các tình huống thực tế, trade-off, critique, và cách bạn làm việc với output từ AI.

### Support Copy
Mất khoảng 15–20 phút. Miễn phí. Kết quả chỉ mang tính định hướng, nhưng đủ để chỉ ra bạn đang mạnh ở đâu, yếu ở đâu, và phần nào AI đã làm khá tốt rồi.

### CTA
Bắt đầu bài assessment

---

## Exit Copy Seed

### Temporary Experiment Note
This public version is temporary and may be taken down after the experiment period.

### Open-Source Note
The project will later be published on GitHub so anyone interested can run it locally or fork it.

---

## Final Rule

If content ever becomes:
- more clever than useful
- more polished than truthful
- more brand-heavy than capability-focused
- or more quiz-like than judgment-based

rewrite it.