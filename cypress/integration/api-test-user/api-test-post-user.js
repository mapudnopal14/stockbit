/// <reference types="Cypress" />

const dataTest = require("../../fixtures/postUser.json");
const response = require("../../fixtures/httpResponseCode.json");

describe("Method POST", () => {
  it("(positive) admin can create new user data", () => {
    cy.request({
      method: "POST",
      url: "https://petstore.swagger.io/v2/user",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: dataTest.dataSuccess,
    }).then((res) => {
      expect(res.status).to.eq(response.successOk);
      expect(res.body).has.property("message", dataTest.dataSuccess.id);
    });
  });

  it("(negative) admin can not create new user data because invalid input", () => {
    cy.request({
      method: "POST",
      url: "https://petstore.swagger.io/v2/user",
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
