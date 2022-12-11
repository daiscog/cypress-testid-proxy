// A simple function to convert a string
// from camelCase to kebab-case
const toKebabCase = (str: string) =>
  str.replace(/([a-z])([A-Z]+)/g, '$1-$2').toLowerCase();

// A Proxy that uses the above function to convert an accessed
// property name from camelCase to kebab-case, then call cy.get
// using the kebab-case string in a data-testid selector, and
// return the result:
export const PO_PROXY = new Proxy(
  {},
  {
    get(_, name) {
      const testId = toKebabCase(name.toString());
      return cy.getByTestId(testId);
    },
  }
);

// A generic type that represents the camelCase version
// of the given kebab-case string literal type
export type KebabToCamelCase<S extends string> =
  S extends `${infer T}-${infer U}`
    ? `${T}${Capitalize<KebabToCamelCase<U>>}`
    : S;

// A generic PageObject type that uses the above to
// define an object containing camelCase properties
// for the kebab-case string literals given as a
// union for the TestIds type parameter
export type PageObject<TestIds extends string> = {
  [testId in KebabToCamelCase<TestIds>]: Cypress.Chainable<JQuery<HTMLElement>>;
};
