Cypress.on('uncaught:exception', (err, runnable) => {
  // prevent Cypress from failing the test
  return false
})