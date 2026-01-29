# Farmers' Truck Website

A Next.js website with a markdown-based blog system for Farmers' Truck mobile market solutions.

## Tech Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **Blog:** Markdown files with gray-matter
- **Hosting:** Netlify (static export)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Adding Blog Posts

1. Create a new `.md` file in `content/blog/`
2. Add frontmatter with required fields:

```md
---
title: "Your Post Title"
date: "2026-01-29"
excerpt: "A short description of your post"
category: "Category Name"
pillar: "pillar-slug"
---

Your content here...
```

3. Commit and push to trigger auto-deploy

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout with header/footer
│   ├── page.tsx        # Homepage
│   └── blog/
│       ├── page.tsx    # Blog listing
│       └── [slug]/     # Individual blog posts
├── content/
│   └── blog/           # Markdown blog posts
├── lib/
│   └── blog.ts         # Blog utility functions
└── public/             # Static assets
```

## Deployment

Pushes to `main` branch automatically deploy to Netlify.
