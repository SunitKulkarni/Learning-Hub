import { BasePage } from './base-page';

export class CoursesPage extends BasePage {
  readonly welcomeMessage = this.page.getByText('Welcome, Demo');
  readonly coursePrompt = this.page.getByText('Pick a course to start learning');
  readonly searchInput = this.page.getByTestId('course-search');
  readonly courseCount = this.page.getByTestId('course-count');
  readonly courseTitles = this.page.locator("[data-testid='course-title']");

  async open() {
    await this.goto('/courses');
    await this.waitForLoaded();
    await this.coursePrompt.waitFor();
  }

  async waitForReady() {
    await this.coursePrompt.waitFor();
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
