# AI-Era Product Judgment Check — V1 Implementation Plan
> Source of truth for how v1 should be built. Lock this before implementation starts.

---

## Purpose

This file defines the minimum implementation structure for v1.

It exists to answer:
- what pages exist
- how task content is rendered
- how answers are stored during the session
- how scoring runs
- how results are built
- what is intentionally out of scope

This is a short public experiment, not a full platform.

---

## V1 Product Shape

V1 is a lightweight assessment web app with one core flow:

**Landing → Intro → Assessment → Result → Optional Exit Actions**

The product should be fast to build, easy to verify, and easy to take down after the 10–15 day public run.

---

## Implementation Priorities

1. Protect the assessment flow
2. Keep scoring inspectable
3. Avoid unnecessary infrastructure
4. Avoid account/auth complexity
5. Keep content structured
6. Keep the app easy to QA

---

## Recommended V1 Stack

### Frontend
- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui or lightweight custom components

### Deployment
- Vercel

### Data / storage
Preferred v1 direction:
- **no required backend for core assessment flow**
- use local state + static content/config files
- optionally add lightweight persistence later if needed

### Optional backend
Only add Supabase if one of these becomes necessary:
- saving results centrally
- collecting emails
- capturing feedback
- storing analytics/events beyond simple frontend analytics

If not needed, do not add backend dependency to the core assessment flow.

---

## V1 Architecture Principle

The assessment must work even if:
- the user never signs in
- no database is connected
- the result is generated entirely on the client

This keeps v1:
- faster
- cheaper
- easier to debug
- easier to ship

---

## Route Structure

Use the smallest route set possible.

### Required Routes

| Route | Purpose |
|---|---|
| `/` | Landing page |
| `/intro` | Assessment intro / expectation setting |
| `/assessment` | Assessment shell route |
| `/result` | Final result page |
| `/done` or `/exit` | Optional exit actions |

### Assessment Route Model

Preferred v1 pattern:
- `/assessment` as a single route
- task screens rendered by internal state
- not one separate URL per task unless needed

Reason:
- simpler implementation
- easier progress control
- less routing overhead
- easier to manage task order

### Optional Alternative
If needed for debugging or direct QA:
- `/assessment/:taskId`

Use only if it clearly helps implementation.

---

## Page Responsibilities

---

## 1. Landing Page `/`

### Purpose
Explain:
- what the product is
- what it is not
- who it is for
- how long it takes
- why it matters

### Must Include
- headline
- short explanation
- duration
- free/public experiment note
- start CTA

### Must Avoid
- long essays
- AI hype content
- too much benchmark-tool discussion
- account/login friction

---

## 2. Intro Page `/intro`

### Purpose
Prepare the user before starting.

### Must Include
- short explanation of task types
- reminder this is practical, not theoretical
- reminder concise thinking matters more than polished writing
- begin CTA

### Must Avoid
- too much instruction
- example overload
- unnecessary warnings

---

## 3. Assessment Route `/assessment`

### Purpose
Run all 8 tasks in order.

### Must Include
- task type label
- progress indicator
- task content
- answer controls
- next action
- optional previous action if safe

### Must Avoid
- multiple tasks on one screen
- unclear progression
- excessive scrolling
- giant text blocks

---

## 4. Result Page `/result`

### Purpose
Show:
- level
- strengths
- gaps
- capability breakdown
- AI pressure layer
- what to improve next

### Must Include
- believable result summary
- structured output
- practical next steps

### Must Avoid
- fake praise
- horoscope-style language
- false precision visuals
- overbuilt charts

---

## 5. Exit Page `/done` or `/exit`

### Purpose
Optional post-result actions.

### Can Include
- optional email capture
- optional short feedback
- note about public experiment
- GitHub / open-source note

### Must Avoid
- blocking the result behind email
- turning the exit into a funnel-heavy page

---

## Assessment Rendering Model

Use a structured task definition system.

### Recommended content model
Each task should be represented as structured content in a config file or content module.

Example structure:
- `id`
- `type`
- `title`
- `prompt`
- `context`
- `options`
- `helperText`
- `answerSchema`
- `scoringKeyRef`

### Recommended file direction
- `src/content/tasks.ts`
- `src/content/results.ts`
- `src/content/aiPressure.ts`
- `src/config/scoring.ts`

Exact file names can vary, but keep content separate from UI components.

---

## Answer State Model

Use a single assessment session state.

### Required state
- current task index
- answers by task ID
- completion status
- progress state
- result object after scoring

### Example conceptual shape

