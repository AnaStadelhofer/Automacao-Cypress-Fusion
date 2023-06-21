export function efetuarLogin() {
  cy.visit(
    "https://features-p146-configure-signer-type.qa.neomind.com.br/fusion/"
  );
  cy.fixture("dataUser.json").then((data) => {
    cy.get("#user").type(data.user);
    cy.get("#pass").type(data.pass);
  });
  cy.get("#btnLogin").click();
}
