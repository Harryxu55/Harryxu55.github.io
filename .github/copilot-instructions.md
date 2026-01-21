# Copilot Instructions for Ruida Business Consultancy Website

## Project Overview
This is a React single-page application for a business consultancy website, built with Vite, TypeScript, and Tailwind CSS. It features a landing page with sections for Hero, Services, About, and Contact, plus dedicated routes for each section.

## Architecture
- **Routing**: React Router with routes for `/`, `/services`, `/about`, `/contact`
- **Components**: Modular components in `src/components/` (Header, Footer, Hero, etc.)
- **Pages**: Route-level components in `src/pages/` (Home aggregates all sections)
- **Styling**: Tailwind CSS with custom utilities via `cn()` function from `src/lib/utils.ts`
- **Animations**: Framer Motion for entrance effects and hover interactions
- **Context**: AuthContext defined but minimally used

## Key Patterns
- **Component Structure**: PascalCase filenames, default exports, TypeScript FC types
- **Animations**: `motion.div` with `initial/animate/transition` props for entrance effects
- **Layout**: `container mx-auto max-w-6xl` for content width, `px-4` for horizontal padding
- **Navigation**: Sticky header with React Router Links, mobile hamburger menu
- **Color Scheme**: Blue gradient backgrounds (`bg-blue-600`, `from-blue-50 to-indigo-50`)
- **Images**: External URLs from coze.cn for logo and banner assets

## Development Workflow
- **Start Dev**: `pnpm dev` (runs on localhost:3000)
- **Build**: `pnpm build` (outputs to `dist/`, removes old dist first)
- **Preview**: `pnpm preview` (serves build on localhost:8080)
- **Check Build**: `pnpm check-dist` (lists dist contents)

## Conventions
- **Imports**: Path alias `@/` for `src/`, absolute imports preferred
- **Classes**: Use `cn()` for conditional Tailwind classes (clsx + tailwind-merge)
- **Responsive**: Mobile-first with `md:` breakpoints
- **Shadows**: `shadow-xl` for cards, `shadow-md` for subtle effects
- **Hover Effects**: `whileHover` in Framer Motion for interactive elements

## File Organization
- `src/components/`: Reusable UI components
- `src/pages/`: Route components
- `src/hooks/`: Custom hooks (e.g., `useTheme` - defined but unused)
- `src/contexts/`: React contexts
- `src/lib/`: Utilities and helpers

## Deployment
Build generates `dist/` with `index.html` at root. Upload entire `dist/` contents to web server. Includes build.flag marker file.</content>
<parameter name="filePath">/Users/dianmingxu/Downloads/Github/Harryxu55.github.io/.github/copilot-instructions.md