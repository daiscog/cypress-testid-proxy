export type KebabToCamelCase<S extends string> =
  S extends `${infer T}-${infer U}`
    ? `${T}${Capitalize<KebabToCamelCase<U>>}`
    : S;

export type PageObject<TestIds extends string> = {
  [testId in KebabToCamelCase<TestIds>]: Cypress.Chainable<JQuery<HTMLElement>>;
};

const toKebabCase = (str: string) =>
  str.replace(/([a-z])([A-Z]+)/g, '$1-$2').toLowerCase();

export const PO_PROXY = new Proxy(
  {},
  {
    get(_, name) {
      const testId = toKebabCase(name.toString());
      return cy.getByTestId(testId);
    },
  }
);
