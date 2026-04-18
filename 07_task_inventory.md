# AI-Era Product Judgment Check — Task Inventory
> Source of truth for the 8 assessment tasks. Lock this before building screens, scoring logic, or result mapping.

---

## Purpose

This file defines the actual v1 assessment tasks.

For each task, it locks:
- task type
- core scenario
- capability coverage
- answer format
- what a strong answer looks like
- what a weak answer looks like

This file should stay practical.
Do not let tasks drift into theory, trivia, or vague opinion.

---

## v1 Task Set Overview

Total tasks: **8**

| Task ID | Task Type | Working Title |
|---|---|---|
| T1 | Scenario-Based Assessment | Parent Portal Priority |
| T2 | Scenario-Based Assessment | Checkout Drop Fix |
| T3 | Forced Trade-off | Dashboard Clarity vs Rebuild |
| T4 | Forced Trade-off | MVP Speed vs Structural Cleanliness |
| T5 | Critique Task | Polished Dashboard, Weak Priority |
| T6 | Critique Task | Smooth Onboarding, Broken State Logic |
| T7 | Rewrite Task | Rewrite a Vague Product Brief |
| T8 | AI Collaboration Task | Judge an AI-Generated Product Direction |

---

## Task Design Rules

All tasks must follow these rules:

- realistic product situation
- compact prompt
- no theory memorization needed
- no dependency on Figma skill
- no dependency on domain-specific jargon
- answerable in semi-structured format
- strong users should reveal judgment, not vocabulary

---

## T1 — Parent Portal Priority

### Task Type
Scenario-Based Assessment

### Core Scenario
A teacher app is adding a parent portal for the first time.
The team can only ship one surface in v1:

- **Home**: weekly lesson summary, next lesson, practice goal
- **Pieces**: full piece list with statuses and progress

The user must decide which one should be prioritized first.

### Capability Coverage
- Problem Framing
- Flow Judgment
- Trade-off Quality

### What This Task Tests
Whether the user understands what creates immediate user value in a constrained rollout.

### Recommended Answer Format
- choose one direction
- select up to 3 reasons
- short rationale

### Strong Answer Pattern
A strong answer:
- prioritizes the surface with the clearest immediate outcome
- reasons from user value, not from feature completeness
- understands v1 scope pressure
- explains what can wait

### Weak Answer Pattern
A weak answer:
- chooses based on surface complexity or visual appeal alone
- treats “more information” as automatically better
- ignores user urgency and context
- gives vague “both are important” answers without committing

---

## T2 — Checkout Drop Fix

### Task Type
Scenario-Based Assessment

### Core Scenario
A checkout flow is dropping users heavily at the information step.
The team has two likely directions for the next experiment:

- improve CTA and supporting copy
- reduce the number of required form fields

The user must decide what to test first.

### Capability Coverage
- Problem Framing
- Flow Judgment
- Trade-off Quality

### What This Task Tests
Whether the user can reason from likely friction sources instead of treating all improvement ideas as equal.

### Recommended Answer Format
- choose one direction
- select top reasons
- short rationale

### Strong Answer Pattern
A strong answer:
- reasons about friction and effort imposed on users
- chooses based on likely root cause, not copy polish instinct
- shows a test mindset
- distinguishes surface messaging from structural friction

### Weak Answer Pattern
A weak answer:
- defaults to wording fixes without questioning structure
- treats conversion problems as branding/copy issues by reflex
- gives an abstract answer without explaining the likely user behavior

---

## T3 — Dashboard Clarity vs Rebuild

### Task Type
Forced Trade-off

### Core Scenario
A dashboard looks modern and polished, but users consistently say:
“I don’t know what matters here.”

The team has time for only one next move this sprint:

- fix visual hierarchy inside the existing structure
- restructure the information architecture more deeply

The user must choose one.

### Capability Coverage
- Flow Judgment
- System Awareness
- Trade-off Quality

### What This Task Tests
Whether the user can judge when a presentation problem is actually a structural problem.

### Recommended Answer Format
- choose one option
- pick trade-off reasons
- short rationale

### Strong Answer Pattern
A strong answer:
- distinguishes surface clarity from structural clarity
- chooses a direction based on the problem signal, not aesthetics
- shows awareness of what each option fixes and does not fix

### Weak Answer Pattern
A weak answer:
- picks the easier-looking option without reasoning
- confuses hierarchy and IA
- gives generic “depends on the user” language without commitment

---

## T4 — MVP Speed vs Structural Cleanliness

### Task Type
Forced Trade-off

### Core Scenario
A product team needs to launch a working v1 in 10 days.
They have two implementation options:

- ship a narrower but slightly messy version that solves the main user problem now
- delay launch to make the structure cleaner and more flexible

The user must choose one.

### Capability Coverage
- Trade-off Quality
- System Awareness
- Problem Framing

### What This Task Tests
Whether the user can choose under real delivery pressure without becoming reckless or idealized.

### Recommended Answer Format
- choose one option
- select trade-off logic
- short rationale

### Strong Answer Pattern
A strong answer:
- frames the choice through user value, risk, and reversibility
- understands when speed is justified and when debt becomes dangerous
- reasons from context, not ideology

### Weak Answer Pattern
A weak answer:
- defaults to “clean architecture” as moral superiority
- defaults to “move fast” without thinking about breakage
- does not discuss downside clearly

---

