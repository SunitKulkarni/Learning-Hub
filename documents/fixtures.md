# Fixtures

The custom fixtures in `pages/fixtures.ts` provide shared setup for the suite.

## Included fixtures

- `shop` — page object collection
- `shopAssertions` — reusable assertion helpers
- `users` — loaded from `user.json` and resolved with `.env`
- `loggedInShop` — logs the learner in before the test begins

## Example

```ts
export const test = base.extend<{
  shop: Shop;
  users: UsersFixture;
}>({
  shop: async ({ page }, use) => {
    await use(new Shop(page));
  },
});
```

## Why fixtures matter

They prevent repeated setup code in every test and keep the suite consistent.
