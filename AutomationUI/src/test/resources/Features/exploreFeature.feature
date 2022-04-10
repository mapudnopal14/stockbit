@testExplore
Feature: Testing for exploring menu on stockbit website

  @Scenario
  Scenario: User success to explore all menu on stockbit website
    Given User on homepage
    And User go to the investing menu
    And User go to the pro tools menu
    And User go to academy menu
    And User go to about us menu
    And User go to blog menu
    When User go to Help menu
    Then User will go back to homepage screen