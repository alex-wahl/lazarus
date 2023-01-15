@CareerTi8mPageFilter
Feature: Testing Filter of the given page.

  Scenario Outline: Test web site
    Given I am using the browser Chrome
    When I go to the web page "<Web Page>"
    And I accept cookies
    Then I check filter for the city "<City>"

    Examples:
      | Web Page                                | City        |
      | https://www.ti8m.com/de/career          | Zürich      |
      | https://www.ti8m.com/de/career          | Basel       |
      | https://www.ti8m.com/de/career          | Bern        |
      | https://www.ti8m.com/de/career          | Düsseldorf  |
      | https://www.ti8m.com/de/career          | Frankfurt   |
      | https://www.ti8m.com/de/career          | Singapur    |