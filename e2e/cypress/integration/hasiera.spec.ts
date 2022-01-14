describe("Hasiera", () => {
  it("hasiera orria erakusten du", () => {
    cy.visit("/");

    cy.findByText(/laba gara/i);
  });
});
