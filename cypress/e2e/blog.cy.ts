describe("blog page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/en/blog");
  });

  it("should display elements", () => {
    cy.contains("All posts").should("be.visible");
  });
  it("should redirect in certain blog, when click read more", () => {
    cy.contains("a", "Read More").click();
    cy.url().should("include", "blog/");
  });
  it("should redirect in certain blog, when click on certain post", () => {
    cy.get("[data-testid='post']").first().click();
    cy.url().should("include", "blog/");
  });
  it("should display new posts when click next, if exist", () => {
    cy.contains("< Prev").should("be.disabled");
    cy.contains("Next >").click();
    cy.contains("< Prev").should("not.be.disabled");
  });
});
