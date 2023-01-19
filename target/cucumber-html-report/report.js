$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/CareerPageAbo.feature");
formatter.feature({
  "name": "Testing Filter of the given page.",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@CareerTi8mPageAbo"
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
  "name": "I check abo",
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
      "name": "@CareerTi8mPageAbo"
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
  "location": "lazarus.utilities.DriverCreation.i_am_using_the_browser_Chrome()"
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
  "location": "lazarus.steps.StepsForWeb.iGoToTheWebPage(java.lang.String)"
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
  "name": "I accept cookies",
  "keyword": "And "
});
formatter.match({
  "location": "lazarus.steps.StepsForWeb.iAcceptCookies()"
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
  "name": "I check abo",
  "keyword": "Then "
});
formatter.match({
  "location": "lazarus.steps.StepsForWeb.iCheckAbo()"
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
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/CareerPageAvailability.feature");
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
  "location": "lazarus.utilities.DriverCreation.i_am_using_the_browser_Chrome()"
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
formatter.step({
  "name": "I go to the web page \"https://www.ti8m.com/de/career\"",
  "keyword": "When "
});
formatter.match({
  "location": "lazarus.steps.StepsForWeb.iGoToTheWebPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded5.png", null);
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
  "location": "lazarus.steps.StepsForWeb.iCheckTheStatusCodeOfTheServer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded6.png", null);
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
  "location": "lazarus.steps.StepsForWeb.iAcceptCookies()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded7.png", null);
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
  "location": "lazarus.steps.StepsForWeb.iCheckTheTitleOffeneStellen(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded8.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/CareerPageFilterBranch.feature");
formatter.feature({
  "name": "Testing Filter of the given page.",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@CareerTi8mPageFilterBranch"
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
  "name": "I check filter for the branch \"\u003cBranch\u003e\"",
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
        "Branch"
      ]
    },
    {
      "cells": [
        "https://www.ti8m.com/de/career",
        "Consulting"
      ]
    },
    {
      "cells": [
        "https://www.ti8m.com/de/career",
        "Engineering"
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
      "name": "@CareerTi8mPageFilterBranch"
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
  "location": "lazarus.utilities.DriverCreation.i_am_using_the_browser_Chrome()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded9.png", null);
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
  "location": "lazarus.steps.StepsForWeb.iGoToTheWebPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded10.png", null);
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
  "location": "lazarus.steps.StepsForWeb.iAcceptCookies()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded11.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I check filter for the branch \"Consulting\"",
  "keyword": "Then "
});
formatter.match({
  "location": "lazarus.steps.StepsForWeb.iCheckFilterForTheBranch(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded12.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
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
      "name": "@CareerTi8mPageFilterBranch"
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
  "location": "lazarus.utilities.DriverCreation.i_am_using_the_browser_Chrome()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded13.png", null);
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
  "location": "lazarus.steps.StepsForWeb.iGoToTheWebPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded14.png", null);
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
  "location": "lazarus.steps.StepsForWeb.iAcceptCookies()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded15.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I check filter for the branch \"Engineering\"",
  "keyword": "Then "
});
formatter.match({
  "location": "lazarus.steps.StepsForWeb.iCheckFilterForTheBranch(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded16.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/CareerPageFilterCity.feature");
formatter.feature({
  "name": "Testing Filter of the given page.",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@CareerTi8mPageFilterCity"
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
  "name": "I check filter for the city \"\u003cCity\u003e\"",
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
        "City"
      ]
    },
    {
      "cells": [
        "https://www.ti8m.com/de/career",
        "Zürich"
      ]
    },
    {
      "cells": [
        "https://www.ti8m.com/de/career",
        "Basel"
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
      "name": "@CareerTi8mPageFilterCity"
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
  "location": "lazarus.utilities.DriverCreation.i_am_using_the_browser_Chrome()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded17.png", null);
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
  "location": "lazarus.steps.StepsForWeb.iGoToTheWebPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded18.png", null);
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
  "location": "lazarus.steps.StepsForWeb.iAcceptCookies()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded19.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I check filter for the city \"Zürich\"",
  "keyword": "Then "
});
formatter.match({
  "location": "lazarus.steps.StepsForWeb.iCheckFilterForTheCity(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded20.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
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
      "name": "@CareerTi8mPageFilterCity"
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
  "location": "lazarus.utilities.DriverCreation.i_am_using_the_browser_Chrome()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded21.png", null);
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
  "location": "lazarus.steps.StepsForWeb.iGoToTheWebPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded22.png", null);
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
  "location": "lazarus.steps.StepsForWeb.iAcceptCookies()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded23.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I check filter for the city \"Basel\"",
  "keyword": "Then "
});
formatter.match({
  "location": "lazarus.steps.StepsForWeb.iCheckFilterForTheCity(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded24.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/CareerPageSearch.feature");
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
  "location": "lazarus.utilities.DriverCreation.i_am_using_the_browser_Chrome()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded25.png", null);
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
  "location": "lazarus.steps.StepsForWeb.iGoToTheWebPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded26.png", null);
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
  "location": "lazarus.steps.StepsForWeb.iAcceptCookies()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded27.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I check the search for the word \"Engineer\"",
  "keyword": "Then "
});
formatter.match({
  "location": "lazarus.steps.StepsForWeb.iCheckTheSearchForTheWord(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded28.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
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
  "location": "lazarus.utilities.DriverCreation.i_am_using_the_browser_Chrome()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded29.png", null);
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
  "location": "lazarus.steps.StepsForWeb.iGoToTheWebPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded30.png", null);
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
  "location": "lazarus.steps.StepsForWeb.iAcceptCookies()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded31.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I check the search for the word \"Agile\"",
  "keyword": "Then "
});
formatter.match({
  "location": "lazarus.steps.StepsForWeb.iCheckTheSearchForTheWord(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded32.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/CareerPageVideoCheck.feature");
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
  "location": "lazarus.utilities.DriverCreation.i_am_using_the_browser_Chrome()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded33.png", null);
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
  "location": "lazarus.steps.StepsForWeb.iGoToTheWebPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded34.png", null);
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
  "location": "lazarus.steps.StepsForWeb.iAcceptCookies()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded35.png", null);
formatter.afterstep({
  "status": "passed"
});
formatter.afterstep({
  "status": "passed"
});
formatter.step({
  "name": "I check a video",
  "keyword": "Then "
});
formatter.match({
  "location": "lazarus.steps.StepsForWeb.iCheckAVideo()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded36.png", null);
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