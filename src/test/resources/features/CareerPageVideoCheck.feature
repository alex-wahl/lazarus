@CareerTi8mPageVideoCheck
Feature: Testing Filter of the given page.

  Scenario Outline: Test web site
    Given I am using the browser Chrome
    When I go to the web page "<Web Page>"
    And I accept cookies
    Then I check a video

    Examples:
      | Web Page                       |
      | https://www.ti8m.com/de/career |
