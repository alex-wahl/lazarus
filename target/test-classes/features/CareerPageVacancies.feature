@CareerTi8mPageVacancies
Feature: Testing Vacancies of the given page.

  Scenario Outline: Test web site
    Given I am using the browser Chrome
    When I go to the web page "<Web Page>"
    And I accept cookies
    And I check the title Offene Stellen "<Titel>"
    #Then I check the search for the word "<Search word>"

    Examples:
      | Web Page                                | Search word  | Titel          |
      | https://www.ti8m.com/de/career          | Agile        | Offene Stellen |