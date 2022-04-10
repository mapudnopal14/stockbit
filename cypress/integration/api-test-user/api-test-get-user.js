/// <reference types="Cypress" />

const dataTest = require("../../fixtures/getUser.json");
const response = require("../../fixtures/httpResponseCode.json");

describe("Method GET", () => {
  it("(positive) admin can get user data by username", () => {
    cy.request({
      method: "GET",
      url: "https://petstore.swagger.io/v2/user/" + dataTest.validUsername,
      headers: {
        accept: "application/json",
      },
    }).then((res) => {
      expect(res.status).to.eq(response.successOk);
      expect(res.body).has.property("username", dataTest.validUsername);
    });
  });

  it("(negative) admin can not get user data because invalid username", () => {
    cy.request({
      method: "GET",
      url: "https://petstore.swagger.io/v2/user/" + dataTest.wrongUsername,
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
