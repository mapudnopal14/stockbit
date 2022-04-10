/// <reference types="Cypress" />

const dataTest = require("../../fixtures/putPet.json");
const response = require("../../fixtures/httpResponseCode.json");

describe("Method PUT", () => {
  it("(positive) user can update pet data", () => {
    cy.request({
      method: "PUT",
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

  it("(negative) user can not update pet data because bad input", () => {
    cy.request({
      method: "PUT",
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
