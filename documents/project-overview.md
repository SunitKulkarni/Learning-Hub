# Project overview

The LearnHub app is a small LMS demo where learners log in, sign up, and complete courses. This automation project uses Playwright + TypeScript to practice the app in a real browser with a simple and readable Page Object Model.

## Main goals

- Keep the code easy to understand for beginners
- Separate page logic from test logic
- Reuse common setup through fixtures
- Keep environment values in `.env` instead of hard-coded strings

## Example flow

```ts
await shop.loginPage.open();
await shop.loginPage.login(email, password);
await shop.coursesPage.waitForReady();
await expect(shop.page).toHaveURL(/\/apps\/lms\/courses/);
```

## Why it matters

This keeps the tests short and expressive while still following real QA automation patterns.
