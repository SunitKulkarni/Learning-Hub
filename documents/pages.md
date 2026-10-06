# Pages

Each page object lives in its own file and contains only the selectors and actions for that screen.

## `base-page.ts`

```ts
export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(path = '/') {
    const baseUrl = process.env.BASE_URL ?? 'https://www.practiceqaautomation.com/apps/lms';
    const normalizedBase = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
    const target = path === '/' ? normalizedBase : new URL(path.replace(/^\/+/, ''), `${normalizedBase}/`).toString();
    await this.page.goto(target);
  }
}
```

## Why this pattern helps

A page object keeps the browser steps close to the UI they belong to, which makes a failing test easier to debug.
