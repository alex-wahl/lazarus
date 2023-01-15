package lazarus.steps.pages;

import lazarus.steps.StepHelper;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;

import java.io.IOException;
import java.lang.invoke.MethodHandles;
import java.util.regex.Pattern;

public class CareerPage extends StepHelper {
    WebDriver driver;
    WebDriverWait wait;
    protected static Logger logger = Logger.getLogger(MethodHandles.lookup().lookupClass());

    public CareerPage(WebDriver driver) {
        this.driver = driver;
        this.wait = new WebDriverWait(driver, 10); // wait for up to 10 seconds
    }

    // Variables Section

    // Locators Section
    By iframe_id = By.id("iframe-95ea780f-cbb9-41f2-b696-d19662d011a4");
    By cookies = By.cssSelector("#onetrust-accept-btn-handler");
    By offenestellentitle_css = By.cssSelector(".smooth-loading h1");
    By search_field_css = By.cssSelector("#search input");
    By first_job_position_css = By.cssSelector("#jobs > div.job.job-0 > div.title > a");

    // Methods Section

    public void AcceptCoockies() {
        wait.until(ExpectedConditions.presenceOfElementLocated(cookies));
        driver.findElement(cookies).click();
    }

    private void GoIntoFrameOrMoveToElement(By element_id, String frame_flag) {
        WebElement element = driver.findElement(element_id);
        Actions actions = new Actions(driver);
        actions.moveToElement(element);
        actions.perform();
        if (frame_flag.contains(String.valueOf('y').toUpperCase())) {
            driver.switchTo().frame(element);
        }
    }

    public int GetTheStatusCodeOfTheServer() throws IOException {
        String url = driver.getCurrentUrl();
        CloseableHttpClient client = HttpClients.createDefault();
        HttpGet request = new HttpGet(url);
        CloseableHttpResponse response = client.execute(request);
        logger.info("Status code: " + response.getStatusLine().getStatusCode());
        return response.getStatusLine().getStatusCode();
    }

    public String GetTheTitleOffeneStellen() {
        this.GoIntoFrameOrMoveToElement(iframe_id, "Y");
        wait.until(ExpectedConditions.presenceOfElementLocated(offenestellentitle_css));
        String title = driver.findElement(offenestellentitle_css).getText();
        logger.info("Title is: " + title);
        return title;
    }

    public String SearchTheWord(String searchingWord) {
        this.GoIntoFrameOrMoveToElement(iframe_id, "Y");
        wait.until(ExpectedConditions.presenceOfElementLocated(search_field_css));
        driver.findElement(search_field_css).sendKeys(searchingWord);
        wait.until(ExpectedConditions.attributeContains(first_job_position_css, "title", searchingWord));
        logger.info("The first job contains a word: " + driver.findElement(first_job_position_css).getText());
        return driver.findElement(first_job_position_css).getText();
    }
}
