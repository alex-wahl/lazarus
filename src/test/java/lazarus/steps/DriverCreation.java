package lazarus.steps;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import org.openqa.selenium.Point;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import java.util.concurrent.TimeUnit;

public class DriverCreation extends StepHelper{

    private static final String MAC_DRIVER_PATH = "src/test/resources/drivers/chromedriver";

    @Given("I am using the browser Chrome")
    public void i_am_using_the_browser_Chrome() {

        System.setProperty("webdriver.chrome.driver", MAC_DRIVER_PATH);

        ChromeOptions options = new ChromeOptions();

        options.addArguments("test-type");
        options.addArguments("--js-flags=--expose-gc");
        options.addArguments("--enable-precise-memory-info");
        options.addArguments("--disable-popup-blocking");
        options.addArguments("--disable-default-apps");
        options.addArguments("test-type=browser");
        options.addArguments("--disable-notifications");
        options.addArguments("window-size=1900,1084");
        options.addArguments("start-maximized");
        options.addArguments("--disable-infobars");
        //options.addArguments("--headless");

        logger.info("############ Opening a browser Chrome ############");

        driver = new ChromeDriver(options);

    }

}
