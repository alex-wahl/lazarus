@CareerTi8mPage
Feature: Testing wordings and title on the home page

  Scenario Outline: Test web site
    Given I am using the browser Chrome
    When I go to the career web page "<Web Page>"
    Then The server should return the status "<Status>"

    Examples:
      | Web Page                                | Status       |
      | https://www.ti8m.com/de/career          | 200          |