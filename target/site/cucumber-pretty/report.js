$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/CareerPageSearch.feature");
formatter.feature({
  "name": "Testing Vacancies of the given page.",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@CareerTi8mPageSearch"
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
  "name": "I check the search for the word \"\u003cSearching word\u003e\"",
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
        "Searching word"
      ]
    },
    {
      "cells": [
        "https://www.ti8m.com/de/career",
        "Engineer"
      ]
    },
    {
      "cells": [
        "https://www.ti8m.com/de/career",
        "Agile"
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
      "name": "@CareerTi8mPageSearch"
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
  "error_message": "org.openqa.selenium.WebDriverException: Error forwarding the new session Empty pool of VM for setup Capabilities {browserName: chrome, goog:chromeOptions: {args: [test-type, --js-flags\u003d--expose-gc, --enable-precise-memory-info, --disable-popup-blocking, --disable-default-apps, test-type\u003dbrowser, --disable-notifications, window-size\u003d1900,1084, start-maximized, --disable-infobars, --ignore-ssl-errors\u003dyes, --ignore-certificate-errors], extensions: []}}\nCommand duration or timeout: 328 milliseconds\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.JsonWireProtocolResponse.lambda$errorHandler$0(JsonWireProtocolResponse.java:54)\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:197)\n\tat java.base/java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:1016)\n\tat java.base/java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:129)\n\tat java.base/java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:527)\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:513)\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:499)\n\tat java.base/java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:150)\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n\tat java.base/java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:647)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:144)\n\tat lazarus.steps.DriverCreation.i_am_using_the_browser_Chrome(DriverCreation.java:78)\n\tat ✽.I am using the browser Chrome(file:///Users/alex/Desktop/github/lazarus/src/test/resources/features/CareerPageSearch.feature:5)\nCaused by: org.openqa.selenium.WebDriverException: Error forwarding the new session Empty pool of VM for setup Capabilities {browserName: chrome, goog:chromeOptions: {args: [test-type, --js-flags\u003d--expose-gc, --enable-precise-memory-info, --disable-popup-blocking, --disable-default-apps, test-type\u003dbrowser, --disable-notifications, window-size\u003d1900,1084, start-maximized, --disable-infobars, --ignore-ssl-errors\u003dyes, --ignore-certificate-errors], extensions: []}}\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ZPRO-AlexanderW\u0027, ip: \u002710.205.161.178\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002713.1\u0027, java.version: \u002719.0.1\u0027\nDriver info: driver.version: unknown\n\tat org.openqa.grid.web.servlet.handler.RequestHandler.process(RequestHandler.java:118)\n\tat org.openqa.grid.web.servlet.DriverServlet.process(DriverServlet.java:85)\n\tat org.openqa.grid.web.servlet.DriverServlet.doPost(DriverServlet.java:69)\n\tat javax.servlet.http.HttpServlet.service(HttpServlet.java:707)\n\tat javax.servlet.http.HttpServlet.service(HttpServlet.java:790)\n\tat org.seleniumhq.jetty9.servlet.ServletHolder.handle(ServletHolder.java:865)\n\tat org.seleniumhq.jetty9.servlet.ServletHandler.doHandle(ServletHandler.java:535)\n\tat org.seleniumhq.jetty9.server.handler.ScopedHandler.handle(ScopedHandler.java:146)\n\tat org.seleniumhq.jetty9.security.SecurityHandler.handle(SecurityHandler.java:548)\n\tat org.seleniumhq.jetty9.server.handler.HandlerWrapper.handle(HandlerWrapper.java:132)\n\tat org.seleniumhq.jetty9.server.handler.ScopedHandler.nextHandle(ScopedHandler.java:257)\n\tat org.seleniumhq.jetty9.server.session.SessionHandler.doHandle(SessionHandler.java:1595)\n\tat org.seleniumhq.jetty9.server.handler.ScopedHandler.nextHandle(ScopedHandler.java:255)\n\tat org.seleniumhq.jetty9.server.handler.ContextHandler.doHandle(ContextHandler.java:1340)\n\tat org.seleniumhq.jetty9.server.handler.ScopedHandler.nextScope(ScopedHandler.java:203)\n\tat org.seleniumhq.jetty9.servlet.ServletHandler.doScope(ServletHandler.java:473)\n\tat org.seleniumhq.jetty9.server.session.SessionHandler.doScope(SessionHandler.java:1564)\n\tat org.seleniumhq.jetty9.server.handler.ScopedHandler.nextScope(ScopedHandler.java:201)\n\tat org.seleniumhq.jetty9.server.handler.ContextHandler.doScope(ContextHandler.java:1242)\n\tat org.seleniumhq.jetty9.server.handler.ScopedHandler.handle(ScopedHandler.java:144)\n\tat org.seleniumhq.jetty9.server.handler.HandlerWrapper.handle(HandlerWrapper.java:132)\n\tat org.seleniumhq.jetty9.server.Server.handle(Server.java:503)\n\tat org.seleniumhq.jetty9.server.HttpChannel.handle(HttpChannel.java:364)\n\tat org.seleniumhq.jetty9.server.HttpConnection.onFillable(HttpConnection.java:260)\n\tat org.seleniumhq.jetty9.io.AbstractConnection$ReadCallback.succeeded(AbstractConnection.java:305)\n\tat org.seleniumhq.jetty9.io.FillInterest.fillable(FillInterest.java:103)\n\tat org.seleniumhq.jetty9.io.ChannelEndPoint$2.run(ChannelEndPoint.java:118)\n\tat org.seleniumhq.jetty9.util.thread.strategy.EatWhatYouKill.runTask(EatWhatYouKill.java:333)\n\tat org.seleniumhq.jetty9.util.thread.strategy.EatWhatYouKill.doProduce(EatWhatYouKill.java:310)\n\tat org.seleniumhq.jetty9.util.thread.strategy.EatWhatYouKill.tryProduce(EatWhatYouKill.java:168)\n\tat org.seleniumhq.jetty9.util.thread.strategy.EatWhatYouKill.run(EatWhatYouKill.java:126)\n\tat org.seleniumhq.jetty9.util.thread.ReservedThreadExecutor$ReservedThread.run(ReservedThreadExecutor.java:366)\n\tat org.seleniumhq.jetty9.util.thread.QueuedThreadPool.runJob(QueuedThreadPool.java:765)\n\tat org.seleniumhq.jetty9.util.thread.QueuedThreadPool$2.run(QueuedThreadPool.java:683)\n\tat java.lang.Thread.run(Thread.java:748)\n",
  "status": "failed"
});
formatter.afterstep({
  "error_message": "java.lang.NullPointerException: Cannot invoke \"org.openqa.selenium.TakesScreenshot.getScreenshotAs(org.openqa.selenium.OutputType)\" because \"lazarus.steps.StepDefinitions.driver\" is null\n\tat lazarus.steps.StepDefinitions.takingScreenshot(StepDefinitions.java:66)\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.afterstep({
  "status": "skipped"
});
formatter.afterstep({
  "status": "skipped"
});
formatter.step({
  "name": "I accept cookies",
  "keyword": "And "
});
formatter.match({
  "location": "lazarus.steps.web.StepsForWeb.iAcceptCookies()"
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
formatter.step({
  "name": "I check the search for the word \"Engineer\"",
  "keyword": "Then "
});
formatter.match({
  "location": "lazarus.steps.web.StepsForWeb.iCheckTheSearchForTheWord(java.lang.String)"
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
formatter.scenario({
  "name": "Test web site",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CareerTi8mPageSearch"
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
  "error_message": "org.openqa.selenium.WebDriverException: Error forwarding the new session Empty pool of VM for setup Capabilities {browserName: chrome, goog:chromeOptions: {args: [test-type, --js-flags\u003d--expose-gc, --enable-precise-memory-info, --disable-popup-blocking, --disable-default-apps, test-type\u003dbrowser, --disable-notifications, window-size\u003d1900,1084, start-maximized, --disable-infobars, --ignore-ssl-errors\u003dyes, --ignore-certificate-errors], extensions: []}}\nCommand duration or timeout: 36 milliseconds\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.JsonWireProtocolResponse.lambda$errorHandler$0(JsonWireProtocolResponse.java:54)\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:197)\n\tat java.base/java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:1016)\n\tat java.base/java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:129)\n\tat java.base/java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:527)\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:513)\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:499)\n\tat java.base/java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:150)\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n\tat java.base/java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:647)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:144)\n\tat lazarus.steps.DriverCreation.i_am_using_the_browser_Chrome(DriverCreation.java:78)\n\tat ✽.I am using the browser Chrome(file:///Users/alex/Desktop/github/lazarus/src/test/resources/features/CareerPageSearch.feature:5)\nCaused by: org.openqa.selenium.WebDriverException: Error forwarding the new session Empty pool of VM for setup Capabilities {browserName: chrome, goog:chromeOptions: {args: [test-type, --js-flags\u003d--expose-gc, --enable-precise-memory-info, --disable-popup-blocking, --disable-default-apps, test-type\u003dbrowser, --disable-notifications, window-size\u003d1900,1084, start-maximized, --disable-infobars, --ignore-ssl-errors\u003dyes, --ignore-certificate-errors], extensions: []}}\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ZPRO-AlexanderW\u0027, ip: \u002710.205.161.178\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002713.1\u0027, java.version: \u002719.0.1\u0027\nDriver info: driver.version: unknown\n\tat org.openqa.grid.web.servlet.handler.RequestHandler.process(RequestHandler.java:118)\n\tat org.openqa.grid.web.servlet.DriverServlet.process(DriverServlet.java:85)\n\tat org.openqa.grid.web.servlet.DriverServlet.doPost(DriverServlet.java:69)\n\tat javax.servlet.http.HttpServlet.service(HttpServlet.java:707)\n\tat javax.servlet.http.HttpServlet.service(HttpServlet.java:790)\n\tat org.seleniumhq.jetty9.servlet.ServletHolder.handle(ServletHolder.java:865)\n\tat org.seleniumhq.jetty9.servlet.ServletHandler.doHandle(ServletHandler.java:535)\n\tat org.seleniumhq.jetty9.server.handler.ScopedHandler.handle(ScopedHandler.java:146)\n\tat org.seleniumhq.jetty9.security.SecurityHandler.handle(SecurityHandler.java:548)\n\tat org.seleniumhq.jetty9.server.handler.HandlerWrapper.handle(HandlerWrapper.java:132)\n\tat org.seleniumhq.jetty9.server.handler.ScopedHandler.nextHandle(ScopedHandler.java:257)\n\tat org.seleniumhq.jetty9.server.session.SessionHandler.doHandle(SessionHandler.java:1595)\n\tat org.seleniumhq.jetty9.server.handler.ScopedHandler.nextHandle(ScopedHandler.java:255)\n\tat org.seleniumhq.jetty9.server.handler.ContextHandler.doHandle(ContextHandler.java:1340)\n\tat org.seleniumhq.jetty9.server.handler.ScopedHandler.nextScope(ScopedHandler.java:203)\n\tat org.seleniumhq.jetty9.servlet.ServletHandler.doScope(ServletHandler.java:473)\n\tat org.seleniumhq.jetty9.server.session.SessionHandler.doScope(SessionHandler.java:1564)\n\tat org.seleniumhq.jetty9.server.handler.ScopedHandler.nextScope(ScopedHandler.java:201)\n\tat org.seleniumhq.jetty9.server.handler.ContextHandler.doScope(ContextHandler.java:1242)\n\tat org.seleniumhq.jetty9.server.handler.ScopedHandler.handle(ScopedHandler.java:144)\n\tat org.seleniumhq.jetty9.server.handler.HandlerWrapper.handle(HandlerWrapper.java:132)\n\tat org.seleniumhq.jetty9.server.Server.handle(Server.java:503)\n\tat org.seleniumhq.jetty9.server.HttpChannel.handle(HttpChannel.java:364)\n\tat org.seleniumhq.jetty9.server.HttpConnection.onFillable(HttpConnection.java:260)\n\tat org.seleniumhq.jetty9.io.AbstractConnection$ReadCallback.succeeded(AbstractConnection.java:305)\n\tat org.seleniumhq.jetty9.io.FillInterest.fillable(FillInterest.java:103)\n\tat org.seleniumhq.jetty9.io.ChannelEndPoint$2.run(ChannelEndPoint.java:118)\n\tat org.seleniumhq.jetty9.util.thread.strategy.EatWhatYouKill.runTask(EatWhatYouKill.java:333)\n\tat org.seleniumhq.jetty9.util.thread.strategy.EatWhatYouKill.doProduce(EatWhatYouKill.java:310)\n\tat org.seleniumhq.jetty9.util.thread.strategy.EatWhatYouKill.tryProduce(EatWhatYouKill.java:168)\n\tat org.seleniumhq.jetty9.util.thread.strategy.EatWhatYouKill.run(EatWhatYouKill.java:126)\n\tat org.seleniumhq.jetty9.util.thread.ReservedThreadExecutor$ReservedThread.run(ReservedThreadExecutor.java:366)\n\tat org.seleniumhq.jetty9.util.thread.QueuedThreadPool.runJob(QueuedThreadPool.java:765)\n\tat org.seleniumhq.jetty9.util.thread.QueuedThreadPool$2.run(QueuedThreadPool.java:683)\n\tat java.lang.Thread.run(Thread.java:748)\n",
  "status": "failed"
});
formatter.afterstep({
  "error_message": "java.lang.NullPointerException: Cannot invoke \"org.openqa.selenium.TakesScreenshot.getScreenshotAs(org.openqa.selenium.OutputType)\" because \"lazarus.steps.StepDefinitions.driver\" is null\n\tat lazarus.steps.StepDefinitions.takingScreenshot(StepDefinitions.java:66)\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.afterstep({
  "status": "skipped"
});
formatter.afterstep({
  "status": "skipped"
});
formatter.step({
  "name": "I accept cookies",
  "keyword": "And "
});
formatter.match({
  "location": "lazarus.steps.web.StepsForWeb.iAcceptCookies()"
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
formatter.step({
  "name": "I check the search for the word \"Agile\"",
  "keyword": "Then "
});
formatter.match({
  "location": "lazarus.steps.web.StepsForWeb.iCheckTheSearchForTheWord(java.lang.String)"
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