@CareerTi8mPageFilterBranch
Feature: Testing Filter of the given page.

  Scenario Outline: Test web site
    Given I am using the browser Chrome
    When I go to the web page "<Web Page>"
    And I accept cookies
    Then I check filter for the branch "<Branch>"

    Examples:
      | Web Page                       | Branch      |
      | https://www.ti8m.com/de/career | Consulting  |
      | https://www.ti8m.com/de/career | Engineering |
