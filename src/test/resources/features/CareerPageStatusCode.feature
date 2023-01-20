@CareerTi8mBackend
Feature: Testing Status Code of the given url.

  Scenario Outline: Test status code
    Given I start new session
    When I do call using url "<Url>"
    Then I check status code "<Status>"

    Examples:
      | Url                            | Status |
      | https://www.ti8m.com/de/career | 200    |