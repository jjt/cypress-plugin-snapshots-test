context("Test", () => {
  it("does more than one snapshot", () => {
    cy.visit("localhost:8080").then(() => cy.document().toMatchImageSnapshot());
  });
});
