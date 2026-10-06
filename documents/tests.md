# Tests

Tests live under `tests/specs/` and are named with a case ID such as `TC-01`.

## Structure

```ts
test('TC-01 valid login shows the course list', { tag: ['@smoke'] }, async ({ shop }) => {
  await shop.loginPage.open();
  await shop.loginPage.login('learner@learnhub.dev', 'Learn@123');
  await expect(shop.page).toHaveURL(/\/apps\/lms\/courses/);
});
```

## Tags

- `@smoke` — quick confidence checks
- `@regression` — broader validation and negative scenarios

## Why this helps

The test names are explicit, which makes the Playwright report much easier to read.
