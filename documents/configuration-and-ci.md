# Configuration and CI/CD

The project uses `playwright.config.ts` to centralize browser settings, project definitions, and reporting options.

## Example config

```ts
export default defineConfig({
  testDir: './tests/specs',
  fullyParallel: true,
  reporter: [['list'], ['html'], ['allure-playwright']],
  use: {
    baseURL: process.env.BASE_URL ?? 'https://www.practiceqaautomation.com/apps/lms',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
});
```

## Why this matters

All key Playwright settings are centralized, so the project is easy to run locally and in GitHub Actions.
