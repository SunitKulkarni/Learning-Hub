import { BasePage } from './base-page';

export class CoursesPage extends BasePage {
  readonly welcomeMessage = this.page.getByText('Welcome, Demo');
  readonly searchInput = this.page.getByTestId('course-search');
  readonly courseCount = this.page.getByTestId('course-count');
  readonly courseTitles = this.page.locator("[data-testid='course-title']");

  async open() {
    await this.goto('/courses');
    await this.waitForLoaded();
    await this.waitForReady();
  }

  async waitForReady() {
    await this.page.waitForURL(/\/apps\/lms\/courses/);
    await this.searchInput.waitFor({ state: 'visible' });
    await this.courseTitles.first().waitFor({ state: 'visible' });
  }

  async searchCourse(term: string) {
    await this.searchInput.fill(term);
  }

  async clearSearch() {
    await this.searchInput.fill('');
  }

  async filterByCategory(category: 'Automation' | 'API' | 'Data' | 'Process') {
    await this.page.getByRole('button', { name: category }).click();
  }

  async enrollCourse(courseId: string) {
    await this.page.getByTestId(`enroll-${courseId}`).click();
  }
}
