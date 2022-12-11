import { GreetingPage } from '../support/app.po';

describe('greeter', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    GreetingPage.greetingFormNameInput.type('World');
    GreetingPage.personalGreetingOutput.should('not.exist');
    GreetingPage.greetingFormSubmitButton.click();
    GreetingPage.personalGreetingOutput.should('contain.text', 'Hello, World!');
  });
});
