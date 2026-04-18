# AI-Era Product Judgment Check — Scoring Keys
> Source of truth for v1 scoring logic. Lock this before building the scoring engine, result mapping, or final copy.

---

## Purpose

This file defines how user answers become believable results.

It covers:
- scoring layers
- per-task scoring logic
- rubric rules
- capability aggregation
- level mapping
- strength and gap logic
- AI pressure logic
- learning-direction logic

The goal is not fake precision.
The goal is useful, inspectable, reasonably consistent scoring for v1.

---

## Scoring Philosophy

The assessment should reward:
- clear judgment
- realistic prioritization
- practical reasoning
- system awareness
- selective AI trust

The assessment should **not** reward:
- polished wording alone
- jargon
- long answers
- theory memorization
- emotionally anti-AI or blindly pro-AI reactions

---

## Final Score Structure

The final score is out of **100**.

It is built from two layers:

### Layer 1 — Objective-ish Scoring
This measures parts that are relatively stable and scorable by rules.

Examples:
- choosing the stronger direction
- spotting the most important issue
- ranking severe issues correctly
- identifying risky AI output
- selecting valid rewrite components

**Weight:** 60%

### Layer 2 — Judgment Scoring
This measures reasoning quality.

Examples:
- whether the rationale matches the choice
- whether the answer reflects real constraints
- whether the user sees broader consequences
- whether the user knows what AI can and cannot be trusted to do

**Weight:** 40%

---

## Task Weights

| Task ID | Task Type | Weight |
|---|---|---:|
| T1 | Scenario-Based Assessment | 12 |
| T2 | Scenario-Based Assessment | 12 |
| T3 | Forced Trade-off | 9 |
| T4 | Forced Trade-off | 9 |
| T5 | Critique Task | 12 |
| T6 | Critique Task | 12 |
| T7 | Rewrite Task | 18 |
| T8 | AI Collaboration Task | 16 |

Total = 100

---

## Capability Weights

| Capability Area | Weight |
|---|---:|
| Problem Framing | 20 |
| Flow Judgment | 25 |
| System Awareness | 20 |
| Trade-off Quality | 20 |
| AI Collaboration Maturity | 15 |

Total = 100

These weights affect capability breakdown, not task completion order.

---

## Per-Task Score Split

Use this default split for v1.

| Task ID | Objective-ish | Judgment |
|---|---:|---:|
| T1 | 7 | 5 |
| T2 | 7 | 5 |
| T3 | 5 | 4 |
| T4 | 5 | 4 |
| T5 | 7 | 5 |
| T6 | 7 | 5 |
| T7 | 8 | 10 |
| T8 | 7 | 9 |

Total objective-ish = 53  
Total judgment = 47

This is close enough to the intended 60 / 40 balance for v1 and easier to implement task-by-task.

---

## General Scoring Rules

1. A correct core choice with plain reasoning should score better than polished but shallow language.
2. Missing the main issue should cap the score, even if minor observations are good.
3. A strong answer must show prioritization, not just issue listing.
4. “It depends” only scores if the user still commits to a direction.
5. Anti-AI posturing does not count as AI maturity.
6. Blind trust in AI output does not count as AI maturity.
7. Longer answers do not automatically score higher.

---

## Judgment Rubric Scale

Use a **0–4** rubric for judgment dimensions.

### 0 — Weak
- vague
- off-target
- no real reasoning
- mostly surface-level
- contradictory or generic

### 1 — Limited
- partial signal
- some relevant thinking
- still weak, shallow, or inconsistent
- misses important implications

### 2 — Functional
- reasonable answer
- enough clarity to be usable
- still local or incomplete
- some trade-off awareness, but not strong

### 3 — Strong
- clear reasoning
- realistic
- sees the important issue
- handles constraints well
- mostly aligned with a strong product judgment pattern

### 4 — Excellent
- highly focused
- sees the real issue
- balances trade-offs clearly
- shows strong system awareness where relevant
- selective and mature in AI-related tasks

---

## Judgment Dimensions by Task Type

### Scenario-Based Assessment
Score these:
- core reasoning quality
- clarity of priority
- realism

### Forced Trade-off
Score these:
- commitment quality
- trade-off awareness
- downside awareness

### Critique Task
Score these:
- severity judgment
- issue prioritization
- structural thinking

### Rewrite Task
Score these:
- clarity of reframing
- usability of rewritten brief
- realism of constraints
- quality of proposed flow

### AI Collaboration Task
Score these:
- selective trust
- refinement judgment
- research awareness
- final decision quality

---

## Objective-ish Keys by Task

---

## T1 — Parent Portal Priority

### Expected stronger direction
Prioritize **Home** first.

### Why
This delivers immediate weekly clarity:
- what happened
- what to practice
- what is next

It solves the most urgent user-value layer before the full piece-tracking layer.

### Strong reason signals
- immediate user value
- supports the weekly loop
- v1 should solve the highest-frequency need first
- Pieces can follow later without breaking the core experience

### Weak reason signals
- Pieces has more content
- Pieces feels more complete
- Home is simpler to design
- both are equally important with no commitment

