$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/CareerPageStatusCode.feature");
formatter.feature({
  "name": "Testing Status Code of the given url.",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@CareerTi8mBackend"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Test status code",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I start new session",
  "keyword": "Given "
});
formatter.step({
  "name": "I do call using url \"\u003cUrl\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I check status code \"\u003cStatus\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Url",
        "Status"
      ]
    },
    {
      "cells": [
        "https://www.ti8m.com/de/career",
        "200"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Test status code",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CareerTi8mBackend"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I start new session",
  "keyword": "Given "
});
formatter.match({
  "location": "lazarus.steps.StepsForBackend.iStartNewSession()"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I do call using url \"https://www.ti8m.com/de/career\"",
  "keyword": "When "
});
formatter.match({
  "location": "lazarus.steps.StepsForBackend.iDoCallUsingUrl(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I check status code \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "lazarus.steps.StepsForBackend.iCheckStatusCode(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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