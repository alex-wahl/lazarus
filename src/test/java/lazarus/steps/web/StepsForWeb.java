package lazarus.steps.web;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import lazarus.steps.StepHelper;
import lazarus.steps.pages.CareerPage;
import lazarus.utilities.Mail;
import lazarus.utilities.MySqlAccess;
import org.junit.Assert;

import java.io.IOException;

public class StepsForWeb extends StepHelper {

    @When("I go to the web page {string}")
    public void iGoToTheWebPage(String url) {
        logger.info(String.format("The tested page is: %s", url));
        driver.get(url);
    }

    @Then("I accept cookies")
    public void iAcceptCookies() {
        CareerPage CareerPage = new CareerPage(driver);
        logger.info("Accepting Cookies");
        CareerPage.AcceptCoockies();
        logger.info("Cookies Accepted");
    }

    @And("I check the status code of the server {string}")
    public void iCheckTheStatusCodeOfTheServer(String statusCode) throws IOException {
        CareerPage CareerPage = new CareerPage(driver);
        logger.info("Checking the Status Code of the sever");
        Assert.assertEquals(CareerPage.GetTheStatusCodeOfTheServer(), Integer.parseInt(statusCode));
        logger.info("The Status Code of the sever was checked");

    }

    @And("I check the title Offene Stellen {string}")
    public void iCheckTheTitleOffeneStellen(String titel) {
        CareerPage CareerPage = new CareerPage(driver);
        logger.info(String.format("Checking the titel: %s", titel));
        Assert.assertEquals(CareerPage.GetTheTitleOffeneStellen(), titel);
        logger.info("The Titel was checked");
    }

    @Then("I check the search for the word {string}")
    public void iCheckTheSearchForTheWord(String searching_word) {
        CareerPage CareerPage = new CareerPage(driver);
        logger.info("Checking the search feature");
        Assert.assertTrue(CareerPage.SearchTheWord(searching_word).contains(searching_word));
        logger.info("Checked the search feature");
    }

    @Then("I check filter for the city {string}")
    public void iCheckFilterForTheCity(String city) {
    }
}
