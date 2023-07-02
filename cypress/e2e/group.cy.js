import "cypress-iframe";
import { efetuarLogin } from "./login.cy";
import { navigeteGroup } from "./navigate.cy";

var nameCode = "GrupoTeste32";
var nameGroup = "Grupo Teste23";

describe("Criação de Grupo", () => {
  beforeEach(() => {
    efetuarLogin();
    navigeteGroup();
  });

  it("Criar grupo", () => {
    cy.CreateItem();
    cy.CreateGroup(nameCode, nameGroup);

    cy.iframe("#onlyCol").within(() => {
      cy.get("span[title=" + nameCode + "]").should(
        "have.text",
        " " + nameCode + " "
      );
    });
  });

  it.only("Editar grupo", () => {
    cy.CreateItem();
    cy.CreateGroup('nameCodesdfasdaaa', 'nameGrosdfupsa');

    cy.iframe("#onlyCol").within(() => {
    //   cy.get("span[title=" + nameCode + "]").should(
    //     "have.text",
    //     " " + nameCode + " "
    //   );
      cy.get('table')
      .find('tr:visible')
      .last()
      .within(() => {
        // Realize as ações dentro do último elemento tr visível
        cy.get('td:eq(1) > img').click();
      });    });

  });

  it("Deletar grupo", () => {
    cy.iframe("#onlyCol").within(() => {});
  });

  it("Criar grupos padrões", () => {
    cy.iframe("#onlyCol").within(() => {});
  });
});
