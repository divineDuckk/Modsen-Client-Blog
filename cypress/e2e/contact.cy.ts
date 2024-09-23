describe("contact page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/en/contact");
  });

  it("should display elements", () => {
    cy.contains("Let’s Start a Conversation").should("be.visible");
  });

  it("should display error messages, when any fields are empty", () => {
    cy.contains("Send Message").click();
    cy.contains("Minimum 3 symbols").should("be.visible");
    cy.contains("Minimum 3 symbols").should("be.visible");
    cy.contains("Please select a query").should("be.visible");
    cy.contains("Email is required").should("be.visible");
  });
  it("should display error message, when email is uncorrect", () => {
    cy.get("input[placeholder='Your Email']").type("qwercom");
    cy.contains("Send Message").click();
    cy.contains("Invalid email format").should("be.visible");
  });

  it("should send message, if all fields are correct", () => {
    cy.intercept("POST", "https://api.emailjs.com/api/v1.0/email/send", {
      statusCode: 200,
      body: { success: true },
    }).as("mockSendEmail");
    cy.get("input[placeholder='Full Name']").type("max");
    cy.get("input[placeholder='Your Email']").type("qwer@gmail.com");
    cy.get("select").select("Techninical issues");
    cy.contains("Techninical issues").should("be.visible");
    cy.get("textarea").type("message");
    cy.contains("Send Message").click();
    cy.wait("@mockSendEmail").then((interception) => {
      expect(interception.request.method).to.eq("POST");
      expect(interception.response?.statusCode).to.eq(200);
      expect(interception.response?.body).to.have.property("success", true);
    });
  });
});
