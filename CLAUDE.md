# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**morseforidaho** — a Next.js (App Router) project using JavaScript (JSX), Tailwind CSS, and shadcn/ui.

## Tech Stack

- **Framework**: Next.js with App Router (no Pages Router)
- **Language**: JavaScript/JSX (no TypeScript)
- **Styling**: Tailwind CSS only (no inline styles, no CSS files except globals.css)
- **Components**: shadcn/ui — prefer these over custom components
- **Prop Validation**: PropTypes (not TypeScript interfaces)

## Common Commands

```bash
npm run dev          # Start development server
npm run build        # Production build
npm run start        # Start production server
npm run lint         # Run ESLint
```

## Architecture

```
src/
├── app/               # Next.js App Router pages and layouts
├── components/
│   ├── ui/            # shadcn/ui primitives (do not edit directly)
│   └── [feature]/     # Feature-specific components
├── lib/               # Utility functions (cn(), helpers)
├── hooks/             # Custom React hooks
└── constants/         # App-wide constants
```

- **Server Components by default** — only add `'use client'` when event handlers, hooks, or browser APIs are needed.
- Every route segment should have `loading.jsx` and `error.jsx`.
- Use `cn()` from `src/lib/utils` for conditional Tailwind class merging.

## Key Conventions

- **No semicolons** — Prettier handles formatting
- **Single quotes** for JS strings, **double quotes** for JSX attributes
- **Max line length**: 100 characters
- **Imports order** (blank line between groups): React/Next.js → External libs → shadcn/ui → Internal components → Hooks/utils/constants
- **One component per file**, default export at bottom, functional components only
- **Naming**: PascalCase components, camelCase functions/variables, UPPER_SNAKE_CASE constants, kebab-case files/folders
- **Colors**: CSS variables only — never hardcode hex values
- **Images**: Always use Next.js `<Image />`, never `<img>`
- **Links**: Always use Next.js `<Link />` for internal navigation
- **Error logging**: `console.error('[ComponentName]:', error)` — no `console.log` in production
