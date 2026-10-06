# Folder structure

```bash
.
├── .github/
│   └── workflows/
│       └── playwright.yml
├── documents/
├── pages/
│   ├── assertions.ts
│   ├── base-page.ts
│   ├── courses-page.ts
│   ├── fixtures.ts
│   ├── login-page.ts
│   └── shop.ts
├── tests/
│   ├── specs/
│   │   ├── login.spec.ts
│   │   └── signup.spec.ts
│   └── test_data/
│       └── user.json
├── .env
├── .env.example
├── .gitignore
├── .prettierrc
├── eslint.config.mjs
├── package.json
├── playwright.config.ts
├── tsconfig.json
├── README.md
└── .github/
```

## Why these folders exist

- `pages/` contains all page objects.
- `tests/specs/` holds behavior-focused tests.
- `tests/test_data/` keeps user data and sample fixtures.
- `documents/` is a simple guide layer for beginners.
