describe("Given the xyz page", () => {
  beforeEach(() => {
    cy.login("your-email-here@site.com", "LongPass123$");
    cy.get('[href="/xyz"]').click();
    cy.findAllByText("Add xyz").click();
  });

  describe("When a valid xyz is entered", () => {
    const xyz = `${Date.now()}.com`;

    beforeEach(() => {
      cy.get('input[name="xyz"]').type(xyz);
    });

    describe("And the form is submitted", () => {
      beforeEach(() => {
        cy.get('[type="submit"]').click();

        cy.waitUntil(() => cy.findAllByText("xyz", { timeout: 20000 }));
      });

      it("Then xyz should be created and the user navigated to the xyz dashboard", () => {
        cy.contains(xyz);
        cy.contains("xyz");
        cy.document().toMatchImageSnapshot();
      });
    });
  });
});
