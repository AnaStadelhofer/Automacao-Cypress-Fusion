import { efetuarLogin } from "./login.cy";
import { navigeteTypeSign } from "./navigate.cy";
import "cypress-iframe";
import { faker } from "@faker-js/faker";

describe("Criar tipo de signatário", () => {
  beforeEach(() => {
    efetuarLogin();
    navigeteTypeSign();
    cy.viewport(1024, 768)
  });

  it("Criando tipo de signatário", () => {
    cy.iframe("#onlyCol").within(() => {
      cy.get(".btn").contains("Novo").click();
      cy.get("[name=signerTypeName]").type(faker.lorem.word());
      cy.get("[name=signerTypeDesc]").type(faker.lorem.words(10));
      cy.get("#submit").click();
      cy.get('div[class="ng-binding ng-scope"]')
        .eq(1)
        .should("have.text", "Tipo de signatário criado com sucesso.");
    });
  });

  it("Criando tipo de signatário já existente", () => {
    cy.iframe("#onlyCol").within(() => {
      cy.get(".btn").contains("Novo").click();
      cy.get("[name=signerTypeName]").type("Testemunha");
      cy.get("[name=signerTypeDesc]").type(faker.lorem.words(10));
      cy.get("#submit").click();
      cy.get(".error-label").should(
        "have.text",
        " Já existe um tipo de signatário com este nome. "
      );
    });
  });

  it("Criar tipo de signatário em branco", () => {
    cy.iframe("#onlyCol").within(() => {
      cy.get(".btn").contains("Novo").click();
      cy.get("#submit").click();
      cy.get(".error-label").should("have.text", " Este campo é obrigatório. ");
    });
  });

  it("Deletando um tipo de signatário", () => {});

  it("Deletando todos tipos de signatários", () => {
    cy.iframe("#onlyCol").within(() => {
      cy.get(".caret").eq(3).click();
      cy.get(".ng-binding").contains("Selecionar todos").click();
      cy.get(".ng-binding").contains("Remover selecionados").click();
      cy.get(".no-results-title").should(
        "have.text",
        "Não há tipos de signatários cadastrados."
      );
      cy.get('div[class="ng-binding ng-scope"]')
        .eq(1)
        .should("have.text", "Tipos de signatários removidos com sucesso.");
    });
  });

  it("Editando tipo de signatário", () => {
    cy.iframe("#onlyCol").within(() => {
      cy.get(".caret").eq(3).click();
      cy.get(".ng-binding").contains("Editar").click();
    });
  });

  it.only("Tentar editar em lote", () => {
    cy.iframe("#onlyCol").within(() => {
      cy.get(".caret").eq(3).click();
      cy.get(".ng-binding").contains("Selecionar todos").click();
      cy.get(".ng-binding").contains("Editar selecionados").click();
    });
  });

  it("Filtrar tipo de signatário", () => {});
});
