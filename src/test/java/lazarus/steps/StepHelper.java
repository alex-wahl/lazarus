package lazarus.steps;

import java.util.Random;

import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;

import java.lang.invoke.MethodHandles;

public class StepHelper {

    protected static WebDriver driver = null;
    protected static Logger logger = Logger.getLogger(MethodHandles.lookup().lookupClass());

    public String EmailGenerate() {
        String[] possibleWords = {"happy", "sun", "fun", "summer", "love", "travel", "adventure"};
        String[] possibleDomains = {"gmail.com", "yahoo.com", "hotmail.com", "aol.com"};

        Random rand = new Random();
        String randomWord = possibleWords[rand.nextInt(possibleWords.length)];
        String randomDomain = possibleDomains[rand.nextInt(possibleDomains.length)];

        return randomWord + (rand.nextInt(999) + 1) + "@" + randomDomain;
    }


}