```ts
type AssessmentAnswerMap = {
  [taskId: string]: unknown
}

type AssessmentSessionState = {
  currentTaskIndex: number
  answers: AssessmentAnswerMap
  isComplete: boolean
  result: AssessmentResult | null
}

This does not need to be the exact implementation.
It defines the minimum conceptual model.

Answer Persistence Strategy
Preferred v1 default
in-memory React state during session
optional localStorage persistence for recovery
Why
avoids backend dependency
protects completion speed
supports refresh recovery if implemented carefully
Recommendation

If adding persistence:

store only task answers and current index
clear storage after result if desired
do not overcomplicate with user identity
Scoring Execution Model
Preferred timing

Run scoring:

once the user completes the final task
before navigating to /result
Scoring location

Preferred v1:

client-side
pure functions
deterministic
based on static scoring config
Why
easy to inspect
easy to QA
no API dependency
no backend latency
Result Object Model

The app should generate one result object after scoring.

Result object should include
final score
level
capability scores
strengths
gaps
AI pressure layer
next-step suggestions
Example conceptual shape
type AssessmentResult = {
  finalScore: number
  level: "Executor" | "Reliable Builder" | "Flow Thinker" | "System Designer" | "Product Judge"
  capabilityScores: {
    problemFraming: number
    flowJudgment: number
    systemAwareness: number
    tradeoffQuality: number
    aiCollaborationMaturity: number
  }
  strengths: string[]
  gaps: string[]
  aiPressure: {
    alreadyHandledWell: string[]
    helpsButNeedsJudgment: string[]
    stillHumanHeavy: string[]
  }
  nextSteps: string[]
}

This does not need to be the exact final code.
It defines the output structure conceptually.

Scoring Engine Structure

Use pure functions.

Recommended logical flow
validate task completion
score each task
aggregate capability scores
normalize capability scores
calculate final score
map score to level
derive strengths
derive gaps
derive AI pressure layer
derive learning direction
construct result object
Recommended separation
task scoring logic separate from task content rendering
result derivation separate from UI
no scoring logic hidden inside components
Component Structure

Keep components small and boring.

Suggested components
LandingPage
IntroPage
AssessmentPage
TaskRenderer
ProgressBar
TaskHeader
TaskActions
task-specific answer components
ResultPage
ResultSection
ExitPage
Task-specific components

Likely:

ScenarioTask
TradeoffTask
CritiqueTask
RewriteTask
AICollabTask

Do not over-abstract too early.

Content vs Logic Separation

This is important.

Keep separate
task content
scoring rules
result text templates
rendering components
Do not do this
hardcode prompts inside components
hardcode scoring logic in page JSX
mix result-copy generation with UI layout code
Result Content Strategy

Use template-based result generation, not freeform AI output.

Preferred v1 model
predefined strength statements
predefined gap statements
predefined AI pressure statements
predefined next-step suggestions

Select based on score patterns.

Why
consistent
cheaper
easier to trust
easier to debug
Analytics Direction

Keep analytics minimal.

Useful events
landing viewed
assessment started
task reached
assessment completed
result viewed
email submitted
feedback submitted
Avoid
deep event complexity in v1
behavior-tracking overkill
analytics work that slows shipping
Email Capture Strategy
Default position

After result only.

V1 options
no email capture at all
simple optional email field on exit page
lightweight Supabase-backed email capture if needed
Rule

Email must never block:

assessment start
assessment completion
result visibility
Feedback Strategy

Keep feedback simple.

Recommended

One or two questions max:

“Was this result useful?”
optional text: “What felt most accurate or least accurate?”

This can be:

frontend-only for now
or stored later if a backend is added
GitHub / Open-Source Note

Since the project is temporary, include a short note near the end:

this public version may be taken down after the experiment
the project will later be available on GitHub
users can run it locally or fork it

This note should be present, but not distracting.

Mobile Rules

The app must work well on mobile.

Requirements
one task per screen
controls easy to tap
progress visible
no horizontal overflow
no overly dense layouts
answer inputs easy to scan
Do not assume
large desktop screens
keyboard-heavy usage
long uninterrupted attention span
Error / Recovery Rules
Must handle
refresh during assessment
incomplete assessment
result access without finished answers
broken content asset load if critique image exists
Examples
if the assessment is incomplete, redirect back to current task
if result state is missing, do not show a broken result page
if an image asset fails, show fallback text and continue option
Accessibility Rules

Minimum v1 standards:

visible focus states
keyboard reachable controls
strong text contrast
labels for all inputs
do not rely on color alone
progress must be readable
Out of Scope for V1

Do not build these unless explicitly re-approved:

login before assessment
full user accounts
result history dashboard
recruiter mode
leaderboard
admin CMS
role branching logic
AI-generated result writing
backend-first architecture
certificate flow
social profile system
QA Priorities

Before launch, verify:

Core flow
user can start fast
user can finish all 8 tasks
scoring runs correctly
result page renders correctly
Quality
result feels believable
task flow stays within 15–20 minutes
mobile experience is clean
AI comparison remains secondary
Technical
no broken state on refresh
no broken route behavior
no missing task content
no hidden dependency on backend/auth
Build Order

Follow this order:

static content structure
assessment page shell
task rendering components
answer state model
scoring functions
result page
optional exit actions
analytics / email / feedback extras if still needed

Do not start with polish.
Do not start with backend.

Final Rule

If there is a conflict between:

adding more infrastructure
adding more complexity
adding more persistence
and keeping the assessment fast, inspectable, and easy to ship

choose fast, inspectable, and easy to ship.