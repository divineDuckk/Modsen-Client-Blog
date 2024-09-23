describe("home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/en");
  });

  it("should display elements", () => {
    cy.contains("Modsen Client Blog").should("be.visible");
  });
  it("should change language", () => {
    cy.get('[data-testid="langSwitcher"]').click();
    cy.url().should("include", "en");
  });
  it("should move to blog in header", () => {
    cy.get("[data-testid='Blog-Test']").click();
    cy.url().should("include", "blog");
  });
  it("should move to about us in header", () => {
    cy.get("[data-testid='About us-Test']").click();
    cy.url().should("include", "about");
  });
  it("should move to contact us in header", () => {
    cy.get("[data-testid='Contact us-Test']").click();
    cy.wait(1000);
    cy.url().should("include", "contact");
  });
  it("should open popup in header", () => {
    cy.contains("Video about us").click();
    cy.get("iframe").should("be.visible");
  });
  it("read more button should redirect to certain blog", () => {
    cy.contains("Read More").click();
    cy.url().should("include", "blog");
  });
  it("view all button should redirect to blog", () => {
    cy.scrollTo("0%", "15%");
    cy.contains("View all").click();
    cy.url().should("include", "blog");
  });
  it("should redirect to certaion blog, when click in all posts", () => {
    cy.scrollTo("0%", "15%");
    cy.get("[data-testid='miniPost']").first().click();
    cy.url().should("include", "blog");
  });
  it("should redirect to about us in about us block", () => {
    cy.scrollTo("0%", "30%");
    cy.get("[data-testid='aboutUsLink']").click();
    cy.url().should("include", "about");
  });
  it("should redirect to business category", () => {
    cy.scrollTo("0%", "35%");
    cy.get("[data-testid='BusinessCategoryTest']").click();
    cy.url().should("include", "Business");
  });
  it("should redirect to about us in why we started block", () => {
    cy.scrollTo("0%", "45%");
    cy.contains("Discover our story").click();
    cy.url().should("include", "about");
  });
  it("should redirect to author", () => {
    cy.scrollTo("0%", "55%");
    cy.get("[data-testid='authorCardTest']").first().click();
    cy.url().should("include", "author");
  });
  it("should carousel work", () => {
    cy.scrollTo("0%", "70%");
    cy.get("[data-testid='carouselPrev']").should("be.disabled");
    cy.get("[data-testid='carouselNext']").click();
    cy.get("[data-testid='carouselPrev']").should("not.be.disabled");
  });
  it("should join now redirect to contact", () => {
    cy.scrollTo("0%", "85%");
    cy.contains("Join Now").click();
    cy.url().should("include", "contact");
  });
  it("should redirect to private policy", () => {
    cy.scrollTo("bottom");
    cy.contains("Privacy Policy").click();
    cy.url().should("include", "privacy");
  });
});
