$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/CareerPageAvailability.feature");
formatter.feature({
  "name": "Testing availability of Open positions",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@CareerTi8mCareerAvailability"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Test career availability",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am using the browser Chrome",
  "keyword": "Given "
});
formatter.step({
  "name": "I go to the web page \"\u003cWeb Page\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I check the status code of the server \"\u003cStatus\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I accept cookies",
  "keyword": "And "
});
formatter.step({
  "name": "I check the title Offene Stellen \"\u003cTitel\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Web Page",
        "Status",
        "Titel"
      ]
    },
    {
      "cells": [
        "https://www.ti8m.com/de/career",
        "200",
        "Offene Stellen"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Test career availability",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CareerTi8mCareerAvailability"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am using the browser Chrome",
  "keyword": "Given "
});
formatter.match({
  "location": "lazarus.steps.DriverCreation.i_am_using_the_browser_Chrome()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I go to the web page \"https://www.ti8m.com/de/career\"",
  "keyword": "When "
});
formatter.match({
  "location": "lazarus.steps.web.StepsForWeb.iGoToTheWebPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I check the status code of the server \"200\"",
  "keyword": "And "
});
formatter.match({
  "location": "lazarus.steps.web.StepsForWeb.iCheckTheStatusCodeOfTheServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I accept cookies",
  "keyword": "And "
});
formatter.match({
  "location": "lazarus.steps.web.StepsForWeb.iAcceptCookies()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I check the title Offene Stellen \"Offene Stellen\"",
  "keyword": "Then "
});
formatter.match({
  "location": "lazarus.steps.web.StepsForWeb.iCheckTheTitleOffeneStellen(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded4.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});