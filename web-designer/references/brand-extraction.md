# Brand Extraction Guide

## Extraction Checklist

When analyzing an existing site to match its brand:

### 1. Colors (in priority order)
- **Primary action**: CTA buttons, key links
- **Primary text**: Headlines, important labels
- **Secondary text**: Body copy, descriptions
- **Background**: Page bg, card bg, section bg
- **Accents**: Highlights, badges, borders

Extract as hex codes. Note opacity variations.

### 2. Typography
- **Headline font**: Family, weight, style (italic?)
- **Body font**: Family, weight, line-height
- **Font scale**: Note actual px/rem sizes at each level (h1→body)
- **Special treatments**: Letter-spacing, transforms, decorative styles

### 3. Spacing System
- **Section padding**: Vertical spacing between major sections
- **Component gaps**: Space between cards, list items
- **Inner padding**: Padding within cards, buttons
- **Common multiples**: Usually 4px, 8px, 16px, 24px, 32px, 48px, 64px

### 4. Component Patterns
- **Buttons**: Border-radius, padding, hover states
- **Cards**: Shadow, border, corner radius
- **Navigation**: Layout, active states, mobile behavior
- **Footer**: Column structure, background treatment

### 5. Visual Style
- **Photography**: Style, treatment, placeholder approach
- **Icons**: Style (line, filled, custom), consistent set
- **Illustrations**: Style if present
- **Decorative elements**: Shapes, patterns, dividers

## Color Extraction Process

1. Screenshot hero section → identify primary brand color
2. Screenshot CTA button → confirm action color
3. Screenshot footer → identify secondary/dark palette
4. Screenshot text → identify heading vs body colors
5. Note any gradient or accent colors

## Typography Extraction Process

1. Inspect headline in browser DevTools → font-family, font-weight
2. Check if italic/oblique is used for headlines
3. Inspect body text → font-family, font-size, line-height
4. Check Google Fonts or common alternatives
5. Note any special treatments (letter-spacing, text-transform)

## Common Brand Patterns

### Warm/Friendly Brands
- Rounded corners (8-16px)
- Soft shadows
- Warm accent colors
- Generous whitespace

### Corporate/Professional
- Subtle or no rounded corners
- Minimal shadows
- Navy, gray, blue palette
- Structured grid layouts

### Modern/Tech
- Large bold typography
- High contrast
- Geometric elements
- Minimal decoration

### Organic/Natural
- Earth tones
- Organic shapes
- Hand-drawn elements
- Textured backgrounds
