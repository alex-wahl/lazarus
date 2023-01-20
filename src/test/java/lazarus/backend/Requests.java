package lazarus.backend;

import io.restassured.http.Header;
import io.restassured.response.Response;
import lazarus.steps.StepHelper;

import java.util.Map;

import static io.restassured.RestAssured.given;

public class Requests extends StepHelper {
    public String url;
    public static Map<String, String> Cookies;

    public Response call() {
        Header header_1 = new Header("User-Agent", "Mozilla/5.0");
        Header header_2 = new Header("Content-type", "text/html;charset=UTF-8");
        Response response = given().
                header(header_1).
                header(header_2).
                when().post(url);

        Cookies = response.getCookies();

        return response;
    }

}
