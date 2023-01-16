@CareerTi8mPageFilter
Feature: Testing Filter of the given page.

  Scenario Outline: Test web site
    Given I am using the browser Chrome
    When I go to the web page "<Web Page>"
    And I accept cookies
    And I check filter for the city "<City>"
    Then I check filter for the branch "<Branch>"


    Examples:
      | Web Page                       | City   | Branch      |
      | https://www.ti8m.com/de/career | Zürich | Consulting  |
      | https://www.ti8m.com/de/career | Basel  | Engineering |
