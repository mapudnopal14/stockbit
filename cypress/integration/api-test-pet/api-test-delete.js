/// <reference types="Cypress" />

const dataTest = require("../../fixtures/deletePet.json");
const response = require("../../fixtures/httpResponseCode.json");

describe("Method DELETE", () => {
  it("(positive) user can delete pet data", () => {
    cy.request({
      method: "POST",
      url: "https://petstore.swagger.io/v2/pet",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: dataTest.dataSuccess,
    })
      .then((res) => {
        expect(res.status).to.eq(response.successOk);
      })
      .then((res) => {
        const id = res.body.id;
        cy.request({
          method: "DELETE",
          url: "https://petstore.swagger.io/v2/pet/" + id,
          headers: {
            accept: "application/json",
          },
        }).then((res) => {
          expect(res.status).to.eq(response.successOk);
          expect(res.body).has.property("message", dataTest.dataSuccess.id);
        });
      });
  });

  it("(negative) user can not delete pet data because id not found", () => {
    cy.request({
      method: "DELETE",
      url: "https://petstore.swagger.io/v2/pet/" + dataTest.dataFalse,
      failOnStatusCode: false,
      headers: {
        accept: "application/json",
      },
    }).then((res) => {
      expect(res.status).to.eq(response.failedNotFound.codeNumber);
    });
  });
});
