import type { Page } from '@playwright/test';
import { CourseDetailPage } from './course-detail-page';
import { CoursesPage } from './courses-page';
import { LoginPage } from './login-page';

export class Shop {
  readonly loginPage: LoginPage;
  readonly coursesPage: CoursesPage;
  readonly courseDetailPage: CourseDetailPage;

  constructor(public readonly page: Page) {
    this.loginPage = new LoginPage(page);
    this.coursesPage = new CoursesPage(page);
    this.courseDetailPage = new CourseDetailPage(page);
  }
}
