describe("certain author page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/en/authors/1");
  });

  it("should display elements", () => {
    cy.contains("Hey there").should("be.visible");
    cy.get("[data-testid='post']").should("be.visible");
  });

  it("should redirect in certain post, when click on any post", () => {
    cy.get("[data-testid='post']").first().click();
    cy.url().should("include", "blog/");
  });
});
