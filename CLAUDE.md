# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `bun dev` - Start all applications in development mode using Turborepo
- `bun dev:web` - Start only the web application (Next.js on port 3001)
- `bun dev:server` - Start only the server application
- `bun dev:native` - Start only the native application

### Build & Type Checking
- `bun build` - Build all applications
- `bun check-types` - Run TypeScript type checking across all workspaces

## Architecture

This is a **Turborepo monorepo** using Bun as the package manager, structured with:

- **apps/** - Application packages
  - **web/** - Next.js 15 application with App Router, running on port 3001
    - Uses Turbopack for development (`--turbopack` flag)
    - Styled with Tailwind CSS v4 and shadcn/ui components
    - Theme support via next-themes
    - React Query for data fetching
    - Vercel Analytics integration

- **packages/** - Shared packages (currently empty, but workspace configured)

### Tech Stack
- **Runtime**: Bun 1.2.19
- **Framework**: Next.js 15.5.0 with React 19.1.0
- **Styling**: Tailwind CSS v4 with PostCSS
- **UI Components**: shadcn/ui (Radix UI based)
- **Build System**: Turborepo with task pipeline configuration

### Key Patterns
- The web app uses a centralized `Providers` component wrapping ThemeProvider and Toaster
- Global styles are in `apps/web/src/index.css`
- UI components are located in `apps/web/src/components/ui/`
- The app is configured as a marketing site for "Handlebars" (offline marketing agency)