describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("should render page successfully", () => {
    cy.get("h1").should("contain", "Termometresch");
  });

  it("should be able to select Fahrenheit and Kelvin", () => {
    const selectField = cy.get('select[data-testid="temperature-select"]');
    selectField.should("have.value", "celsius");
    selectField.select("Fahrenheit").should("have.value", "fahrenheit");
    selectField.select("Kelvin").should("have.value", "kelvin");
  });

  it("should be able to enter a value", () => {
    cy.get('input[data-testid="temperature"]')
      .type("100")
      .should("have.value", "100");
  });

  it("should successfully submit form and return correct results", () => {
    cy.get('input[data-testid="temperature"]').type("100");
    cy.get('button[type="submit"]').click();
    cy.get('[data-testid="celsius-result"]').should("contain", "100");
    cy.get('[data-testid="fahrenheit-result"]').should("contain", "212");
    cy.get('[data-testid="kelvin-result"]').should("contain", "373.15");
  });
});
