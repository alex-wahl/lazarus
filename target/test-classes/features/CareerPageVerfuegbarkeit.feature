@CareerTi8mPage
Feature: Testing wordings and title on the home page

  Scenario Outline: Test web site
    Given I am using the browser Chrome
    When I go to the web page "<Web Page>"
    #And I check the status code of the server "<Status>"
    Then I accept cookies

    Examples:
      | Web Page                                | Status       |
      | https://www.ti8m.com/de/career          | 200          |