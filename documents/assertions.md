# Assertions

Assertions belong in the test layer, not inside page objects. This makes the page objects simple and the tests easier to read.

## Example

```ts
await expect(shop.page).toHaveURL(/\/apps\/lms\/courses/);
await expect(shop.page.getByRole('button', { name: 'Log out' })).toBeVisible();
```

## Why this is important

The app is checked in a web-first way, which waits for the UI to become ready before failing. This reduces flaky tests.
