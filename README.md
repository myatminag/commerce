It aims to cater to businesses of all sizes by providing an efficient, customizable, and scalable solution for online retail. It is designed to offer a seamless shopping experience for both customers and administrators.

## Tech Stacks

- [Next.js](https://nextjs.org/)
- [Nest.js] (https://docs.nestjs.com/)
- [Prisma] (https://www.prisma.io/)
- [Turborepo](https://turbo.build/repo/docs)
- [TailwindCss](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)
- [TanStack Query](https://tanstack.com/query/latest)
- [TanStack Table](https://tanstack.com/table/latest)
- [React Hook Form](https://react-hook-form.com/)
- [Zustand] (https://zustand.docs.pmnd.rs/getting-started/introduction)

## Getting Start

```bash
pnpm dev:user         # start a developmenet server for user repo
pnpm build:user       # create an optimized production build for user repo
pnpm start:user       # start a production server for user repo

pnpm dev:admin        # start a developmenet server for admin repo
pnpm build:admin      # create an optimized production build for admin repo
pnpm start:admin      # start a production server for admin repo

pnpm dev:api          # start in watch mode for api repo
pnpm start:api        # start a standard mode for api repo

pnpm dev              # start parallel development server for all repo
pnpm lint             # lint all repositories
pnpm type-check       # verify all repositories for type safety
```

## Project Structure

```shell
.
├── .github                       # GitHub-specific configurations, such as workflows for CI/CD
├── .husky                        # Git hooks for linting, testing, or other pre-commit/pre-push scripts
├── .vscode                       # Vscode config such as settings, extensions, and launch configurations
├── apps                          # Directory houses multiple applications
│   ├── admin                     # Admin Portal
│   ├── api                       # Backend Services
│   ├── user                      # End User Website
├── packages                      # Directory shared configurations and reusable code
│   ├── eslint-config             # Shared ESLint configuration
│   ├── tailwind-config           # Shared tailwindcss configurations
│   ├── typescript-config         # Shared TypeScript configurations
│   ├── ui                        # Shared ui components across multiple apps
├── .prettierrc                   # Configuration file for Prettier, which standardizes code formatting
├── .commitlint.config.js         # Config for CommitLint to enforce commit message rules
├── tsconfig.json                 # Ts Config at the root level, serving as a base for individual projects
├── turbo.json                    # Configuration for Turborepo, defining cache strategies, build pipelines
└── end
```
