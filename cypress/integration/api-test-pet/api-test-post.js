/// <reference types="Cypress" />

const dataTest = require("../../fixtures/postPet.json");
const response = require("../../fixtures/httpResponseCode.json");

describe("Method POST", () => {
  it("(positive) user can create new pet data", () => {
    cy.request({
      method: "POST",
      url: "https://petstore.swagger.io/v2/pet",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: dataTest.dataSuccess,
    }).then((res) => {
      expect(res.status).to.eq(response.successOk);
      expect(res.body).has.property("name", dataTest.dataSuccess.name);
    });
  });

  it("(negative) user can not create new pet data because bad input", () => {
    cy.request({
      method: "POST",
      url: "https://petstore.swagger.io/v2/pet",
      failOnStatusCode: false,
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: dataTest.dataBadInput,
    }).then((res) => {
      expect(res.status).to.eq(response.failedInternalServerError);
      expect(res.body).has.property("message", dataTest.errorMessage);
    });
  });
});
