describe("Smoke Test", () => {
  it("makes sure the wellcome message comes up", async () => {
    cy.visit("http://localhost:5173").contains("Hello, world")
  })
})
