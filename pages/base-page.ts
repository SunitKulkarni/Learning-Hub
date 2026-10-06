import type { Page } from '@playwright/test';

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

  async waitForLoaded() {
    await this.page.waitForLoadState('domcontentloaded');
  }
}
