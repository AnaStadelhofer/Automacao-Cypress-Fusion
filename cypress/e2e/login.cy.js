export function efetuarLogin() {
  cy.visit(
    "https://features-p145-batch-electronic-sign.qa.neomind.com.br/fusion/"
  );
  cy.fixture("dataUser.json").then((data) => {
    cy.get("#user").type(data.user);
    cy.get("#pass").type(data.pass);
  });
  cy.get("#btnLogin").click();
}
