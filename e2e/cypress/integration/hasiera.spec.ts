describe("Hasiera", () => {
  it("hasiera orria erakusten du", () => {
    cy.visit("/");

    cy.findByRole("heading", { name: /laba gara/i });
  });

  it("Twitter-era bideratzen du", () => {
    cy.intercept("https://www.instagram.com/labasarea/", {
      statusCode: 200,
      body: "<h1>Kanpoko web orria</h1>",
    });

    cy.visit("/");
    cy.findByRole("link", { name: /laba twitterren/i }).click();

    cy.url().should("eq", "https://twitter.com/labasarea/");
  });

  it("Instagram-era bideratzen du", () => {
    cy.intercept("https://www.instagram.com/labasarea/", {
      statusCode: 200,
      body: "<h1>Kanpoko web orria</h1>",
    });

    cy.visit("/");
    cy.findByRole("link", { name: /laba instagramen/i }).click();

    cy.url().should("eq", "https://www.instagram.com/labasarea/");
  });

  it("kafetegira bideratzen du", () => {
    cy.visit("/");
    cy.findByRole("link", { name: /dastatu laba/i }).click();

    cy.location("pathname").should("include", "/kafetegia");
  });
});
