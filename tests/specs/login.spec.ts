import { expect, test } from '../../pages/fixtures';

test.describe('LearnHub login', () => {
  test('TC-01 valid login shows the course list', { tag: ['@smoke'] }, async ({
    shop,
    users,
    shopAssertions,
  }) => {
    await test.step('Open the LearnHub home page', async () => {
      await shop.loginPage.open();
    });

    await test.step('Log in with the known learner account', async () => {
      await shop.loginPage.login(users.validUser.email, users.validUser.password);
    });

    await test.step('Verify the learner sees the course page', async () => {
      await shop.coursesPage.waitForReady();
      await expect(shop.page).toHaveURL(/\/apps\/lms\/courses/);
      await expect(shop.page.getByRole('button', { name: 'Log out' })).toBeVisible();
      await shopAssertions.expectUserLoggedIn('Demo');
      await shopAssertions.expectCoursePageVisible();
    });
  });

  for (const invalidUser of [
    { email: 'invalid@example.com', password: 'wrongpass' },
    { email: 'learner@learnhub.dev', password: 'wrongpass' },
  ]) {
    test(`TC-02 invalid login blocks ${invalidUser.email}`, { tag: ['@regression'] }, async ({
      shop,
    }) => {
      await test.step('Open the login screen', async () => {
        await shop.loginPage.open();
      });

      await test.step('Submit invalid credentials', async () => {
        await shop.loginPage.login(invalidUser.email, invalidUser.password);
      });

      await test.step('Confirm the app keeps the user on the login form', async () => {
        await expect(shop.page).not.toHaveURL(/\/apps\/lms\/courses/);
        await expect(shop.loginPage.emailInput).toBeVisible();
        await expect(shop.loginPage.passwordInput).toBeVisible();
        await expect(shop.page.getByRole('button', { name: 'Log out' })).toHaveCount(0);
      });
    });
  }
});
