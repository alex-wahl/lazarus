package lazarus.steps;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import lazarus.backend.Requests;
import lazarus.backend.model.ti8m.Welcome;

public class StepsForBackend extends StepHelper {

    @When("I do call using url {string}")
    public void iDoCallUsingUrl(String url) {
        logger.info("Make call to: " + url);
        session.url = url;
        login_session = session.call().getBody().as(Welcome.class);

    }

    @Then("I check status code {string}")
    public void iCheckStatusCode(String code) {


    }

    @Given("I start new session")
    public void iStartNewSession() {
        session = new Requests();
    }
}
