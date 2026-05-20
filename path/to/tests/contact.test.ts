import { test, expect } from '@playwright/test';
import { ContactPage } from '../pages/contact.page';

test.describe('Contact Creation Process', () => {
  let contactPage: ContactPage;

  test.beforeEach(async ({ page }) => {
    contactPage = new ContactPage(page);
    await page.goto('https://example.com/login');
  });

  test('should login and create a new contact', async ({ page }) => {
    await contactPage.enterEmailField('ramakrishnatest@yopmail.com');
    await contactPage.enterPasswordField('Ramakrishna#456');
    await contactPage.clickLoginButton();
    await contactPage.clickContactsLink();
    await contactPage.clickCreateLink();
    await contactPage.enterFirstNameField('John');
    await contactPage.enterLastNameField('Doe');
    await contactPage.enterCompanyField('Test Company');
    await contactPage.enterEmailAddressField('validemail.com');
    await contactPage.enterPhoneNumberField('3105551234');
    await contactPage.clickSaveButton();

    // Add assertions to verify the contact creation
    const successMessage = await page.locator('text=Contact created successfully');
    await expect(successMessage).toBeVisible();
  });
});
