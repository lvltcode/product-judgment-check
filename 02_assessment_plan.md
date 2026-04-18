# AI-Era Product Judgment Check — Assessment Plan
> Source of truth for assessment structure, scoring, and result logic. Lock this before building screens or writing final questions.

---

## Purpose

This assessment measures practical product, UX, and design judgment under real-world constraints.

It does **not** measure:
- theory memorization
- tool proficiency
- visual taste alone
- portfolio polish
- knowledge of framework names

The assessment should feel like a compact simulation of real product work.

---

## Assessment Goal

In **15–20 minutes**, the user should complete a short set of realistic tasks that reveal:

1. how they frame problems
2. how they judge flows and friction
3. how they reason about systems and cross-feature impact
4. how they choose trade-offs
5. how they work with AI output critically

---

## Assessment Structure

The v1 assessment uses **8 tasks** total.

### Task Mix
1. **Scenario-Based Assessment** × 2
2. **Forced Trade-off** × 2
3. **Critique Task** × 2
4. **Rewrite Task** × 1
5. **AI Collaboration Task** × 1

This mix is mandatory for v1.

---

## Time Model

Target total completion time: **15–20 minutes**

Suggested pacing:
- Scenario-Based Assessment: 2.5 minutes each
- Forced Trade-off: 1.5–2 minutes each
- Critique Task: 2 minutes each
- Rewrite Task: 3–4 minutes
- AI Collaboration Task: 3 minutes

The experience should feel focused, not rushed.

---

## Capability Areas Measured

The assessment scores five capability areas.

### 1. Problem Framing
Can the user identify the real problem instead of reacting to surface symptoms?

### 2. Flow Judgment
Can the user reason through steps, friction, hierarchy, states, and user movement?

### 3. System Awareness
Can the user see broader impact across features, surfaces, consistency, and scale?

### 4. Trade-off Quality
Can the user choose between imperfect options based on user value, business value, and constraints?

### 5. AI Collaboration Maturity
Can the user judge AI output critically, keep what is useful, reject what is shallow, and identify what needs more verification?

---

## Task Type Definitions

---

### A. Scenario-Based Assessment

The user is given a realistic product situation and must decide what should happen next.

Examples:
- A teacher app wants to add a parent portal. Should it prioritize Home or Pieces first?
- Checkout is dropping at the information step. Should the team fix CTA copy or reduce required fields?
- A dashboard looks polished, but users do not understand priority. Should the team fix hierarchy or restructure information architecture?

#### What this measures
- problem framing
- flow judgment
- priority reasoning

#### Recommended answer format
- choose one primary direction
- choose 1–3 supporting reasons
- short written explanation

---

### B. Forced Trade-off

The user must choose between 2–3 imperfect options.

“It depends” is not enough by itself.
The user must commit to a direction.

#### What this measures
- trade-off quality
- realism under constraints
- decision clarity

#### Recommended answer format
- choose one option
- select trade-off rationale
- optional short explanation

---

### C. Critique Task

The user reviews a polished-looking screen or flow with deeper UX flaws.

They should be able to detect issues such as:
- weak hierarchy
- unclear primary action
- missing state
- broken logic
- missing empty/error handling
- polished visuals hiding weak UX structure

#### What this measures
- flow judgment
- critique depth
- system awareness

#### Recommended answer format
- pick top issues from a list
- rank severity
- short explanation of biggest problem

---

### D. Rewrite Task

The user receives an ambiguous or weak brief and must rewrite it into a more workable product definition.

The rewrite should include:
- problem statement
- success criteria
- primary user
- constraints
- proposed flow

#### What this measures
- problem framing
- clarity of thinking
- ability to turn ambiguity into action

#### Recommended answer format
Use a structured form with 5 fields.
Do not use a blank essay box.

---

### E. AI Collaboration Task

The user receives:
- the original prompt
- the AI-generated output

The user must judge:
- what to keep
- what to remove
- what to refine
- what needs more research
- what should not be trusted yet

#### What this measures
- AI collaboration maturity
- critique quality
- realism and judgment

#### Recommended answer format
- checklist by category
- short rationale
- one final decision statement

---

## Response Format Rules

The assessment should **not** rely on long free-form writing in v1.

Use **semi-structured responses**:
- multiple choice where useful
- ranked choices
- multi-select with limits
- short rationale fields
- structured rewrite fields

This keeps the assessment:
- faster
- easier to score
- more reliable
- less expensive to run

---

## Scoring Model

The scoring model has **two layers**.

---

### Layer 1 — Objective-ish Scoring

This layer scores parts that are relatively stable and comparable.

Examples:
- issue spotting
- priority ranking
- trade-off selection
- identifying risky AI output
- detecting flow or state problems

This layer should account for **about 60%** of the final score.

---

### Layer 2 — Judgment Scoring

This layer scores reasoning quality.

