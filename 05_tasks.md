# AI-Era Product Judgment Check — Tasks
> One task group = one focused build session. Do not start the next group until the current one is clear enough to verify.

---

## Group 0 — Planning Lock

**Goal:** lock scope before UI or schema work begins.

### Tasks
- [ ] Finalize `01_master_plan.md`
- [ ] Finalize `02_assessment_plan.md`
- [ ] Finalize `03_user_journey.md`
- [ ] Finalize `06_project_brief.md`
- [ ] Confirm v1 benchmark tools:
  - [ ] Claude Design
  - [ ] Google Stitch
  - [ ] Figma Make
- [ ] Confirm Adobe excluded from v1
- [ ] Confirm no forced login before assessment
- [ ] Confirm assessment is the core product, not AI tool comparison

### QA
- [ ] Scope is clear enough to explain in 3–5 sentences
- [ ] No major contradiction across the 4 planning files
- [ ] v1 is still narrow
- [ ] No hidden “nice idea” has silently entered scope

---

## Group 1 — Assessment Blueprint

**Goal:** define the actual 8 tasks before building pages.

### Tasks
- [ ] Create task inventory for all 8 tasks
- [ ] Assign task type to each task
- [ ] Assign primary capability area(s) to each task
- [ ] Define expected answer format for each task
- [ ] Define objective-ish scoring keys
- [ ] Define judgment rubric for each task
- [ ] Confirm total assessment fits within 15–20 minutes

### Required v1 mix
- [ ] Scenario-Based Assessment × 2
- [ ] Forced Trade-off × 2
- [ ] Critique Task × 2
- [ ] Rewrite Task × 1
- [ ] AI Collaboration Task × 1

### QA
- [ ] All 8 tasks feel like real product work
- [ ] No task depends on theory memorization
- [ ] No task is mainly about visual taste
- [ ] No task requires long essay writing
- [ ] Task mix feels balanced
- [ ] Time estimate still holds

---

## Group 2 — Scoring and Result Logic

**Goal:** define how answers become believable results.

### Tasks
- [ ] Lock capability weights
- [ ] Lock task weights
- [ ] Define score-to-level mapping
- [ ] Define strength rules
- [ ] Define gap rules
- [ ] Define AI pressure layer logic
- [ ] Define learning-direction logic
- [ ] Define result structure

### QA
- [ ] Same answer quality would score consistently
- [ ] Strong plain-language answers are not punished
- [ ] Weak polished wording does not score too high
- [ ] Result levels feel believable
- [ ] Result outputs are useful, not generic

---

## Group 3 — Information Architecture and Page List

**Goal:** define the minimum pages and routes for v1.

### Tasks
- [ ] Define page list
- [ ] Define route structure
- [ ] Define assessment progress model
- [ ] Define result generation path
- [ ] Define optional email capture position
- [ ] Define GitHub / open-source ending position

### Likely v1 pages
- [ ] Landing
- [ ] Intro
- [ ] Assessment task page
- [ ] Result
- [ ] Optional feedback / email / exit page

### QA
- [ ] User can start fast
- [ ] No unnecessary onboarding steps
- [ ] No account/dashboard complexity added
- [ ] Flow still matches `03_user_journey.md`

---

## Group 4 — Content Drafting

**Goal:** draft actual assessment content.

### Tasks
- [ ] Write draft copy for 2 scenario tasks
- [ ] Write draft copy for 2 forced trade-off tasks
- [ ] Write draft copy for 2 critique tasks
- [ ] Write draft copy for 1 rewrite task
- [ ] Write draft copy for 1 AI collaboration task
- [ ] Draft result copy templates for all 5 levels
- [ ] Draft AI pressure copy templates
- [ ] Draft learning direction templates

### QA
- [ ] Prompts are compact
- [ ] Prompts are realistic
- [ ] No academic tone
- [ ] No jargon-heavy wording
- [ ] Result copy is direct and useful

---

## Group 5 — Critique Assets and AI Cases

**Goal:** prepare the special content needed for critique and AI-collaboration tasks.

### Tasks
- [ ] Decide how critique screens will be created
- [ ] Prepare 2 polished-but-flawed critique cases
- [ ] Prepare 1 AI prompt + output pair for AI collaboration task
- [ ] Define issue lists for critique tasks
- [ ] Define severity options
- [ ] Define keep / remove / refine / research / distrust buckets

### QA
- [ ] Critique cases look plausible at first glance
- [ ] Critique cases contain deeper logic issues
- [ ] AI case is realistic, not obviously stupid
- [ ] Users are forced to show judgment, not just react emotionally

---

## Group 6 — Technical Scope Lock

**Goal:** decide the minimum implementation approach.

### Tasks
- [ ] Decide stack
- [ ] Decide whether answers are local-only or stored
- [ ] Decide whether results are stored
- [ ] Decide whether email capture is DB-backed
- [ ] Decide whether retry exists in v1
- [ ] Decide whether assessment content is static JSON or DB-managed

### QA
- [ ] Tech choices support speed
- [ ] No unnecessary auth complexity
- [ ] No unnecessary admin system
- [ ] Build path still supports short 10–15 day public experiment

---

## Group 7 — UI Build

**Goal:** build the minimum usable front-end.

### Tasks
- [ ] Build landing page
- [ ] Build intro page
- [ ] Build task screen template
- [ ] Build progress indicator
- [ ] Build answer components for all task types
- [ ] Build result page
- [ ] Build optional exit / email / feedback block

### QA
- [ ] Start flow is obvious
- [ ] One task per screen
- [ ] Primary action is always clear
- [ ] No unnecessary clutter
- [ ] Mobile layout works
- [ ] The experience feels sharper than a quiz

---

## Group 8 — Scoring Integration

**Goal:** connect user answers to the result system.

### Tasks
- [ ] Implement task scoring
- [ ] Implement capability scoring
- [ ] Implement level mapping
- [ ] Implement strength selection
- [ ] Implement gap selection
- [ ] Implement AI pressure layer output
- [ ] Implement learning-direction output

### QA
- [ ] Results reflect answer quality
- [ ] Output feels believable
- [ ] No broken states on incomplete or edge-case answers
- [ ] No obviously inflated praise

---

## Group 9 — Final QA and Launch Prep

**Goal:** verify the product before public release.

### Tasks
- [ ] Run full assessment end to end
- [ ] Check total completion time
- [ ] Check result quality across weak / medium / strong answer patterns
- [ ] Review homepage copy in Vietnamese
- [ ] Review mobile responsiveness
- [ ] Add GitHub / open-source note
- [ ] Add temporary public experiment note
- [ ] Prepare takedown / end-of-experiment wording

### QA
- [ ] Full flow works in one sitting
- [ ] Result feels useful
- [ ] Time is still within 15–20 minutes
- [ ] No screen feels abandoned or broken
- [ ] AI comparison stays secondary
- [ ] Assessment stays the core product

---

## Out of Scope Tasks

Do **not** pull these into v1 unless explicitly re-approved.

- [ ] login before assessment
- [ ] user dashboard
- [ ] recruiter mode
- [ ] certificate
- [ ] leaderboard
- [ ] role-based branching
- [ ] deep analytics
- [ ] blog/content expansion
- [ ] Adobe comparison layer
- [ ] long-form AI coaching
- [ ] full CMS/admin panel

---

## Final Rule

If a build task makes the product:
- noisier
- broader
- more quiz-like
- more account-heavy
- or less truthful

it is probably the wrong task for v1.