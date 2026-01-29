---
name: web-designer
description: |
  Web design and frontend development skill for creating and styling websites. Handles brand-matching, responsive layouts, component architecture, and design systems.

  MANDATORY TRIGGERS:
  - "match the branding", "match the style", "update the design"
  - "build a website", "create a landing page"
  - "fix the styling", "improve the UI"
  - "extract colors/fonts from", "replicate this design"
  - Working with CSS, Tailwind, styling, layouts
  - Any visual/aesthetic feedback on web work
---

# Web Designer Skill

## Core Workflow

### 1. Before Writing Any CSS/Styling Code

**STOP. Gather requirements first:**

1. Is there an existing brand to match?
   - If YES → Run brand extraction workflow (see below)
   - If NO → Clarify visual direction with user

2. What's the tech stack?
   - Check existing config files (tailwind.config, package.json)
   - Match existing patterns in codebase

3. What pages/components are needed?
   - List all pages before coding
   - Identify shared components

### 2. Brand Extraction Workflow (When Matching Existing Site)

**Do this BEFORE writing any code:**

1. **Screenshot the existing site** - Use browser tools to capture:
   - Hero/header area
   - Footer
   - A content section with text
   - Any CTAs/buttons

2. **Extract systematically:**
   ```
   Colors:
   - Primary action (CTA buttons): #______
   - Primary text (headlines): #______
   - Body text: #______
   - Background: #______
   - Accent: #______

   Typography:
   - Headline font: ______ (weight: ___, italic: yes/no)
   - Body font: ______
   - Headline sizes: h1=___px, h2=___px, h3=___px

   Spacing:
   - Section padding: ___px
   - Card padding: ___px
   - Component gaps: ___px

   Components:
   - Button border-radius: ___px
   - Card shadow: ______
   - Special treatments: ______
   ```

3. **Confirm with user** before implementing:
   > "I've extracted these brand elements: [list]. Does this look right before I apply them?"

See [references/brand-extraction.md](references/brand-extraction.md) for detailed extraction guide.

### 3. Implementation Order

1. **Config first** - Set up design tokens:
   - tailwind.config.js (colors, fonts, spacing)
   - globals.css (CSS variables, base styles)

2. **Layout second** - Build structure:
   - Header/navigation
   - Footer
   - Page wrapper/container

3. **Components third** - Build reusable pieces:
   - Buttons
   - Cards
   - Section templates

4. **Pages last** - Compose from components

### 4. Quality Checklist

Before delivering styled code:

- [ ] Colors match brand exactly (check hex codes)
- [ ] Typography matches (font family, weights, italic styles)
- [ ] Spacing is consistent (using defined scale)
- [ ] Responsive at mobile/tablet/desktop
- [ ] Hover/focus states defined
- [ ] No hardcoded values (use CSS vars or Tailwind classes)

## Key Principles

### Don't Guess - Extract
Never assume colors/fonts. Always verify against source material.

### Systematic Over Ad-hoc
Define tokens once, reuse everywhere. One source of truth for:
- Colors
- Typography scale
- Spacing scale
- Border radius
- Shadows

### Show Before Implementing
When matching a brand, confirm extracted values before applying them.

## References

- **Brand extraction**: [references/brand-extraction.md](references/brand-extraction.md) - Detailed extraction checklist and process
- **Design fundamentals**: [references/design-fundamentals.md](references/design-fundamentals.md) - Typography, spacing, color theory
- **Code patterns**: [references/code-patterns.md](references/code-patterns.md) - Component structures, Tailwind config, file organization

## Common Mistakes to Avoid

1. **Starting with pages instead of tokens** - Always set up design system first
2. **Eyeballing colors** - Extract exact hex codes
3. **Inconsistent spacing** - Use defined scale, not arbitrary values
4. **Forgetting mobile** - Design mobile-first, enhance for desktop
5. **Skipping confirmation** - Verify brand extraction before implementing
