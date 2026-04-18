# AI-Era Product Judgment Check — Master Plan
> Lock this document before writing assessment tasks or building UI.

---

## One-Sentence Product

AI-Era Product Judgment Check is a short assessment web app that helps people evaluate how strong their product, UX, and design judgment is in the age of AI.

---

## Core Idea

This product does **not** try to measure taste, Figma skill, portfolio polish, or theory memorization.

It measures whether a person can:
- understand the real problem
- judge trade-offs under constraints
- spot weak UX logic behind polished screens
- improve ambiguous briefs
- work with AI critically instead of trusting it blindly

The product exists because AI can now generate first-draft UI, layout variations, and polished-looking screens quickly. That makes low-level production work cheaper. The more durable skill is judgment.

---

## What This Product Is

- A **scenario-based assessment**
- A **judgment test**, not a theory test
- A short web experience that takes **15–20 minutes**
- Useful for designers and also non-designers working in product-building roles
- A temporary public experiment that will be available for roughly **10–15 days**
- An open-source project that will later be published on GitHub for local/self-hosted use

---

## What This Product Is NOT

- Not a quiz site
- Not a UI beauty contest
- Not a Figma skill test
- Not a portfolio reviewer
- Not a multiple-choice theory exam
- Not a recruiting-grade hiring system
- Not a long-term SaaS product in v1
- Not a tool-comparison blog pretending to be an assessment

---

## Primary User

People working in or around digital product building who want to know whether their current skill is still valuable as AI tools improve.

Examples:
- UI/UX designers
- product designers
- PMs
- software engineers
- founders
- product analysts
- product ops / BA-type roles

---

## User Problem

Many people can still produce screens, flows, and polished drafts.

But they do not know:
- which part of their current skill is already weak against AI
- which part is still human-heavy
- what they should improve next
- whether they are still thinking at the level of execution, flow, system, or judgment

At the same time, most existing “design tests” are weak:
- too theoretical
- too easy to game
- too focused on tools
- too disconnected from real product decisions

---

## Product Promise

In 15–20 minutes, the user should get:
1. a rough level of their current judgment capability
2. a practical explanation of where they are weak
3. a realistic view of which work AI already handles well
4. a focused suggestion on what to learn next

---

## Product Philosophy

The value is in the assessment itself.

The homepage, benchmark-tool references, and result framing all exist to support one core loop:

**Enter → take assessment → get result → understand AI pressure → know what to improve next**

If a feature does not improve this loop, it is probably out of scope for v1.

---

## Benchmark Tools for v1

Use these three tools as the comparison layer in results and framing:
- Claude Design
- Google Stitch
- Figma Make

Important:
- These tools are **secondary context**, not the core product
- The website should not become a generic “which AI tool is best” article
- Tool comparisons should be expressed through capability buckets, not brand fanboyism

---

## What the Assessment Measures

The assessment focuses on five capability areas:

1. **Problem Framing**
   - Can the user identify the actual problem instead of reacting to surface symptoms?

2. **Flow Judgment**
   - Can the user reason about steps, friction, state, clarity, and user movement through the experience?

3. **System Awareness**
   - Can the user see broader impact across features, consistency, scale, and cross-surface behavior?

4. **Trade-off Quality**
   - Can the user choose between imperfect options based on user value, business value, constraints, and downside?

5. **AI Collaboration Maturity**
   - Can the user critique AI output, keep what is useful, reject what is shallow, and identify what still needs research or human judgment?

---

## Assessment Format Principles

The assessment must feel real, not academic.

The task mix should come from these categories:
- scenario-based assessment
- forced trade-off
- critique task
- rewrite task
- AI collaboration task

The product should avoid long essay-style answering in v1.
Structured or semi-structured responses are preferred.

---

## Output Model

The final result should map users into one of five levels:

1. **Executor**
2. **Reliable Builder**
3. **Flow Thinker**
4. **System Designer**
5. **Product Judge**

These levels are intentionally role-agnostic.
They should work for both designers and non-designers.

---

## Result Structure

A useful result page should include:
- current level
- strengths
- main gaps
- what AI already handles well
- what still depends heavily on human judgment
- what the user should improve next

The result should feel practical, not flattering.

---

## v1 Scope

### Must Have
- landing page
- short intro page
- timed or clearly scoped assessment flow
- mixed task types
- scoring model
- result page
- AI comparison layer in results
- practical learning suggestions
- optional email capture at the end
- public GitHub repo after the experiment ends

### Nice to Have
- save result locally or by link
- retry assessment
- lightweight shareable result card

### Out of Scope for v1
- full user dashboard
- recruiter mode
- certificate
- leaderboard
- detailed role-based branching
- community profiles
- long-form personalized AI coaching
- large content/blog section
- Adobe / broad creative-suite comparisons
- deep tool-by-tool reviews

---

## Launch Model

This is a short public experiment.

Plan:
- launch publicly
- allow free usage for around 10–15 days
- then take the site down
- leave the project open-source so interested users can run it locally or fork it

This changes product priorities:
- speed matters
- clarity matters
- scope discipline matters
- heavy account systems are less important than assessment quality

---

## Success Metrics for v1

Success does not mean large traffic.

Success means:
- users understand what the test is for
- users finish the assessment
- users find the result believable and useful
- users understand what skill is being compressed by AI
- users leave with a clear next learning direction

Suggested v1 metrics:
- landing → assessment start
- assessment start → completion
- result page read depth
- click rate on learning suggestions
- qualitative feedback: “this result feels accurate/useful”

---

## Build Principles

- Keep scope narrow
- Protect the assessment quality first
- Avoid fake sophistication
- Do not drift into generic content marketing
- Do not let the project become a quiz engine
- Do not let AI comparison overshadow the assessment itself
- Prefer a smaller, sharper v1 over a wide, noisy v1

---

## Language Direction

- Internal project files: **English**
- Public homepage / instructions: **Vietnamese** for v1
- Additional bilingual support can come later if needed

---

## Final Rule

If there is ever a conflict between:
- adding more content
- adding more features
- adding more benchmark-tool coverage
- and protecting the quality of the assessment

choose the assessment quality.

That is the product.