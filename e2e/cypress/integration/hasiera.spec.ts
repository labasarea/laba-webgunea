describe("Hasiera", () => {
  it("hasiera orria erakusten du", () => {
    visitHasiera();

    cy.findByRole("heading", { name: /laba gara/i });
  });

  it("Twitter-era bideratzen du", () => {
    interceptExternalPageLoad("https://twitter.com/labasarea/");

    visitHasiera();
    cy.findByRole("link", { name: /laba twitterren/i }).click();

    cy.url().should("eq", "https://twitter.com/labasarea/");
  });

  it("Instagram-era bideratzen du", () => {
    interceptExternalPageLoad("https://www.instagram.com/labasarea/");

    visitHasiera();
    cy.findByRole("link", { name: /laba instagramen/i }).click();

    cy.url().should("eq", "https://www.instagram.com/labasarea/");
  });

  it("kafetegira bideratzen du", () => {
    visitHasiera();
    cy.findByRole("link", { name: /dastatu laba/i }).click();

    cy.location("pathname").should("include", "/kafetegia");
  });
});

function interceptExternalPageLoad(url: string) {
  cy.intercept(url, {
    statusCode: 200,
    body: "<h1>Kanpoko web orria</h1>",
  });
}

function visitHasiera() {
  cy.visit("/");
}