## T5 — Polished Dashboard, Weak Priority

### Task Type
Critique Task

### Core Scenario
The user is shown a polished AI-generated dashboard.
It looks modern and organized at first glance.

But the deeper issues include things like:
- priority is unclear
- primary action is weak
- too many equal-weight cards
- key next step is visually buried

### Capability Coverage
- Flow Judgment
- System Awareness

### What This Task Tests
Whether the user can see deeper UX problems behind visually decent output.

### Recommended Answer Format
- select top issues
- rank severity
- explain biggest problem briefly

### Strong Answer Pattern
A strong answer:
- identifies the most decision-blocking issue
- does not get distracted by minor visual polish comments
- explains why users would struggle to act

### Weak Answer Pattern
A weak answer:
- comments mostly on color, spacing, or personal taste
- lists too many minor issues equally
- misses the action/priority problem

---

## T6 — Smooth Onboarding, Broken State Logic

### Task Type
Critique Task

### Core Scenario
The user is shown an onboarding flow that feels clean and polished.
However, the flow has deeper product issues such as:
- missing empty states
- unclear what happens after completion
- weak error handling
- broken state transitions
- no clear recovery path if the user stops halfway

### Capability Coverage
- Flow Judgment
- System Awareness
- Problem Framing

### What This Task Tests
Whether the user notices flow integrity, not just first-pass screen quality.

### Recommended Answer Format
- select top issues
- rank severity
- explain biggest issue briefly

### Strong Answer Pattern
A strong answer:
- spots missing system states and recovery gaps
- reasons about what happens beyond the happy path
- identifies the most dangerous break in the flow

### Weak Answer Pattern
A weak answer:
- focuses only on visual quality
- assumes polished screens mean a good experience
- ignores state logic and recovery behavior

---

## T7 — Rewrite a Vague Product Brief

### Task Type
Rewrite Task

### Core Scenario
The user receives a vague brief such as:

> “We want an AI dashboard for modern teams so they can move faster and work smarter.”

The user must rewrite it into something workable.

### Required Rewrite Fields
- problem statement
- success criteria
- primary user
- constraints
- proposed flow

### Capability Coverage
- Problem Framing
- Trade-off Quality
- System Awareness

### What This Task Tests
Whether the user can turn vague ambition into a usable product starting point.

### Recommended Answer Format
Structured fields only.
No blank essay box.

### Strong Answer Pattern
A strong answer:
- removes buzzword vagueness
- defines a believable user and problem
- introduces concrete success criteria
- adds useful constraints
- proposes a realistic flow

### Weak Answer Pattern
A weak answer:
- rewrites in nicer wording only
- keeps the brief vague
- adds more buzzwords instead of clarity
- does not create usable product direction

---

## T8 — Judge an AI-Generated Product Direction

### Task Type
AI Collaboration Task

### Core Scenario
The user sees:
- the original prompt given to an AI tool
- the AI-generated product direction or screen output

The user must decide:
- what to keep
- what to remove
- what to refine
- what needs more research
- what should not be trusted yet

### Capability Coverage
- AI Collaboration Maturity
- Problem Framing
- Trade-off Quality

### What This Task Tests
Whether the user can collaborate with AI critically instead of either trusting it blindly or rejecting it emotionally.

### Recommended Answer Format
- categorized selections
- short rationale
- one final judgment statement

### Strong Answer Pattern
A strong answer:
- keeps useful structure where appropriate
- rejects shallow or misleading parts
- identifies uncertainty clearly
- knows what needs human validation
- shows selective trust

### Weak Answer Pattern
A weak answer:
- accepts the output at face value
- rejects everything emotionally because it is AI
- cannot separate useful scaffolding from risky assumptions
- does not identify what needs verification

---

## Capability Coverage Matrix

| Task ID | Problem Framing | Flow Judgment | System Awareness | Trade-off Quality | AI Collaboration |
|---|---:|---:|---:|---:|---:|
| T1 | ✓ | ✓ |  | ✓ |  |
| T2 | ✓ | ✓ |  | ✓ |  |
| T3 |  | ✓ | ✓ | ✓ |  |
| T4 | ✓ |  | ✓ | ✓ |  |
| T5 |  | ✓ | ✓ |  |  |
| T6 | ✓ | ✓ | ✓ |  |  |
| T7 | ✓ |  | ✓ | ✓ |  |
| T8 | ✓ |  |  | ✓ | ✓ |

---

## Difficulty Intent

The task set should mix:
- a few clearer signals
- a few ambiguous but realistic cases
- at least 2 tasks where strong users separate themselves through judgment quality

Do not make all tasks equally easy.
Do not make all tasks abstract.

---

## v1 Content Notes

### Critique tasks
These require prepared visual assets.
The asset should:
- look plausible at first glance
- not look obviously bad
- contain deeper structural issues

### AI collaboration task
This requires:
- one realistic prompt
- one realistic AI output
- enough quality that the user must judge carefully

### Rewrite task
The vague brief should be bad in a realistic way:
- too broad
- too buzzword-heavy
- too solution-first
- unclear on user and success

---

## Anti-Patterns

Do not turn any task into:
- theory trivia
- terminology testing
- visual-taste judging
- a fake impossible puzzle
- an essay competition
- a personality test

---

## Final Rule

Every task should survive this question:

**Would a thoughtful product person recognize this as a real kind of decision?**

If not, rewrite it.