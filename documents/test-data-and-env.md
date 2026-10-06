# Test data and environment

The project reads app values from `.env` and keeps only placeholders in `tests/test_data/user.json`.

## `.env.example`

```env
BASE_URL=https://www.practiceqaautomation.com/apps/lms
LEARNER_EMAIL=learner@learnhub.dev
LEARNER_PASSWORD=Learn@123
NEW_USER_EMAIL=learner+new@learnhub.dev
NEW_USER_PASSWORD=StrongPass@123
```

## `user.json`

```json
{
  "validUser": {
    "email": "learner@learnhub.dev",
    "password": "ENV_LEARNER_PASSWORD"
  }
}
```

## Why

This keeps secrets out of source files and makes the test data reusable in local and CI runs.
