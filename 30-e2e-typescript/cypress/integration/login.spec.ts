describe("Given the login page", () => {
  describe("When the user logs in with a correct user name and password", () => {
    beforeEach(() => {
      cy.dataMock();
      cy.login();
    });

    it("Then the tests should pass", () => {
      cy.contains("Welcome back");

      cy.waitUntil(() => cy.findAllByText("xyz"));
      cy.waitUntil(() => cy.findAllByText("123"));

      cy.document().toMatchImageSnapshot(); // Documentation: https://www.npmjs.com/package/cypress-plugin-snapshots
    });
  });
});
