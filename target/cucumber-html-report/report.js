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
  "error_message": "java.lang.IllegalStateException: Cannot parse object because no supported Content-Type was specified in response. Content-Type was \u0027text/html;charset\u003dUTF-8\u0027.\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:73)\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrapNoCoerce.callConstructor(ConstructorSite.java:108)\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallConstructor(CallSiteArray.java:57)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:263)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:277)\n\tat io.restassured.internal.mapping.ObjectMapping.deserialize(ObjectMapping.groovy:95)\n\tat io.restassured.internal.mapping.ObjectMapping$deserialize.call(Unknown Source)\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:45)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:125)\n\tat io.restassured.internal.RestAssuredResponseOptionsGroovyImpl.as(RestAssuredResponseOptionsGroovyImpl.groovy:229)\n\tat io.restassured.internal.RestAssuredResponseOptionsImpl.as(RestAssuredResponseOptionsImpl.java:169)\n\tat lazarus.steps.StepsForBackend.iDoCallUsingUrl(StepsForBackend.java:15)\n\tat ✽.I do call using url \"https://www.ti8m.com/de/career\"(file:///Users/alex/Desktop/github/lazarus/src/test/resources/features/CareerPageStatusCode.feature:6)\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.afterstep({
  "status": "skipped"
});
formatter.afterstep({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});