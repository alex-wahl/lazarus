package lazarus.pages.web;

import lazarus.steps.StepHelper;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
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
import java.util.HashMap;
import java.util.Objects;
import java.util.Set;

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
    By open_job_title_css = By.cssSelector(".smooth-loading h1");
    By search_field_css = By.cssSelector("#search input");
    By first_job_position_css = By.cssSelector("#jobs > div.job.job-0 > div.title > a");
    By first_city_position_css = By.cssSelector("#jobs > div.job.job-0 > div.location");
    By first_branch_position_css = By.cssSelector("#jobs > div.job.job-0 > div.branch");
    By abo_subscription_css = By.cssSelector("#jobabo-subscribe-button");
    By abo_searching_word_css = By.cssSelector("#search > input");
    By abo_city_css = By.cssSelector("#form-wrapper > div:nth-child(2) > h2");
    By abo_branch_css = By.cssSelector("#form-wrapper > div:nth-child(3) > h2");
    By abo_level_css = By.cssSelector("#form-wrapper > div:nth-child(4) > h2");
    By opt_in_css = By.cssSelector("#single-opt-in");
    By abo_accept_button_css = By.cssSelector("#content-1 > button");
    By abo_name_css = By.cssSelector("#label");
    By abo_email_css = By.cssSelector("#email");
    By abo_send_button_css = By.cssSelector("#content-2 > button");
    By abo_sucsess_title = By.cssSelector("#jobabo-success > h3");

    By video_iframe_css = By.cssSelector("#video-container-08 > div > div.text-center.mb-4 > iframe");
    By video_css = By.cssSelector("#movie_player > div.html5-video-container > video");

    // Methods Section

    protected static HashMap<String, By> GetFilterCssSelectors() {

        HashMap<String, By> selectors = new HashMap<String, By>();
        // Cites
        selectors.put("Zürich", By.cssSelector("#\\31 301743"));
        selectors.put("Basel", By.cssSelector("#\\31 343332"));
        selectors.put("Bern", By.cssSelector("#\\31 301744"));
        selectors.put("Düsseldorf", By.cssSelector("#\\31 382164"));
        selectors.put("Frankfurt", By.cssSelector("#\\31 301745"));
        selectors.put("Singapur", By.cssSelector("#\\31 301746"));

        // Work Area
        selectors.put("Consulting", By.cssSelector("#\\31 301753"));
        selectors.put("Sales", By.cssSelector("#\\31 301750"));
        selectors.put("Design", By.cssSelector("#\\31 301752"));
        selectors.put("Engineering", By.cssSelector("#\\31 301748"));
        selectors.put("Cloud", By.cssSelector("#\\31 301751"));
        selectors.put("Corporate Center", By.cssSelector("#\\31 301747"));
        selectors.put("Security", By.cssSelector("#\\31 301749"));
        selectors.put("Next Generation", By.cssSelector("#\\31 301754"));

        // Level
        selectors.put("Junior", By.cssSelector("#\\31 301737"));
        selectors.put("Professional", By.cssSelector("#\\31 301738"));
        selectors.put("Senior", By.cssSelector("#\\31 301739"));


        return selectors;
    }

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
        wait.until(ExpectedConditions.presenceOfElementLocated(open_job_title_css));
        String title = driver.findElement(open_job_title_css).getText();
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

    public String FilterTheCity(String city) {
        this.GoIntoFrameOrMoveToElement(iframe_id, "Y");
        wait.until(ExpectedConditions.presenceOfElementLocated(GetFilterCssSelectors().get(city)));
        driver.findElement(GetFilterCssSelectors().get(city)).click();
        wait.until(ExpectedConditions.textToBe(first_city_position_css, city));
        logger.info("The first city contains a word: " + driver.findElement(first_city_position_css).getText());
        return driver.findElement(first_city_position_css).getText();
    }

    public String FilterTheBranch(String branch) {
        this.GoIntoFrameOrMoveToElement(iframe_id, "Y");
        wait.until(ExpectedConditions.presenceOfElementLocated(GetFilterCssSelectors().get(branch)));
        driver.findElement(GetFilterCssSelectors().get(branch)).click();
        wait.until(ExpectedConditions.textToBe(first_branch_position_css, branch));
        logger.info("The first branch contains a word: " + driver.findElement(first_branch_position_css).getText());
        return driver.findElement(first_branch_position_css).getText();
    }

    public String MakeAbo() {
        this.GoIntoFrameOrMoveToElement(iframe_id, "Y");
        wait.until(ExpectedConditions.presenceOfElementLocated(abo_subscription_css));
        driver.findElement(abo_subscription_css).click();
        Set<String> windowHandles = driver.getWindowHandles();
        for (String windowHandle : windowHandles) {
            driver.switchTo().window(windowHandle);
            logger.info(driver.getTitle());
            if (Objects.equals(driver.getTitle(), "ti&m: Neue Jobs abonnieren")) {
                wait.until(ExpectedConditions.presenceOfElementLocated(abo_searching_word_css));
                driver.findElement(abo_searching_word_css).sendKeys("QA");
                driver.findElement(abo_city_css).click();
                driver.findElement(GetFilterCssSelectors().get("Zürich")).click();
                driver.findElement(abo_branch_css).click();
                driver.findElement(GetFilterCssSelectors().get("Engineering")).click();
                driver.findElement(abo_level_css).click();
                driver.findElement(GetFilterCssSelectors().get("Professional")).click();
                driver.findElement(opt_in_css).click();
                driver.findElement(abo_accept_button_css).click();
                wait.until(ExpectedConditions.presenceOfElementLocated(abo_name_css));
                driver.findElement(abo_name_css).sendKeys("QA ti&m");
                driver.findElement(abo_email_css).sendKeys(EmailGenerate());
                driver.findElement(abo_send_button_css).click();
                wait.until(ExpectedConditions.presenceOfElementLocated(abo_sucsess_title));
            }
        }
        logger.info("Text:" + driver.findElement(abo_sucsess_title).getText());
        return driver.findElement(abo_sucsess_title).getText();
    }

    public boolean IsVideoOnThePage() {
        this.GoIntoFrameOrMoveToElement(video_iframe_css, "Y");
        wait.until(ExpectedConditions.presenceOfElementLocated(video_css));
        logger.info("Is video: " + driver.findElement(video_css).isDisplayed());
        return driver.findElement(video_css).isDisplayed();
    }

}
