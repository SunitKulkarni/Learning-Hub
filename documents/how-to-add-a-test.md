# How to add a test

1. Choose a user flow from the app.
2. Find the relevant page object or create one.
3. Write a short scenario in `tests/specs/`.
4. Add `@smoke` or `@regression` as needed.
5. Run the spec with Playwright.

## Example

```ts
test('TC-99 logs out from the course page', { tag: ['@regression'] }, async ({ shop }) => {
  await shop.loginPage.open();
  await shop.loginPage.login('learner@learnhub.dev', 'Learn@123');
  await expect(shop.page.getByRole('button', { name: 'Log out' })).toBeVisible();
});
```

## Why

This process keeps every test aligned with the POM pattern and the project’s naming guidelines.
