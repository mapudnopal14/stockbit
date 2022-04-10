/// <reference types="Cypress" />

const dataTest = require("../../fixtures/deleteUser.json");
const response = require("../../fixtures/httpResponseCode.json");

describe("Method DELETE", () => {
  it("(positive) admin can delete user data by username", () => {
    cy.request({
      method: "POST",
      url: "https://petstore.swagger.io/v2/user",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: dataTest.dataSuccess,
    })
      .then((res) => {
        expect(res.status).to.eq(response.successOk);
      })
      .then(() => {
        cy.request({
          method: "DELETE",
          url:
            "https://petstore.swagger.io/v2/user/" +
            dataTest.dataSuccess.username,
          headers: {
            accept: "application/json",
          },
        }).then((res) => {
          expect(res.status).to.eq(response.successOk);
          expect(res.body).has.property(
            "message",
            dataTest.dataSuccess.username
          );
        });
      });
  });

  it("(negative) admin can not delete user data because username not found", () => {
    cy.request({
      method: "DELETE",
      url: "https://petstore.swagger.io/v2/user/" + dataTest.dataFalse,
      failOnStatusCode: false,
      headers: {
        accept: "application/json",
      },
    }).then((res) => {
      expect(res.status).to.eq(response.failedNotFound.codeNumber);
    });
  });

  it("(negative) admin can not delete user data because invalid username parameter", () => {
    cy.request({
      method: "DELETE",
      url: "https://petstore.swagger.io/v2/user/",
      failOnStatusCode: false,
      headers: {
        accept: "application/json",
      },
    }).then((res) => {
      expect(res.status).to.eq(response.failedMethodNotAllowed.codeNumber);
    });
  });
});
