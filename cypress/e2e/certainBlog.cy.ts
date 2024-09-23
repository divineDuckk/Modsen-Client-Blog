describe("certain blog page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/en/blog/1");
  });

  it("should display elements", () => {
    cy.contains("What to read next").should("be.visible");
  });

  it("should redirect in certain author, when click on author field", () => {
    cy.get("[data-testid='authorLink']").click();
    cy.url().should("include", "authors/");
  });
  it("should redirect in certain blog, when click on recommed post", () => {
    cy.get("[data-testid='recommendPost']").first().click();
    cy.url().should("include", "blog/");
  });
});
