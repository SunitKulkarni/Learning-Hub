# Troubleshooting

## The page is not loading

Check the `BASE_URL` value in `.env`.

## A selector is failing

- Confirm the label or test ID in the browser
- Prefer role, label, text, or test ID selectors
- Avoid brittle CSS selectors with long chains

## The test is flaky

- Do not use `waitForTimeout`
- Use `toBeVisible`, `toHaveURL`, and `waitFor` with web-first assertions
- Avoid `networkidle` waits when a page uses many third-party assets

## Why this matters

Stable selectors and web-first waits keep the suite runnable in CI and local environments.
