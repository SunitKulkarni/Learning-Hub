import { expect } from '@playwright/test';
import type { Page } from '@playwright/test';

export class ShopAssertions {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async expectUserLoggedIn(name: string) {
    await expect(this.page.getByRole('heading', { name: `Welcome, ${name}` })).toBeVisible();
  }

  async expectCoursePageVisible() {
    await expect(this.page.getByTestId('course-search')).toBeVisible();
    await expect(this.page.locator("[data-testid='course-title']").first()).toBeVisible();
  }

  async expectLoginErrorVisible() {
    await expect(this.page.getByText(/invalid|wrong|not found|error/i)).toBeVisible();
  }
}
