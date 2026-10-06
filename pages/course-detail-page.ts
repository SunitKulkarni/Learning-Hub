import { BasePage } from './base-page';

export class CourseDetailPage extends BasePage {
  readonly courseTitle = this.page.getByTestId('course-heading');
  readonly backToCourses = this.page.getByText('← All courses');
  readonly markCompleteButton = this.page.getByTestId('mark-complete');

  async open(courseId: string) {
    await this.goto(`/course/${courseId}`);
    await this.waitForLoaded();
    await this.courseTitle.waitFor();
  }
}
