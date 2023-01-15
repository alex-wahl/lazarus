@CareerTi8mPageSearch
Feature: Testing Vacancies of the given page.

  Scenario Outline: Test web site
    Given I am using the browser Chrome
    When I go to the web page "<Web Page>"
    And I accept cookies
    Then I check the search for the word "<Searching word>"

    Examples:
      | Web Page                                | Searching word     |
      | https://www.ti8m.com/de/career          | Engineer           |