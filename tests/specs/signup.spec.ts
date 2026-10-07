import { expect, test } from '../../pages/fixtures';

test.describe('LearnHub sign up', () => {
  test('TC-03 valid sign up creates a new learner', { tag: ['@smoke'] }, async ({
    shop,
    users,
  }) => {
    const uniqueEmail = `learner+${Date.now()}@learnhub.dev`;

    await test.step('Open the sign-up form', async () => {
      await shop.loginPage.open();
      await shop.loginPage.openSignUp();
    });

    await test.step('Register a new learner', async () => {
      await shop.loginPage.signUp('New Learner', uniqueEmail, users.newUser.password, users.newUser.password);
    });

    await test.step('Verify the learner is signed in', async () => {
      await shop.page.waitForURL(/\/apps\/lms\/courses/);
      await expect(shop.page).toHaveURL(/\/apps\/lms\/courses/);
      await expect(shop.page.getByRole('button', { name: 'Log out' })).toBeVisible();
    });
  });
});
