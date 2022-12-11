import { PageObject, PO_PROXY } from './po-utils';

/* <= add a second / to the start of this line to toggle code blocks below

// The repetitious way:
export const GreetingPage = {
  get greetingFormNameInput() {
    return cy.getByTestId('greeting-form-name-input');
  },
  get greetingFormSubmitButton() {
    return cy.getByTestId('greeting-form-submit-button');
  },
  get personalGreetingOutput() {
    return cy.getByTestId('personal-greeting-output');
  },
} as const;

/*/

// The succinct way:
export type GreetingPageTestIds =
  | 'greeting-form-name-input'
  | 'greeting-form-submit-button'
  | 'personal-greeting-output';

export const GreetingPage = PO_PROXY as PageObject<GreetingPageTestIds>;

//*/
