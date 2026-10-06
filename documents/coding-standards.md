# Coding standards

This project is intentionally simple and beginner-friendly.

## Rules

- One page object per screen
- Keep selectors in the page object file
- Use short, clear method names
- Do not use sleeps or `waitForTimeout`
- Keep comments brief and useful
- Prefer direct, readable code over clever abstractions

## Example

```ts
async login(email: string, password: string) {
  await this.emailInput.fill(email);
  await this.passwordInput.fill(password);
  await this.loginButton.click();
}
```

## Why

Simple code is easier to maintain and helps new learners understand the patterns quickly.
