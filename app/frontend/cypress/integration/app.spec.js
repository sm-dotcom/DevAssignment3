// frontend/cypress/integration/app.spec.js
describe('App Integration Tests', () => {
    it('should load the home page and check the heading', () => {
      cy.visit('http://staging-frontend-url')  // Replace with your staging URL
      cy.contains('Random Quotes').should('be.visible');
    });
  });
  