import { Page } from 'playwright';

/**
 * Page object for managing contact-related actions.
 */
export class ContactPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Fill the 'Email' field.
   * @param email - The email to enter.
   */
  async enterEmailField(email: string): Promise<void> {
    this.logStep(`Enter email: ${email}`);
    const emailField = this.page.getByRole('textbox', { name: 'Email' });
    await emailField.waitFor({ state: 'visible' });
    await emailField.fill(email);
  }

  /**
   * Fill the 'Password' field.
   * @param password - The password to enter.
   */
  async enterPasswordField(password: string): Promise<void> {
    this.logStep('Enter password');
    const passwordField = this.page.getByRole('textbox', { name: 'Password' });
    await passwordField.waitFor({ state: 'visible' });
    await passwordField.fill(password);
  }

  /**
   * Click the 'Login' button.
   */
  async clickLoginButton(): Promise<void> {
    this.logStep('Click Login button');
    const loginButton = this.page.getByText('Login');
    await loginButton.waitFor({ state: 'visible' });
    await loginButton.click();
  }

  /**
   * Click the 'Contacts' link.
   */
  async clickContactsLink(): Promise<void> {
    this.logStep('Click Contacts link');
    const contactsLink = this.page.getByRole('link', { name: '/uf0c0 Contacts' });
    await contactsLink.waitFor({ state: 'visible' });
    await contactsLink.click();
  }

  /**
   * Click the 'Create' link.
   */
  async clickCreateLink(): Promise<void> {
    this.logStep('Click Create link');
    const createLink = this.page.getByRole('link', { name: 'Create' });
    await createLink.waitFor({ state: 'visible' });
    await createLink.click();
  }

  /**
   * Fill the 'First Name' field.
   * @param firstName - The first name to enter.
   */
  async enterFirstNameField(firstName: string): Promise<void> {
    this.logStep(`Enter first name: ${firstName}`);
    const firstNameField = this.page.locator('input[name="first_name"]');
    await firstNameField.waitFor({ state: 'visible' });
    await firstNameField.fill(firstName);
  }

  /**
   * Fill the 'Last Name' field.
   * @param lastName - The last name to enter.
   */
  async enterLastNameField(lastName: string): Promise<void> {
    this.logStep(`Enter last name: ${lastName}`);
    const lastNameField = this.page.locator('input[name="last_name"]');
    await lastNameField.waitFor({ state: 'visible' });
    await lastNameField.fill(lastName);
  }

  /**
   * Fill the 'Company' field.
   * @param company - The company name to enter.
   */
  async enterCompanyField(company: string): Promise<void> {
    this.logStep(`Enter company: ${company}`);
    const companyField = this.page.locator('input[name="middle_name"]');
    await companyField.waitFor({ state: 'visible' });
    await companyField.fill(company);
  }

  /**
   * Fill the 'Email Address' field.
   * @param emailAddress - The email address to enter.
   */
  async enterEmailAddressField(emailAddress: string): Promise<void> {
    this.logStep(`Enter email address: ${emailAddress}`);
    const emailAddressField = this.page.getByRole('textbox', { name: 'Street Address' });
    await emailAddressField.waitFor({ state: 'visible' });
    await emailAddressField.fill(emailAddress);
  }

  /**
   * Fill the 'Phone Number' field.
   * @param phoneNumber - The phone number to enter.
   */
  async enterPhoneNumberField(phoneNumber: string): Promise<void> {
    this.logStep(`Enter phone number: ${phoneNumber}`);
    const phoneNumberField = this.page.getByRole('textbox', { name: 'Number' });
    await phoneNumberField.waitFor({ state: 'visible' });
    await phoneNumberField.fill(phoneNumber);
  }

  /**
   * Click the 'Save' button.
   */
  async clickSaveButton(): Promise<void> {
    this.logStep('Click Save button');
    const saveButton = this.page.getByRole('button', { name: 'Save' });
    await saveButton.waitFor({ state: 'visible' });
    await saveButton.click();
  }

  /**
   * Log the step being executed.
   * @param message - The message to log.
   */
  private logStep(message: string): void {
    console.log(`Step: ${message}`);
  }
}
