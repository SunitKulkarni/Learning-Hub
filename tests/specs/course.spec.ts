import { expect, test } from '../../pages/fixtures';

test.describe('LearnHub course flow', () => {
  test('TC-04 course search and category filter show matching results', { tag: ['@regression'] }, async ({
    shop,
    users,
  }) => {
    await test.step('Log into the LMS', async () => {
      await shop.loginPage.open();
      await shop.loginPage.login(users.validUser.email, users.validUser.password);
      await shop.coursesPage.waitForReady();
    });

    await test.step('Search for a matching course', async () => {
      await shop.coursesPage.searchCourse('playwright');
      await expect(shop.coursesPage.courseTitles).toHaveCount(1);
      await expect(shop.page.getByText('Playwright from Zero')).toBeVisible();
    });

    await test.step('Clear the search and filter by Automation', async () => {
      await shop.coursesPage.clearSearch();
      await shop.coursesPage.filterByCategory('Automation');
      await expect(shop.page.getByText('Selenium WebDriver Essentials')).toBeVisible();
      await expect(shop.page.getByText('Playwright from Zero')).toBeVisible();
      await expect(shop.page.getByText('Cypress in Practice')).toBeVisible();
    });
  });

  test('TC-05 enroll in a course opens the course detail page', { tag: ['@smoke'] }, async ({
    shop,
    users,
  }) => {
    await test.step('Log in and open the course list', async () => {
      await shop.loginPage.open();
      await shop.loginPage.login(users.validUser.email, users.validUser.password);
      await shop.coursesPage.waitForReady();
    });

    await test.step('Enroll in the first course', async () => {
      await shop.coursesPage.enrollCourse('c1');
    });

    await test.step('Verify the enrolled course detail page', async () => {
      await expect(shop.page).toHaveURL(/\/apps\/lms\/course\/c1/);
      await expect(shop.courseDetailPage.courseTitle).toBeVisible();
      await expect(shop.courseDetailPage.markCompleteButton).toBeVisible();
    });
  });
});
