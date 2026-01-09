# Next.js Production Boilerplate

A production-ready Next.js boilerplate with TypeScript, ESLint, Prettier, Husky, and shadcn/ui.

## Features

- ⚡ Next.js 16 with App Router
- 🔤 TypeScript
- 🎨 Tailwind CSS
- ✅ ESLint configured with best practices
- 💎 Prettier for code formatting
- 🐕 Husky for Git hooks
- 📝 lint-staged for pre-commit checks
- 📦 shadcn/ui components
- 🚀 Production-ready build configuration
- 🔍 SEO optimized with metadata

## Setup

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) to view the application.

## Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint
- `npm run prepare` - Prepare Husky hooks

## Git Hooks

This project uses Husky to enforce code quality:

- Pre-commit hook runs lint-staged to check staged files
- Commit message hook validates conventional commits with commitlint

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
- ESLint
- Prettier
- Husky
- lint-staged
- @commitlint

## Folder Structure

```
src/
├── app/              # Next.js App Router pages
├── components/       # Reusable components
│   └── ui/          # shadcn/ui components
├── lib/             # Utility functions
├── hooks/           # Custom React hooks
├── types/           # Type definitions
└── styles/          # Global styles
```

## License

MIT