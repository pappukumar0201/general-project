import { test, expect } from '@playwright/test';
import { ContactPage } from '../pages/contact.page';

test.describe('Contact Creation Process', () => {
  let contactPage: ContactPage;

  test.beforeEach(async ({ page }) => {
    contactPage = new ContactPage(page);
    await page.goto('https://example.com/login');
    });

  test('should create a new contact with invalid email', async ({ page }) => {
    await contactPage.enterEmailField('ramakrishnatest@yopmail.com');
    await contactPage.enterPasswordField('Ramakrishna#456');
    await contactPage.clickLoginButton();
    await contactPage.clickContactsLink();
    await contactPage.clickCreateLink();
    await contactPage.enterFirstNameField('John');
    await contactPage.selectCompanyCombobox();
    await contactPage.enterLastNameField('TestCompany');
    await contactPage.enterNumberField('3105551234');
    await contactPage.enterMiddleNameField('Manager');
    await contactPage.enterStreetAddressField('invalidemail.com');
    await contactPage.clickSaveButton();

    // Add assertions to verify the error message for invalid email
    const errorMessage = await page.locator('text=Invalid email address');
    await expect(errorMessage).toBeVisible();
  });
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
