import { BasePage } from './base-page';

export class LoginPage extends BasePage {
  readonly emailInput = this.page.getByLabel('Email');
  readonly passwordInput = this.page.getByLabel('Password');
  readonly loginButton = this.page.getByRole('button', { name: 'Log in' });
  readonly signUpTab = this.page.getByRole('tab', { name: 'Sign up' });
  readonly nameInput = this.page.getByLabel('Name');
  readonly signupPasswordInput = this.page.getByTestId('signup-password');
  readonly confirmPasswordInput = this.page.getByTestId('signup-confirm');
  readonly termsCheckbox = this.page.getByTestId('signup-terms');
  readonly signUpButton = this.page.getByRole('button', { name: 'Create account' });

  async open() {
    await this.goto('/');
    await this.waitForLoaded();
    await this.emailInput.waitFor();
  }

  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async openSignUp() {
    await this.signUpTab.click();
    await this.nameInput.waitFor();
  }

  async signUp(name: string, email: string, password: string, confirmPassword: string) {
    await this.openSignUp();
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.signupPasswordInput.fill(password);
    await this.confirmPasswordInput.fill(confirmPassword);
    await this.termsCheckbox.check();
    await this.signUpButton.click();
  }
}
