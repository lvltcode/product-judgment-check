# AI-Era Product Judgment Check — Design Guidelines
> Reference this before building any page or UI component. Rarely change this file. Only update if the product direction changes.

---

## Design Principle

Sharp, calm, and credible.

This product is not entertainment, not a playful quiz, and not a flashy marketing site.

The UI should make the user feel:
- this is serious enough to trust
- simple enough to finish
- clear enough to think well

The assessment itself should carry the weight.
The interface should stay out of the way.

---

## Core UX Rules

1. **One task per screen**
   - Never show multiple assessment tasks on one screen

2. **Primary action must always be obvious**
   - The user should never wonder how to continue

3. **Progress must always be visible**
   - The user should know where they are and how much is left

4. **Reading load must stay low**
   - Keep prompts compact
   - Break content into clear chunks
   - Avoid long walls of text

5. **No fake sophistication**
   - No decorative complexity
   - No “AI futuristic” visual gimmicks
   - No unnecessary motion

6. **The product must feel sharper than a quiz**
   - More serious than a generic quiz site
   - Lighter than a course or enterprise tool

---

## Tone of the Interface

### Overall tone
- direct
- practical
- calm
- low-fluff
- not sterile
- not overly friendly
- not hype-heavy

### Good UI copy examples
- “Choose the better direction.”
- “Pick the most important issue.”
- “Rewrite this brief into something workable.”
- “What would you keep from this AI output?”

### Bad UI copy examples
- “Let’s discover your design superpower!”
- “You’re about to go on an exciting journey.”
- “Crush this challenge.”

---

## Visual Direction

The product should look:
- modern
- clean
- text-first
- professional
- lightweight

It should not look:
- playful
- gamified
- startup-bro polished
- futuristic for the sake of it
- like a marketing landing page with assessment bolted on

---

## Layout Rules

- Mobile-first
- Max content width: **720px**
- Main page padding: **16px** mobile, **24px** desktop
- Vertical rhythm must be consistent
- Each task screen should feel focused and breathable
- Do not let answer controls feel cramped

### Section spacing
- 24px between major sections
- 12–16px between smaller content blocks

### Card usage
Use cards when they improve clarity.
Do not wrap every element in a card by default.

---

## Typography

Use a neutral, highly legible sans serif.

### Recommended
- **Inter**
- fallback: system sans-serif

### Type scale
- Page title: 28px / 700
- Section title: 20px / 600
- Task title: 18px / 600
- Body: 15–16px / 400
- Label: 13–14px / 500
- Small helper text: 12–13px / 400

### Rules
- Prioritize readability over personality
- Avoid tiny text
- Avoid over-styled headings
- Use weight and spacing before using color for emphasis

---

## Color Direction

Use a restrained palette.

### Primary goals of color
- guide attention
- signal action
- support clarity
- communicate severity when needed

### Avoid
- rainbow systems
- neon AI aesthetics
- overly soft pastel startup look
- high-saturation decorative gradients

### Suggested base palette
- **Primary text:** near-black
- **Secondary text:** muted gray
- **Background:** off-white or very light neutral
- **Primary action color:** strong but calm
- **Warning/error color:** clear but not aggressive
- **Success/confirmation color:** subtle

### Color usage rule
Color should support hierarchy, not replace it.

---

## Component Principles

### Buttons
- Large enough to tap comfortably
- Primary button always obvious
- Secondary button visually quieter
- Avoid more than 2 competing button styles on one screen

### Progress indicator
- Must always be visible during assessment
- Should show current task and total
- Should feel informative, not gamified

### Inputs
- Simple
- roomy
- easy to scan
- easy to edit

### Multi-select / ranking controls
- Must be easy to understand on first glance
- Must make selection state obvious
- Must not feel like form-builder junk UI

### Short rationale fields
- Clearly optional or clearly required
- Show concise placeholder guidance
- Keep box sizes modest
- Do not visually imply essay writing

### Structured rewrite fields
- Separate fields clearly
- Use labels that feel practical, not academic

---

## Task Screen Pattern

Every assessment task screen should contain:

1. **Task meta**
   - task type
   - progress indicator

2. **Prompt block**
   - short context
   - main question
   - optional note if needed

3. **Answer block**
   - structured controls
   - rationale field if needed

4. **Action block**
   - next / continue
   - previous only if it does not create confusion

### Task screen rules
- keep everything within a single focused vertical flow
- do not bury the action below excessive explanation
- do not make the user hunt for what matters

---

## Critique Task UI Rules

Critique tasks are important and easy to mess up.

### Rules
- the critique asset must look plausible at first glance
- the issue list must be clear, not bloated
- severity ranking should be easy to use
- the biggest problem should be identifiable quickly

### Do not
- overload with too many issue options
- make the screen look broken on purpose
- create obviously bad examples that remove the need for judgment

---

## Rewrite Task UI Rules

The rewrite task must not feel like homework.

### Required fields
- problem statement
- success criteria
- primary user
- constraints
- proposed flow

### Rules
- use structured fields
- keep helper copy short
- clarify what “good enough” looks like
- avoid giant blank text areas

---

## AI Collaboration Task UI Rules

This task should feel grounded, not theatrical.

### Show clearly
- original prompt
- AI output
- response buckets:
  - keep
  - remove
  - refine
  - research more
  - do not trust yet

### Rules
- visually separate prompt and output
- do not overwhelm with too much generated content
- the user must be able to compare calmly

---

## Result Page Design Rules

The result page is one of the most important surfaces.

It must feel:
- credible
- useful
- specific
- slightly uncomfortable in a productive way

### Must include
- level
- strengths
- gaps
- capability breakdown
- AI pressure layer
- what to improve next

### Must avoid
- fake praise
- empty positivity
- vague personality-test language
- overdesigned charts that imply false precision

### Result style
Use simple visual hierarchy.
Do not make it feel like a horoscope or a gamified badge system.

---

## Accessibility Rules

- Contrast must be strong
- Never rely on color alone
- Tap targets minimum **44px**
- Inputs and controls must be keyboard accessible
- Focus states must be visible
- Task completion should not depend on hover behavior
- Use plain language where possible

---

## Motion Rules

Use little to no motion.

Allowed:
- subtle transitions
- progress feedback
- lightweight state changes

Avoid:
- celebratory animations
- animated backgrounds
- distracting transitions
- “AI magic” effects

---

## Empty State Rules

No screen should feel abandoned.

### Examples
- “Couldn’t load this task. Try again.”
- “Your result is not ready yet. Please retry.”
- “This experiment is currently closed.”

Do not leave users in dead ends or blank states.

---

## Homepage Direction

The homepage may be written in **Vietnamese** for v1.

### Homepage rules
- explain the product quickly
- do not overload with industry commentary
- do not try to explain all of AI in one page
- make the CTA obvious
- keep the visual tone aligned with the assessment product

The homepage should invite trust, not hype.

---

## What This UI Must Never Become

- a generic quiz template
- a glossy design gallery
- a futuristic AI promo page
- an overbuilt SaaS dashboard
- a content-heavy blog homepage

---

## Final Rule

If a design decision makes the product:
- louder
- more decorative
- more playful
- more generic
- or less trustworthy

it is probably the wrong decision.