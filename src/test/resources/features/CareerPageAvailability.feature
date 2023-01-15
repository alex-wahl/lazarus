@CareerTi8mCareerAvailability
Feature: Testing availability of Open positions

  Scenario Outline: Test career availability
    Given I am using the browser Chrome
    When I go to the web page "<Web Page>"
    And I check the status code of the server "<Status>"
    And I accept cookies
    Then I check the title Offene Stellen "<Titel>"


    Examples:
      | Web Page                       | Status | Titel          |
      | https://www.ti8m.com/de/career | 200    | Offene Stellen |