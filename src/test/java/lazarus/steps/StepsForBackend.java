package lazarus.steps;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import lazarus.backend.Requests;
import org.junit.Assert;

public class StepsForBackend extends StepHelper {

    @When("I do call using url {string}")
    public void iDoCallUsingUrl(String url) {
        logger.info("Make call to: " + url);
        session.url = url;
        login_session = session.call();
        logger.info("Call to url was done.");
    }

    @Then("I check status code {string}")
    public void iCheckStatusCode(String code) {
        logger.info("Checking status code: " + code);
        Assert.assertEquals(login_session.getStatusCode(), Integer.parseInt(code));
        logger.info("Status code was checked.");
    }

    @Given("I start new session")
    public void iStartNewSession() {
        session = new Requests();
    }
}
