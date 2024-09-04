# Capture Digital Shop

Capture Digital Shop aims to cater to businesses of all sizes by providing an efficient, customizable, and scalable solution for online retail. It is designed to offer a seamless shopping experience for both customers and administrators.

## Tech Stacks 💻

- [Turborepo](https://turbo.build/repo/docs)
- [Next.js](https://nextjs.org/)
- [TailwindCss](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)
- [TanStack Query](https://tanstack.com/query/latest)
- [TanStack Table](https://tanstack.com/table/latest)
- [React Hook Form](https://react-hook-form.com/)
- [Redux ToolKit](https://redux-toolkit.js.org/)

## Getting Start

```bash
pnpm dev:user         # launch user repository
pnpm dev:admin        # launch admin repository
pnpm dev              # run both repositories parallel
pnpm lint             # check both repositories by linting
pnpm type-check       # verify both repositorues for type safety
```

## Project Structure

```shell
.
├── .github                       # GitHub-specific configurations, such as workflows for CI/CD
├── .husky                        # Git hooks for linting, testing, or other pre-commit/pre-push scripts
├── .vscode                       # Contains vscode config such as settings, extensions, and launch configurations
├── apps                          # Directory houses multiple applications
│   ├── admin                     # Admin directory
│   │   ├── src
│   │   │   ├── app               # Next.js routes structure
│   │   │   ├── assets            # Static assets like images or fonts
│   │   │   ├── components        # Reusable UI components for the admin interface
│   │   │   ├── hooks             # Custom React hooks
│   │   │   ├── lib               # Utility functions or libraries
│   │   │   ├── services          # Api services
│   │   │   ├── store             # State management (Redux)
│   │   │   ├── types             # Types files
│   │   │   ├── middleware.ts     # Handling request or authentication
│   │   ├── .env.sample           # Example environment variable configuration
│   │   ├── jest.config.ts        # Configuration for the Jest testing framework
│   │   ├── next.config.js        # Configuration for the Next.js framework
│   │   ├── .tailwind.config.ts   # TailwindCSS configuration for admin
│   │   ├── .tsconfig.json        # TypeScript configuration specific to admin app
│   ├── user                      # User directory (same with admin folder structure)
├── packages                      # Directory shared configurations and reusable code
│   ├── eslint-config             # Shared ESLint configuration
│   │   ├── library.js            # ESLint configuration files for library
│   │   ├── next.js               # ESLint configuration files for next.js
│   │   ├── react.js              # ESLint configuration files for react.js
│   ├── tailwind-config           # Shared tailwindcss configurations
│   │   ├── tailwind.config.ts    # Contain TailwindCSS used across multiple projects
│   ├── typescript-config         # Shared TypeScript configurations
│   │   ├── base.json             # TypeScript configurations for base
│   │   ├── nextjs.json           # TypeScript configurations for next.js
│   │   ├── react-library.json    # TypeScript configurations for react-library
│   ├── ui                        # Shared ui components across multiple apps
│   │   ├── src
│   │   │   ├── components        # Reusable components
│   │   │   ├── icons             # SVG icons or other vector assets
│   │   │   ├── libs              # Utility libraries for the UI package
│   │   │   ├── style.css         # Global or shared styles
│   │   ├── components.json       # Manage shadcn ui components
│   │   ├── tailwind.config.ts    # Specific TailwindCSS configuration for the UI package
├── .prettierrc                   # Configuration file for Prettier, which standardizes code formatting
├── .commitlint.config.js         # Config for CommitLint to enforce commit message rules
├── tsconfig.json                 # Ts Config at the root level, serving as a base for individual projects
├── turbo.json                    # Configuration for Turborepo, defining cache strategies, build pipelines, and more
└── end
```
