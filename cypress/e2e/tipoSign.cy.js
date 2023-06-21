import { efetuarLogin } from "./login.cy";
import { navigeteTypeSign } from "./navigate.cy";
import 'cypress-iframe';


describe("Criar tipo de signatário", () => {
  beforeEach(() => {
    efetuarLogin();
    navigeteTypeSign();
  });

  it("Criando tipo de signatário", () => {
    cy.iframe('#onlyCol').within(() => {
      cy.get(".new-signer-button btn btn-default").click()
    });
  });
});