### Objective-ish scoring
- correct primary direction: high points
- valid supporting reasons: additional points
- invalid reasoning reduces score

---

## T2 — Checkout Drop Fix

### Expected stronger direction
Test **reducing required fields** first.

### Why
Structural friction is more likely to block progress than copy polish at the same step.

### Strong reason signals
- reduce user effort
- remove likely root friction
- test structural cause before message refinement
- less user burden often beats wording improvement

### Weak reason signals
- better CTA always improves conversion
- copy is the fastest fix so it is automatically best
- the problem is probably “unclear wording” with no further reasoning

### Objective-ish scoring
- correct primary direction
- strong reasons selected
- structural-friction awareness

---

## T3 — Dashboard Clarity vs Rebuild

### Expected stronger direction
This task is **conditional**.

The strongest answer depends on whether the user identifies the problem as:
- primarily hierarchy within a workable structure
- or deeper IA confusion

### v1 scoring rule
To keep v1 simpler:
- accept either option as potentially valid
- score objective-ish points based on supporting reasons
- rely more heavily on judgment scoring

### Strong reason signals for hierarchy fix
- priorities are present but visually flattened
- user can already find the right objects, but not the right order
- structure is acceptable, communication is weak

### Strong reason signals for IA restructure
- key mental model is wrong
- users do not understand grouping or meaning
- information is organized around the system, not user decisions

### Weak answer pattern
- chooses one without clarifying what kind of problem it is
- treats hierarchy and IA as the same thing
- picks the easiest option by instinct only

### Objective-ish scoring
- points for selecting reasons that match the chosen option coherently
- no full-credit shortcut from option choice alone

---

## T4 — MVP Speed vs Structural Cleanliness

### Expected stronger direction
This task is also **conditional**.

The strongest answer depends on whether the user reasons well about:
- user-value urgency
- reversibility
- risk of damage
- scope pressure
- what kind of mess is acceptable

### v1 scoring rule
- no single “correct” option by default
- objective-ish points come from trade-off logic selected
- judgment carries more weight here

### Strong reason signals
- solve the core user problem first
- accept debt only if bounded and reversible
- do not postpone if waiting mostly protects internal neatness
- do postpone if the rushed version would create serious user confusion, broken trust, or hard-to-unwind logic

### Weak answer pattern
- “clean is always better”
- “speed is always better”
- no downside acknowledged
- no notion of reversibility

---

## T5 — Polished Dashboard, Weak Priority

### Expected top issues
The strongest issues should include things like:
- unclear priority
- weak primary action
- too many equal-weight content blocks
- important next step buried

### Lower-value issues
- minor spacing
- personal visual taste
- color preference
- “not modern enough”

### Objective-ish scoring
- points for selecting high-severity structural issues
- points for ranking priority/action problems above cosmetic ones
- score cap if user misses the main priority issue entirely

---

## T6 — Smooth Onboarding, Broken State Logic

### Expected top issues
The strongest issues should include things like:
- unclear post-completion state
- weak recovery path
- missing empty/error states
- broken flow if the user drops midway
- state transitions not handled

### Lower-value issues
- visual polish comments
- generic onboarding preferences
- superficial layout notes

### Objective-ish scoring
- points for selecting state and recovery issues
- points for ranking flow-break issues highly
- score cap if user stays at happy-path surface only

---

## T7 — Rewrite a Vague Product Brief

### Expected improvement pattern
A strong rewrite should:
- define an actual problem
- define an actual user
- define success in observable terms
- define at least one useful constraint
- define a plausible initial flow

### Objective-ish scoring checklist
Award points for presence and quality of:
- concrete problem statement
- usable success criteria
- believable primary user
- meaningful constraint(s)
- realistic proposed flow

### Common weak patterns
- rewriting with nicer wording only
- keeping “AI dashboard for modern teams” vagueness
- adding more buzzwords
- no measurable success logic
- no clear user

---

## T8 — AI Collaboration Task

### Expected strong pattern
A strong answer should:
- keep useful scaffolding or direction where valid
- remove shallow or misleading parts
- refine incomplete parts
- identify what requires research or human validation
- explicitly state what should not be trusted yet

### Objective-ish scoring checklist
Award points for:
- valid keep choices
- valid remove choices
- valid refine choices
- valid research-more choices
- valid distrust choices

### Weak patterns
- accept everything
- reject everything because it is AI
- no separation between useful and risky parts
- no validation awareness

---

## Capability Contribution by Task

Use this matrix to allocate task points into capability subscores.

| Task ID | Problem Framing | Flow Judgment | System Awareness | Trade-off Quality | AI Collaboration |
|---|---:|---:|---:|---:|---:|
| T1 | 4 | 4 | 0 | 4 | 0 |
| T2 | 4 | 4 | 0 | 4 | 0 |
| T3 | 0 | 4 | 2 | 3 | 0 |
| T4 | 3 | 0 | 2 | 4 | 0 |
| T5 | 0 | 7 | 5 | 0 | 0 |
| T6 | 3 | 6 | 3 | 0 | 0 |
| T7 | 7 | 0 | 4 | 7 | 0 |
| T8 | 2 | 0 | 0 | 5 | 9 |

