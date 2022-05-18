describe("Kafetegia", () => {
  it("kafetegiko orria erakusten du", () => {
    cy.visit("/kafetegia");

    cy.findByRole("heading", { name: /dastatu laba/i });
  });
});
