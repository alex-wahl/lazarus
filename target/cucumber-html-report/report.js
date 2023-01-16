$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/CareerPageVideoCheck.feature");
formatter.feature({
  "name": "Testing Filter of the given page.",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@CareerTi8mPageVideoCheck"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Test web site",
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
  "name": "I accept cookies",
  "keyword": "And "
});
formatter.step({
  "name": "I check a video",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Web Page"
      ]
    },
    {
      "cells": [
        "https://www.ti8m.com/de/career"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Test web site",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CareerTi8mPageVideoCheck"
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
formatter.afterstep({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png", null);
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
formatter.afterstep({
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png", null);
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
formatter.afterstep({
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I check a video",
  "keyword": "Then "
});
formatter.match({
  "location": "lazarus.steps.web.StepsForWeb.iCheckAVideo()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});