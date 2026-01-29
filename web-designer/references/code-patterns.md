# Code Patterns for Web Design

## CSS Custom Properties Setup

Always define design tokens at the root:

```css
:root {
  /* Colors */
  --color-primary: #B91C3C;
  --color-secondary: #1E3A5F;
  --color-accent: #F5B335;
  --color-background: #FAF9F6;
  --color-text: #4B5563;
  --color-text-light: #6B7280;

  /* Typography */
  --font-sans: 'Inter', system-ui, sans-serif;
  --font-serif: 'Playfair Display', Georgia, serif;

  /* Spacing */
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;
  --space-2xl: 3rem;
  --space-3xl: 4rem;

  /* Border radius */
  --radius-sm: 0.25rem;
  --radius-md: 0.375rem;
  --radius-lg: 0.5rem;
  --radius-xl: 1rem;
}
```

## Tailwind Custom Config Pattern

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'brand': {
          primary: '#B91C3C',
          secondary: '#1E3A5F',
          accent: '#F5B335',
        },
        'surface': {
          DEFAULT: '#FAF9F6',
          card: '#FFFFFF',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
    },
  },
}
```

## Component Structure

### Button Component Pattern
```tsx
// Variants: primary, secondary, outline, ghost
// Sizes: sm, md, lg

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const variants = {
  primary: 'bg-brand-primary text-white hover:opacity-90',
  secondary: 'bg-brand-secondary text-white hover:opacity-90',
  outline: 'border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white',
  ghost: 'text-brand-primary hover:bg-brand-primary/10',
};

const sizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};
```

### Card Component Pattern
```tsx
// Consistent card structure
<div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition">
  <div className="text-sm text-brand-primary font-medium">{category}</div>
  <h3 className="font-serif text-xl text-brand-secondary mt-2">{title}</h3>
  <p className="text-gray-600 mt-2">{description}</p>
</div>
```

### Section Component Pattern
```tsx
// Consistent section spacing
<section className="py-16 md:py-24">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="font-serif text-3xl md:text-4xl text-brand-secondary mb-8">
      {title}
    </h2>
    {children}
  </div>
</section>
```

## Layout Patterns

### Responsive Grid
```tsx
// 1 col mobile → 2 col tablet → 3 col desktop
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {items.map(item => <Card key={item.id} {...item} />)}
</div>
```

### Split Layout (Content + Image)
```tsx
<div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
  <div className={imageFirst ? 'order-2 md:order-1' : ''}>
    {/* Image */}
  </div>
  <div className={imageFirst ? 'order-1 md:order-2' : ''}>
    {/* Content */}
  </div>
</div>
```

### Hero Pattern
```tsx
<section className="bg-brand-secondary text-white py-16 md:py-24">
  <div className="max-w-6xl mx-auto px-4">
    <h1 className="font-serif text-4xl md:text-5xl italic mb-6">
      {headline}
    </h1>
    <p className="text-xl text-gray-300 max-w-2xl mb-8">
      {subheadline}
    </p>
    <Button size="lg">{ctaText}</Button>
  </div>
</section>
```

## Navigation Patterns

### Header
```tsx
<header className="bg-surface py-4 sticky top-0 z-50 border-b border-gray-100">
  <nav className="max-w-6xl mx-auto px-4 flex items-center justify-between">
    <Logo />
    <div className="hidden md:flex items-center space-x-8">
      {navLinks.map(link => <NavLink key={link.href} {...link} />)}
      <Button>CTA</Button>
    </div>
    <MobileMenuButton className="md:hidden" />
  </nav>
</header>
```

### Footer
```tsx
<footer className="bg-brand-secondary text-white">
  <div className="max-w-6xl mx-auto px-4 py-12">
    <div className="grid md:grid-cols-4 gap-8">
      {/* Logo + social */}
      {/* Link columns */}
      {/* Newsletter */}
    </div>
    <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm">
      © {year} Company. All rights reserved.
    </div>
  </div>
</footer>
```

## File Organization

```
app/
├── components/
│   ├── ui/           # Reusable: Button, Card, Input
│   ├── layout/       # Header, Footer, Navigation
│   └── sections/     # Hero, Features, CTA
├── styles/
│   └── globals.css   # CSS vars, base styles
├── lib/
│   └── utils.ts      # Helper functions
└── (routes)/
    ├── page.tsx
    ├── about/
    ├── blog/
    └── contact/
```

## Naming Conventions

### CSS Classes (BEM-like with Tailwind)
- Component: `card`, `button`, `nav`
- Modifier: `card-featured`, `button-primary`
- Element: `card-title`, `card-body`

### React Components
- PascalCase: `Button`, `CardGrid`, `HeroSection`
- Descriptive: `PrimaryButton`, `BlogPostCard`

### CSS Variables
- Semantic: `--color-primary`, `--space-lg`
- Not value-based: avoid `--blue-500`, `--margin-24`

## Transition Defaults

```css
/* Standard transition */
transition: all 0.2s ease;

/* Specific properties (better performance) */
transition: background-color 0.2s, transform 0.2s;

/* Hover lift effect */
.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}
```

## Accessibility Checklist

- [ ] Color contrast meets WCAG AA (4.5:1 for text)
- [ ] Focus states visible on all interactive elements
- [ ] Semantic HTML (h1-h6 hierarchy, landmarks)
- [ ] Alt text on images
- [ ] Keyboard navigable
- [ ] Touch targets 44px minimum
