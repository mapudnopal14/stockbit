/// <reference types="Cypress" />

const dataTest = require("../../fixtures/putUser.json");
const response = require("../../fixtures/httpResponseCode.json");

describe("Method PUT", () => {
  it("(positive) admin can update user data", () => {
    cy.request({
      method: "PUT",
      url: "https://petstore.swagger.io/v2/user/" + dataTest.validUsername,
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

  it("(negative) admin can not update user data because invalid input", () => {
    cy.request({
      method: "PUT",
      url: "https://petstore.swagger.io/v2/user/" + dataTest.validUsername,
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

  it("(negative) admin can not update user data because invalid username parameter", () => {
    cy.request({
      method: "PUT",
      url: "https://petstore.swagger.io/v2/user/",
      failOnStatusCode: false,
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: dataTest.dataBadInput,
    }).then((res) => {
      expect(res.status).to.eq(response.failedMethodNotAllowed.codeNumber);
    });
  });
});
