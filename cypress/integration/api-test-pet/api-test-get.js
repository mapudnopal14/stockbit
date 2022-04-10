/// <reference types="Cypress" />

const dataTest = require("../../fixtures/getPet.json");
const response = require("../../fixtures/httpResponseCode.json");

describe("Method GET", () => {
  it("(positive) user can get pet data", () => {
    cy.request({
      method: "GET",
      url: "https://petstore.swagger.io/v2/pet/" + dataTest.validId,
      headers: {
        accept: "application/json",
      },
    }).then((res) => {
      expect(res.status).to.eq(response.successOk);
      expect(res.body).has.property("name", dataTest.validateData);
    });
  });

  it("(negative) user can not get pet data", () => {
    cy.request({
      method: "GET",
      url: "https://petstore.swagger.io/v2/pet/" + dataTest.wrongId,
      failOnStatusCode: false,
      headers: {
        accept: "application/json",
      },
    }).then((res) => {
      expect(res.status).to.eq(response.failedNotFound.codeNumber);
      expect(res.body).has.property("message", dataTest.errorMessage);
    });
  });
});
