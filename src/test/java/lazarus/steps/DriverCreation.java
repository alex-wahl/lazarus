package lazarus.steps;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

public class DriverCreation extends StepHelper{

    private static final String MAC_DRIVER_PATH = "src/test/resources/drivers/chromedriver";

    @Given("I am using the browser Chrome")
    public void i_am_using_the_browser_Chrome() {

        System.setProperty("webdriver.chrome.driver", MAC_DRIVER_PATH);

        ChromeOptions options = new ChromeOptions();

        options.addArguments("window-size=1920,1080");
        options.addArguments("test-type");
        options.addArguments("start-maximized");

        logger.info("############ Opening a browser Chrome ############");

        driver = new ChromeDriver(options);
    }


    @And("I close the browser Chrome")
    public void i_close_the_browser_Chrome() {

        logger.info("############ Closing a browser Chrome ############");
        driver.close();

    }
}
