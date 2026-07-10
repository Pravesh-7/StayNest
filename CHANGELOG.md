# Changelog

All notable changes to this project will be documented in this file.

## [1.0.0] - 2026-07-10

### Added
- Created `staynest` branding with custom logos and favicon.
- Added comprehensive `README.md` and `CHANGELOG.md` documentation.
- Integrated `helmet` middleware for enhanced HTTP headers security.
- Global Error Handling middleware on the backend to enforce standard HTTP response structures and proper HTTP status codes.
- Global Axios response interceptors on the frontend for centralized error message formatting and UI toasts.
- Added production configuration files `vercel.json` (for Vercel serverless deployment) and `_redirects` (for Netlify SPA routing).

### Changed
- **Architecture Refactoring:** Consolidated unstructured files into standardized `/client` and `/server` directories for maintainability.
- Restructured Express routes and controllers to seamlessly pipe unhandled exceptions via `next(error)`.
- Replaced hardcoded localhost URLs and port bindings with `.env` based configurations (`VITE_BACKEND_URL`, `process.env.FRONTEND_URL`, etc).
- Configured dynamic CORS using the `.env` `FRONTEND_URL` environment variable.
- Modernized Vite plugins and React ESLint rules to enforce modern standards (e.g. ignoring `react-in-jsx-scope`).

### Removed
- Unnecessary debug `.log()` statements and stack traces that could leak implementation details in production.
- Legacy branding assets referencing NexStay.
- Dead code, unused imports, and redundant hooks from React components.
