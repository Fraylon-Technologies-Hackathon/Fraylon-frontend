# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Testing

This project uses Jest and React Testing Library for unit and integration testing.

### Running tests

Run all tests:
    npm test

Run tests with coverage report:
    npm test -- --coverage

Run tests in watch mode:
    npm test -- --watch

Run a single test file:
    npm test -- ExplorePage

### Coverage

The project targets 60% or above line coverage across all components.

| Component         | Tests location                          |
|-------------------|-----------------------------------------|
| ThemesSection.jsx | src/__tests__/ThemesSection.test.jsx    |
| RegisterPage.jsx  | src/__tests__/RegisterPage.test.jsx     |
| ExplorePage.jsx   | src/__tests__/ExplorePage.test.jsx      |

After running npm test -- --coverage, open coverage/lcov-report/index.html in your browser for a detailed line-by-line report.

### Test types included

- Unit tests: individual component rendering, props, and UI state
- Integration tests: full multi-step form flows, navigation between pages, and form validation sequences