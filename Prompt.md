You are a senior QA automation engineer. Create a new Playwright + TypeScript test automation project
named "<Learning Hub>" using the Page Object Model (POM). Keep the code simple and beginner-friendly,
with short methods, clear names and brief comments.
## Application under test
Base URL: (https://www.practiceqaautomation.com/apps/lms) (read from .env, never hard-coded)
Flows to cover: Refer - test_cases\LearnHub-test-cases.csv file to cover test cases.
for User deatils refer - user.json file
## Folder structure
<ProjectName>/
|-- .github/workflows/playwright.yml
|-- documents/ (.md guides, see Documentation section)
|-- pages/
| |-- base-page.ts
| |-- login-page.ts, products-page.ts, cart-page.ts, checkout-page.ts, ...
| `-- fixtures.ts (custom test + fixtures)
|-- tests/
| |-- specs/ (login.spec.ts, cart.spec.ts, checkout.spec.ts, ...)
| `-- test_data/
| `-- user.json
|-- .env
|-- .env.example
|-- .gitignore
|-- eslint.config.mjs, .prettierrc
|-- package.json
|-- playwright.config.ts
|-- tsconfig.json
`-- README.md
## Requirements
1. Page objects
- Each page is one class. A BasePage holds shared helpers (goto, waitForLoaded).
- Define locators once as readonly properties, using standard Playwright locators only: getByRole,
getByLabel, getByPlaceholder, getByText, getByTestId. No XPath or long CSS chains.
2. Assertions
- Use web-first assertions (toBeVisible, toHaveText, toHaveURL). Never use waitForTimeout or sleeps.
- Keep the assertions in test only. E.g- Verify after login User name displayed in login.spec.ts file 
3. Fixtures (pages/fixtures.ts)
- Extend Playwright's `test` with: `shop` (all page objects), `shopAssertions` (all assertion
classes), `users` (loaded from user.json), and `loggedInShop` (logs in before the test).
- Export `test` and `expect` so specs import only from fixtures.
4. Test data and config
- tests/test_data/user.json holds users (username and password). Read passwords from .env where
possible, and keep only placeholders in user.json.
- .env holds BASE_URL and credentials. .env.example has the same keys with dummy values. Load them
with dotenv.
- .gitignore must include: node_modules, .env, test-results, playwright-report, allure-results,
blob-report, .features-gen, *.log
5. Specs
- One spec file per feature, using test.describe and test.step for readable reports.
- Test titles contain an ID, e.g. 'TC-01 valid login shows the product list'.
- Tag tests with { tag: ['@smoke'] } or '@regression'.
- Use a data array + for...of for data-driven cases (invalid logins, invalid coupons).
- Cover both positive and negative scenarios.
6. playwright.config.ts
- baseURL from .env, testDir 'tests/specs', fullyParallel, retries 2 on CI, workers 1 on CI.
- trace 'on-first-retry', screenshot 'only-on-failure', video 'retain-on-failure'.
- Reporters: html, list, and allure-playwright.
- Projects: chromium (add firefox and webkit but keep them easy to disable).
7. package.json scripts
- "test", "test:smoke" (--grep @smoke), "test:regression", "test:headed", "test:ui", "report","report:allure", "lint", "format".
8. CI/CD (.github/workflows/playwright.yml)
- Trigger on push and pull_request to main, plus manual workflow_dispatch.
- Steps: checkout, setup-node 20 with npm cache, npm ci, npx playwright install --with-deps, run
tests, upload playwright-report and allure-results as artifacts (if: always()).
- Read BASE_URL and credentials from GitHub Secrets. Do not commit secrets.
9. README.md (decent UI)
- Centered title and short tagline, badges (Playwright, TypeScript, Node, CI status, License), a
table of contents.
- Sections: About, Tech stack (table), Features, Folder structure (tree), Prerequisites, Setup,
Configuration (.env), Running tests (command table), Reports, CI/CD flow (mermaid diagram), How to
add a new page and test, Best practices, Troubleshooting, Contributing.
- Use emojis sparingly, clean tables and collapsible <details> sections.
10. documents/ folder (beginner-friendly .md files)
- README.md (index of all docs), project-overview.md, folder-structure.md, pages.md (each page object
and its methods), assertions.md, fixtures.md, test-data-and-env.md, tests.md (spec list and tags),
configuration-and-ci.md, coding-standards.md (naming, locators, no sleeps), how-to-add-a-test.md,
troubleshooting.md.
- Explain each file with a small code example and a short "why".
## Rules
- Strict TypeScript, no `any`. Small files, clear names, short comments.
- Only one place per concern: locators in pages, expects in assertions, data in test_data, secrets in
.env.
- Work in steps: (1) scaffold and config, (2) pages + assertions + fixtures, (3) specs, (4) CI, (5)
README and documents.
- After each step run `npx playwright test` and fix failures
- Use Simple Code and easy understand. 