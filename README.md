# CypressTestidProxy

An example of using a Proxy to simplify defining page objects in Cypress.

Install dependencies and start Cypress in watch mode with:

```shell
npm ci
npm run e2e
```

See the reusable util types under [./apps/greeter-e2e/src/support/po-utils.ts](./apps/greeter-e2e/src/support/po-utils.ts),
and an example usage in [./apps/greeter-e2e/src/support/app.po.ts](./apps/greeter-e2e/src/support/app.po.ts) and
[./apps/greeter-e2e/src/e2e/app.cy.ts](./apps/greeter-e2e/src/e2e/app.cy.ts).