Rubric dimensions:
- reasoning quality
- completeness
- realism
- system awareness
- AI steering maturity

This layer should account for **about 40%** of the final score.

Judgment scoring should be rubric-based, not purely binary.

---

## Suggested Weight by Capability Area

Use this as the v1 default.

| Capability Area | Weight |
|---|---:|
| Problem Framing | 20 |
| Flow Judgment | 25 |
| System Awareness | 20 |
| Trade-off Quality | 20 |
| AI Collaboration Maturity | 15 |

Total = 100

---

## Suggested Weight by Task Type

Use this as the v1 default.

| Task Type | Count | Weight |
|---|---:|---:|
| Scenario-Based Assessment | 2 | 24 |
| Forced Trade-off | 2 | 18 |
| Critique Task | 2 | 24 |
| Rewrite Task | 1 | 18 |
| AI Collaboration Task | 1 | 16 |

Total = 100

---

## Scoring Principles

1. A polished explanation should not beat a correct judgment with plain language.
2. Clear thinking matters more than vocabulary.
3. Detecting the most important issue matters more than listing many minor issues.
4. A realistic trade-off is better than an idealized answer with no constraint awareness.
5. In AI tasks, skepticism alone is not enough. The user must also know what to keep.

---

## Level Mapping

The final score maps to five output levels.

### 1. Executor
- sees tasks locally
- follows obvious direction
- struggles with deeper prioritization
- often reacts to surface-level problems

### 2. Reliable Builder
- avoids many basic mistakes
- can handle feature-level work reasonably well
- sees some friction and state issues
- still weak on broader system consequences

### 3. Flow Thinker
- understands user flow and interaction logic
- spots meaningful friction and missing states
- can improve local product decisions
- not yet strong at larger system-level trade-offs

### 4. System Designer
- sees cross-feature impact
- understands consistency, scaling effects, and structural implications
- makes stronger trade-off decisions
- can critique polished but weak solutions more deeply

### 5. Product Judge
- consistently frames the real problem
- chooses between strong but imperfect options well
- balances user, business, and implementation realities
- collaborates with AI critically and selectively

---

## Suggested Score Bands

Use these as the v1 default.

| Level | Score Band |
|---|---:|
| Executor | 0–39 |
| Reliable Builder | 40–54 |
| Flow Thinker | 55–69 |
| System Designer | 70–84 |
| Product Judge | 85–100 |

These bands can be adjusted later after real data.

---

## Result Structure

Each completed assessment should produce:

### 1. Current Level
One of the five levels above.

### 2. Strength Summary
2–4 concise strengths.

### 3. Gap Summary
2–4 practical weaknesses.

### 4. Capability Breakdown
Show the five capability areas separately.

### 5. AI Pressure Layer
Explain:
- which parts of the user’s current pattern are already highly AI-assisted
- which parts are partially automatable
- which parts still depend heavily on human judgment

### 6. Learning Direction
Show the next things to improve, in order.

---

## AI Comparison Layer

The assessment itself is the core.
AI tool comparison is only a result-layer interpretation.

For v1, use these benchmark tools:
- Claude Design
- Google Stitch
- Figma Make

Important:
- do not score users “against a specific brand”
- do not make the product feel like a tool review site
- compare through capability buckets instead

### Capability Buckets
1. AI already handles well
2. AI helps but still needs strong human judgment
3. Still human-heavy today

---

## Content Rules for v1 Tasks

Every task should follow these rules:

- grounded in realistic product work
- short enough to complete quickly
- specific enough to avoid vague motivational answers
- not dependent on deep domain knowledge
- not dependent on memorizing jargon
- not dependent on visual taste alone

Avoid:
- academic theory questions
- trick questions
- framework trivia
- “what does this acronym mean?” style questions
- open-ended essay prompts with no structure

---

## Difficulty Model

The assessment should mix:
- obvious problems
- medium ambiguity
- high-quality imperfect options

Do not make all questions easy.
Do not make all questions abstract.

A strong test has both:
- cases where weak users miss the issue entirely
- cases where stronger users must choose between two believable directions

---

## v1 Scoring Implementation Direction

For v1, scoring should be mostly rule-based.

Recommended approach:
- predefined answer keys for objective-ish layer
- rubric mapping for semi-structured responses
- no mandatory LLM scoring in v1

Why:
- faster to build
- cheaper to run
- easier to inspect
- more stable during a short public experiment

LLM-assisted scoring can be explored later, but should not be required for launch.

---

## Calibration Rule

Before public launch, every task should be reviewed against this question:

**Does this task reveal judgment, or does it only reward familiarity with design language?**

If it only rewards language, references, or test-taking skill, rewrite it.

---

## Final Rule

If forced to choose between:
- making the assessment easier to build
- making the assessment feel more impressive
- making the assessment more “quiz-like”
- and making the assessment more truthful

choose truthfulness.

That is the value of the product.