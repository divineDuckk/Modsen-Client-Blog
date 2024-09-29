describe("certain category page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/en/categories/Business");
  });

  it("should display elements", () => {
    cy.contains("Business").should("be.visible");
    cy.get("[data-testid='post']").should("be.visible");
  });

  it("should redirect in certain post, when click on certain post", () => {
    cy.get("[data-testid='post']").first().click();
    cy.url().should("include", "blog/");
  });

  it("should switch category page, when click on another category", () => {
    cy.contains("Startup").click();
    cy.url().should("include", "Startup");
  });
  it("should switch category page, when click on another category", () => {
    cy.contains("Startup").click();
    cy.url().should("include", "Startup");
  });
  it("should input change value, when click on any tag", () => {
    cy.contains("Life").click();
    cy.get("input").should("have.value", "Life");
  });
  it("should display dropdown , written text is exist in vocab", () => {
    cy.get("input").first().type("li");
    cy.get("[data-testid='hint']").should("be.visible");
  });
  it("should display set to input new value , when click on hint element", () => {
    cy.get("input").first().type("li");
    cy.get("[data-testid='hint']").should("be.visible");
    cy.contains("ul", "Life").first().click();
    cy.get("input").should("have.value", "Life");
  });
  it("should display error message , when input tag is uncorrect", () => {
    cy.get("input").first().type("liqwd");
    cy.contains("button", "Search").click();
    cy.contains("Invalid tag").should("be.visible");
  });
});