These values are contribution weights, not standalone scores.

---

## Capability Score Calculation

### Step 1
Calculate each task score.

### Step 2
Distribute task score into capability buckets using the contribution matrix.

### Step 3
Normalize each capability score to a 0–100 scale.

### Step 4
Apply capability weights:
- Problem Framing = 20%
- Flow Judgment = 25%
- System Awareness = 20%
- Trade-off Quality = 20%
- AI Collaboration Maturity = 15%

### Step 5
Calculate final total score out of 100.

---

## Level Mapping

| Level | Score Band |
|---|---:|
| Executor | 0–39 |
| Reliable Builder | 40–54 |
| Flow Thinker | 55–69 |
| System Designer | 70–84 |
| Product Judge | 85–100 |

These are v1 default bands and can be tuned later after real data.

---

## Strength Selection Rules

Select strengths from the user’s **top 2 capability areas** and strongest task patterns.

### Strong strength signal examples
- spots meaningful flow issues quickly
- distinguishes structural friction from surface polish
- can commit to a direction under constraints
- sees state and recovery gaps
- critiques AI output selectively

### Rules
- output 2–4 strengths
- strengths must be specific
- avoid personality praise
- avoid vague positives like “creative” or “smart”

---

## Gap Selection Rules

Select gaps from the user’s **lowest 2 capability areas** and weakest task patterns.

### Strong gap signal examples
- stays too local when the issue is systemic
- notices polish before priority
- avoids commitment in trade-off decisions
- rewrites language without clarifying the product problem
- either over-trusts or over-rejects AI output

### Rules
- output 2–4 gaps
- gaps should be direct, not insulting
- avoid generic “needs more experience” phrasing

---

## AI Pressure Layer Logic

This is not a separate score.
It is an interpretation layer built from:
- overall level
- AI Collaboration score
- critique-task performance
- trade-off-task performance

### Output buckets
1. **AI already handles well**
2. **AI helps, but you still need judgment**
3. **Still strongly human-heavy**

### Interpretation examples

#### Lower-level pattern
If the user is weak mainly in:
- surface critique
- first-pass direction choices
- simple flow prioritization

Then result should indicate:
- more of their current work is already heavily AI-assisted

#### Mid-level pattern
If the user is decent in:
- flow critique
- task-level judgment

But weaker in:
- system trade-offs
- deeper reframing

Then result should indicate:
- AI can assist much of the production and exploration layer
- human value increases when structure and trade-offs matter

#### Higher-level pattern
If the user is strong in:
- reframing
- selective critique
- system trade-offs
- selective AI trust

Then result should indicate:
- their value is less in raw output production
- more in direction, judgment, framing, and validation

---

## Learning Direction Logic

The learning direction should not be generic.
It should be driven by weakest patterns.

### If weak in Problem Framing
Recommend:
- practice turning vague briefs into usable problem statements
- define user, outcome, and constraints before ideating
- study how to separate symptoms from root problems

### If weak in Flow Judgment
Recommend:
- practice identifying friction, states, and recovery paths
- study happy path vs edge cases
- critique real flows, not static screens only

### If weak in System Awareness
Recommend:
- practice cross-surface thinking
- study consistency, information structure, and downstream effects
- analyze how local changes create broader product consequences

### If weak in Trade-off Quality
Recommend:
- practice choosing between imperfect options
- explain downside explicitly
- reason from user value, business value, and reversibility

### If weak in AI Collaboration
Recommend:
- practice reviewing AI output critically
- separate useful scaffolding from risky assumptions
- get stricter about what needs validation

### Rules
- output 3 next-step suggestions max
- order them by leverage
- keep them practical
- do not output a full learning curriculum in v1

---

## Result Tone Rules

Results must feel:
- credible
- direct
- practical
- not flattering by default

Good:
- “You can identify obvious flow issues, but your reasoning still stays too local.”
- “You make decent feature-level choices, but system-level trade-offs are still weak.”

Bad:
- “You are a visionary thinker.”
- “You have amazing product intuition.”
- “Keep shining.”

---

## Edge Case Rules

### If answers are incomplete
- score only completed tasks
- apply a completion penalty if too much is missing
- do not generate falsely confident strengths

### If answers are contradictory
- judgment score should drop
- result should reflect inconsistency

### If answers are extremely short
- do not punish plain language by default
- do reduce judgment score if there is not enough evidence of thinking

### If user always picks “safe” language
- cap stronger levels if commitment is consistently avoided

---

## v1 Implementation Rule

For v1:
- use rule-based scoring
- use rubric mapping
- avoid mandatory LLM judging

LLM review can be added later, but the core result should work without it.

This keeps v1:
- faster to build
- cheaper
- easier to debug
- easier to trust

---

## Final Rule

If there is ever a conflict between:
- making the score feel more impressive
- making the result more flattering
- making the engine more complex
- and keeping the scoring inspectable and believable

choose inspectable and believable.