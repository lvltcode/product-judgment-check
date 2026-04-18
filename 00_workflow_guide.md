# AI-Era Product Judgment Check — Workflow Guide
> Read this first. Defines how the planning files work together, how to build without drifting, and how to keep the project sharp.

---

## What You Are Building

AI-Era Product Judgment Check is a short assessment web app.

It helps people understand:
- their current product / UX / design judgment level
- where their thinking is weak
- which parts of their work are already heavily AI-assisted
- what they should improve next

This is **not** a quiz site, a design portfolio evaluator, or a generic AI tool comparison blog.

---

## Build Philosophy

This project should be built with one rule in mind:

**Protect the assessment.**

The product is valuable only if:
- the tasks feel real
- the scoring feels believable
- the result feels useful
- the AI comparison stays secondary

Everything else is support.

---

## Core Product Loop

```text
User lands on site
  → understands purpose
  → starts assessment
  → completes realistic tasks
  → gets result
  → understands AI pressure
  → sees what to improve next

If a feature does not improve this loop, it is probably out of scope for v1.

The Files in This Kit
File	Purpose	When to use it
00_workflow_guide.md	This file. Explains how all files work together.	Read first
01_master_plan.md	Product definition, scope lock, what this is / is not, success logic	Re-read before any major scope decision
02_assessment_plan.md	Source of truth for task structure, scoring, capability model, output levels	Reference before writing tasks or result logic
03_user_journey.md	User flow from landing to result to exit actions	Reference before building screens or flow
04_design_guidelines.md	UI, tone, layout, interaction, trust and clarity rules	Reference before building UI
05_tasks.md	Build order and work groups	Use continuously during implementation
06_project_brief.md	Living state document for handoff and anti-drift	Update after every major decision or build session
File Order

Always work in this order:

00_workflow_guide.md
01_master_plan.md
02_assessment_plan.md
03_user_journey.md
04_design_guidelines.md
05_tasks.md
06_project_brief.md

Do not jump into UI or code before the first four files are locked.

What to Lock First

Before any implementation work begins, these things must be clear:

what the product is
what the product is not
what the 8 assessment tasks are
how the scoring works
what the user flow is
what the result page must contain
what is out of scope

If these are not clear, building should stop.

How to Use External References

This project may learn from:

system prompts
coaching frameworks
design process documents
other assessment products
other AI-builder project kits

But the rule is:

Extract principles. Do not transplant identities, roles, or structures blindly.

Good things to learn from:

flow discipline
scope discipline
result usefulness
tone clarity
one-step-at-a-time interaction
good friction vs bad friction
closing with a concrete next step

Do not copy directly:

another product’s identity
another product’s coaching style
another product’s emotional model
another product’s ritual or wording if it distorts this product
Scope Protection Rules

These rules are mandatory.

1. Assessment first

Do not let landing-page content, AI-tool comparison, or branding become larger than the assessment.

2. No fake depth

Do not make the product feel “smart” by adding theory-heavy quiz content, jargon, or inflated result language.

3. No drift into content site

Do not turn this into a broad blog, media site, or AI tool review site.

4. No heavy account system in v1

Do not add login-first, dashboard-first, or profile-heavy flows unless clearly re-approved.

5. No role branching in v1 unless necessary

The level system is intentionally role-agnostic.

6. No long essay dependence

The assessment should reveal judgment without requiring long-form writing.

7. No overbuilding

This is a short public experiment, not a full platform.

Working Style

Use short, deliberate build steps.

Good working style
lock one file at a time
lock one decision at a time
build one group at a time
verify before moving on
update 06_project_brief.md often
Bad working style
changing multiple files loosely without rechecking scope
adding clever ideas mid-build
widening benchmark coverage too early
polishing UI before the assessment is credible
treating the product like a content marketing site
Planning Discipline

Before writing tasks, ask:

does this reveal judgment?
does this feel like real product work?
does this avoid theory trivia?
does this avoid visual-taste-only judging?
can this be answered in a semi-structured way?

Before writing result copy, ask:

is this specific?
is this believable?
is this useful?
is this too flattering?
does it point to a next step?

Before adding a feature, ask:

does this improve completion?
does this improve scoring truthfulness?
does this improve result usefulness?
or is it just extra?
Implementation Discipline

When implementation starts:

keep the page count minimal
keep the task flow simple
keep each task on its own screen
keep progress visible
keep scoring inspectable
keep the result page clear and direct

Prefer:

static or structured task content
rule-based scoring for v1
optional email capture after result
lightweight public-launch setup

Avoid:

fragile complexity
auth-first friction
over-personalization
excessive dynamic systems
Handoff Rule

After every major planning or implementation step, update 06_project_brief.md.

The project brief should always reflect:

what is locked
what is still undecided
what the next step is
what risks are active
what must not drift

When opening a new conversation, paste 06_project_brief.md first.

How to Work With Codex / Claude

Use the files to reduce drift.

For planning work

Start from:

01_master_plan.md
02_assessment_plan.md
03_user_journey.md
06_project_brief.md
For UI work

Also include:

04_design_guidelines.md
For execution sequencing

Use:

05_tasks.md
Important

Do not ask the model to “be creative” in ways that widen scope.
Ask it to:

follow the locked product
work inside the defined task group
avoid changing unrelated parts
keep the assessment as the core
Current Build Priority

At this stage, the priority order is:

lock files
define the 8 tasks
define scoring and result logic
define implementation structure
build

Do not reverse that order.

v1 Success Definition

v1 is successful if:

the assessment is finished in one sitting
the result feels credible
the AI comparison adds useful context
users understand what to improve next
the product stays sharper than a quiz and lighter than a course

Traffic is secondary.
Trust and usefulness are primary.

Final Rule

If there is ever a conflict between:

making it broader
making it prettier
making it louder
making it feel smarter
and making the assessment more truthful

choose truthfulness.

That is the product.