describe("My First Test", () => {
  it("Does not do much!", () => {
    cy.visit("http://localhost:3000");
    cy.get('[data-cy="make-request-btn"]').click();
    cy.get('[data-cy="cancel-request-btn"]').click();
  });
});
