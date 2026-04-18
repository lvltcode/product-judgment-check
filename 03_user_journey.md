Dán file này thành 03_user_journey.md:

# AI-Era Product Judgment Check — User Journey
> Source of truth for the user flow. Reference this before building screens, writing copy, or adding features.

---

## Core Loop

User lands on site
  → understands purpose
  → starts assessment
  → completes realistic tasks
  → gets a result
  → understands AI pressure on their current skill
  → sees what to improve next

This loop is the product.

If a screen or feature does not improve this loop, it is probably out of scope for v1.

## Journey Overview

The v1 experience has five main stages:

Landing
Assessment Intro
Assessment Flow
Result
Optional Exit Actions

## 1. Landing
Goal

Help the user understand:

what this website is for
who it is for
what it measures
what it does not measure
how long it takes
why it matters now
User Questions This Screen Must Answer
What is this?
Is this for me?
Is this free?
How long does it take?
Is this a quiz or something more serious?
Why should I trust the result?
Required Content
short headline
clear subheadline
short explanation
expected duration: 15–20 minutes
free / public experiment framing
CTA to start assessment
Important Notes
The homepage may be written in Vietnamese for v1
Copy must stay simple and direct
Do not overload the page with long essays or generic AI commentary
Do not turn this into a marketing page

## 2. Assessment Intro
Goal

Prepare the user before they start.

This screen should explain:

the assessment is practical, not theoretical
some tasks require choosing between imperfect options
some tasks include AI-generated output
concise thinking matters more than polished writing
the result is directional, not a formal certification
User Questions This Screen Must Answer
What kind of questions will I see?
How should I answer?
Do I need design experience?
Do I need to write a lot?
Can I skip and come back later?
Required Content
short explanation of the 5 task types
time expectation
note that this is not a Figma or theory test
CTA to begin
Optional Content
progress expectations
reminder that there is no single “perfect” wording

## 3. Assessment Flow
Goal

Take the user through 8 realistic tasks without confusion or fatigue.

Structure

The assessment contains:

2 scenario-based tasks
2 forced trade-off tasks
2 critique tasks
1 rewrite task
1 AI collaboration task
UX Rules
one task per screen
clear progress indicator
no clutter
primary action always obvious
previous / next behavior must be predictable
user should not feel lost inside the flow
Shared Task Elements

Each task screen should include:

task type label
short context
prompt
answer area
optional helper note if needed
navigation action
Important Constraints
avoid giant walls of text
keep prompts compact but realistic
do not require long essay answers
prefer semi-structured response formats
save progress automatically if possible
3A. Scenario-Based Task Flow
User Experience

The user reads a realistic product situation and chooses the best next move.

Required Elements
short scenario
2–3 possible directions or one primary choice area
support reasons
short rationale field
What the User Should Feel
this feels like real product work
the answer is not trivial
I need to think, but I do not need to over-write
3B. Forced Trade-off Task Flow
User Experience

The user must choose one direction between imperfect options.

Required Elements
compact scenario
clear options
note that the user must commit
short reasoning field
What the User Should Feel
I cannot hide behind vague answers
I need to choose what is better in this context
3C. Critique Task Flow
User Experience

The user sees a polished-looking screen or flow with deeper UX issues.

Required Elements
image or mocked screen
multi-select issue list
severity or ranking step
short explanation for biggest issue
What the User Should Feel
this looks decent at first
but something important is off
I need to judge structure, not just appearance
3D. Rewrite Task Flow
User Experience

The user receives a weak or ambiguous brief and rewrites it into a more usable product definition.

Required Elements

Structured fields for:

problem statement
success criteria
primary user
constraints
proposed flow
What the User Should Feel
I am clarifying messy thinking
this is closer to real work than answering theory questions
3E. AI Collaboration Task Flow
User Experience

The user sees:

the original prompt
the AI output

They must judge:

what to keep
what to remove
what to refine
what needs more research
what should not be trusted yet
Required Elements
original prompt
AI output
structured checklist or grouped answer inputs
final short judgment statement
What the User Should Feel
AI is useful, but not automatically right
I am being tested on judgment, not on hype

## 4. Result
Goal

Return a result that feels believable, useful, and slightly uncomfortable in a productive way.

The Result Page Must Include
### 1. Level

One of:

Executor
Reliable Builder
Flow Thinker
System Designer
Product Judge
### 2. Strengths

Short, practical statements.

### 3. Gaps

Short, direct weaknesses.
Do not soften too much.

### 4. Capability Breakdown

Break down by:

Problem Framing
Flow Judgment
System Awareness
Trade-off Quality
AI Collaboration Maturity

### 5. AI Pressure Layer

Explain:

what AI already handles well
what AI helps with but still needs judgment
what remains strongly human-heavy

### 6. What to Improve Next

Concrete next steps.
This is one of the most important parts of the product.

Result Tone

The result should be:

honest
practical
not flattering for the sake of retention
not insulting
not vague
not overloaded with theory language

Good result tone:

“You spot obvious flow issues, but your answers still stay too local.”
“You make reasonable feature decisions, but system-level trade-offs are still weak.”

Bad result tone:

“Great job, you are doing amazing.”
“You are a visionary.”
“Keep learning and growing.”

### 5. Optional Exit Actions

After the result, the user may optionally:

leave an email
save or copy their result
retry later
view GitHub / open-source note
leave short feedback

These are optional.
They are not the core product.

Email Capture Position

For v1, email capture should happen after the result, not before the assessment.

Reason:

lower friction
faster start
better completion rate
less dependency on auth/email infrastructure

The user should be able to complete the assessment without creating an account.

GitHub / Open-Source Ending

Because this is a short public experiment, the product should clearly communicate:

the public site may be temporary
the project will later be open-sourced
interested users will be able to run it locally or fork it

This should appear near the end of the journey, not as a distraction at the start.

Empty State Rules

No screen should feel broken or abandoned.

Examples:

If result generation fails: explain what happened and let the user retry
If image-based critique content fails to load: provide fallback text and retry option
If the user exits halfway: allow return or restart clearly

Do not leave users in silent dead ends.

Friction Rules
Good Friction

Friction is acceptable when it creates real judgment pressure:

choosing between imperfect options
ranking issues
rewriting a vague brief
critiquing AI output
Bad Friction

Friction is harmful when it is operational:

forced sign-up before starting
giant text blocks
unclear navigation
hidden progress
unnecessary typing
too many settings
Trust Rules

The product must feel trustworthy.

To support this:

state clearly what the test does and does not measure
avoid exaggerated claims
avoid “career destiny” language
make result language concrete
make AI comparison practical, not theatrical
v1 Journey Rules
The user should be able to start fast.
The user should understand the purpose within minutes.
The user should not need special design-tool knowledge.
The user should finish in one sitting.
The result should feel more useful than entertaining.
The product should be sharper than a quiz and lighter than a course.
Final Rule

If there is ever a conflict between:

adding content
adding onboarding steps
adding account features
adding explanation screens
and keeping the assessment flow sharp

protect the flow.

That is where the value is.