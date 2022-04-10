@testRegister
Feature: Testing for registration functionality

  @Scenario
  Scenario: User success to try the registration process
    Given User on registration page
    And User choose register with email
    When User input registration data
    Then User input phone number and will redirect to verification page