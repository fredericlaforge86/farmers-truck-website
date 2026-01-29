# Design Fundamentals

## Typography Scale

Use a consistent ratio. Common scales:

### Minor Third (1.2)
```
12px → 14px → 17px → 20px → 24px → 29px → 35px
```

### Major Third (1.25)
```
12px → 15px → 19px → 23px → 29px → 36px → 45px
```

### Perfect Fourth (1.333)
```
12px → 16px → 21px → 28px → 37px → 50px → 67px
```

### Practical Implementation
```css
--text-xs: 0.75rem;   /* 12px */
--text-sm: 0.875rem;  /* 14px */
--text-base: 1rem;    /* 16px */
--text-lg: 1.125rem;  /* 18px */
--text-xl: 1.25rem;   /* 20px */
--text-2xl: 1.5rem;   /* 24px */
--text-3xl: 1.875rem; /* 30px */
--text-4xl: 2.25rem;  /* 36px */
--text-5xl: 3rem;     /* 48px */
```

## Line Height

- **Headings**: 1.1 - 1.3 (tight)
- **Body text**: 1.5 - 1.75 (comfortable reading)
- **UI elements**: 1.25 - 1.5

## Spacing System

Use a base unit (typically 4px or 8px) with multipliers:

### 4px Base System
```css
--space-1: 0.25rem;  /* 4px */
--space-2: 0.5rem;   /* 8px */
--space-3: 0.75rem;  /* 12px */
--space-4: 1rem;     /* 16px */
--space-5: 1.25rem;  /* 20px */
--space-6: 1.5rem;   /* 24px */
--space-8: 2rem;     /* 32px */
--space-10: 2.5rem;  /* 40px */
--space-12: 3rem;    /* 48px */
--space-16: 4rem;    /* 64px */
--space-20: 5rem;    /* 80px */
--space-24: 6rem;    /* 96px */
```

### Application Guidelines
- **Component internal padding**: space-4 to space-6
- **Between related elements**: space-2 to space-4
- **Between sections**: space-12 to space-24
- **Page margins**: space-4 (mobile) to space-8 (desktop)

## Color Theory

### Functional Colors
- **Primary**: Main brand color, CTAs
- **Secondary**: Supporting elements
- **Accent**: Highlights, notifications
- **Neutral**: Text, backgrounds, borders

### Color Relationships
- **Monochromatic**: Variations of one hue
- **Complementary**: Opposite on color wheel
- **Analogous**: Adjacent on color wheel
- **Triadic**: Three equidistant colors

### Accessibility Requirements
- **Normal text**: 4.5:1 contrast ratio minimum
- **Large text (18px+)**: 3:1 contrast ratio minimum
- **UI components**: 3:1 contrast ratio minimum

### Neutral Scale Pattern
```css
--gray-50: #fafafa;
--gray-100: #f4f4f5;
--gray-200: #e4e4e7;
--gray-300: #d4d4d8;
--gray-400: #a1a1aa;
--gray-500: #71717a;
--gray-600: #52525b;
--gray-700: #3f3f46;
--gray-800: #27272a;
--gray-900: #18181b;
```

## Responsive Design

### Breakpoints (mobile-first)
```css
/* Mobile: default */
/* Tablet: 768px+ */
/* Desktop: 1024px+ */
/* Wide: 1280px+ */
```

### Container Max Widths
- **Prose/content**: 65ch (~700px)
- **Standard page**: 1200px - 1280px
- **Wide layouts**: 1400px - 1536px

### Responsive Typography
```css
/* Mobile */
h1 { font-size: 2rem; }    /* 32px */
h2 { font-size: 1.5rem; }  /* 24px */

/* Desktop */
h1 { font-size: 3rem; }    /* 48px */
h2 { font-size: 2rem; }    /* 32px */
```

## Visual Hierarchy

### Size Hierarchy
1. Page title (largest)
2. Section headers
3. Card titles
4. Body text
5. Captions/meta (smallest)

### Weight Hierarchy
- **Bold (700)**: Headlines, emphasis
- **Semibold (600)**: Subheads, labels
- **Medium (500)**: Buttons, navigation
- **Regular (400)**: Body text
- **Light (300)**: Large display text only

### Contrast Hierarchy
- High contrast: Primary content
- Medium contrast: Secondary content
- Low contrast: Tertiary/meta content

## Button Sizing

### Standard Sizes
```css
/* Small */
padding: 0.5rem 1rem;
font-size: 0.875rem;

/* Medium (default) */
padding: 0.75rem 1.5rem;
font-size: 1rem;

/* Large */
padding: 1rem 2rem;
font-size: 1.125rem;
```

### Border Radius Scale
- **Sharp**: 0px (corporate)
- **Subtle**: 4px (professional)
- **Rounded**: 8px (friendly)
- **Pill**: 9999px (playful)

## Grid Systems

### 12-Column Grid
Most flexible for layouts:
- Full width: 12 cols
- Two equal: 6 + 6
- Sidebar: 3 + 9 or 4 + 8
- Three equal: 4 + 4 + 4

### CSS Grid Patterns
```css
/* Auto-fit responsive grid */
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

/* Fixed columns with gap */
grid-template-columns: repeat(3, 1fr);
gap: 2rem;
```
