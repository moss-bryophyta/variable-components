# Variable Components

A minimal Next.js example demonstrating GT's variable components: `<Var>`, `<Num>`, `<Currency>`, and `<DateTime>` inside `<T>`.

**[Live Demo →](https://variable-components.generaltranslation.dev)**

Shows a user profile card with locale-aware formatting for names, numbers, currencies, and dates.

Built with [gt-next](https://generaltranslation.com/docs) and [Next.js](https://nextjs.org).

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and switch locales to see formatting change.

## What It Demonstrates

- **`<Var>`** — Wraps dynamic content (user name) that should not be translated
- **`<Num>`** — Locale-aware number formatting (follower counts, post counts)
- **`<Currency>`** — Locale-aware currency display (account balance)
- **`<DateTime>`** — Locale-aware date formatting (member since date)
- **`<T>`** — Wraps translatable content containing variable components

## Learn More

- [gt-next Variables Guide](https://generaltranslation.com/docs/next/guides/variables)
- [gt-next API Reference](https://generaltranslation.com/docs/next/api/components/var)
