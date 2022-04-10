@testLogin
Feature: Testing for login functionality

  @Scenario
  Scenario: User success login using valid credential
    Given User on login pages
    When User input username and password
    And click login button
    Then user will redirect to the home page