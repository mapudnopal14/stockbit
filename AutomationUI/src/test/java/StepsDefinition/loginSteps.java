package StepsDefinition;

import java.time.Duration;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import io.cucumber.java.en.*;


public class loginSteps {
	
	WebDriver driver = null;
	
	@Given("User on login pages")
	public void user_on_login_pages() {
		System.setProperty("webdriver.chrome.driver","/Users/mahfudhnaufal/eclipse-workspace/AutomationUI/src/test/resources/WebDriver/chromedriver");
		driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
		driver.manage().timeouts().pageLoadTimeout(Duration.ofSeconds(10));
		
		driver.navigate().to("https://stockbit.com/");
		driver.findElement(By.className("login-ldn")).sendKeys(Keys.ENTER);
	}

	@When("User input username and password")
	public void user_input_username_and_password() {
		driver.findElement(By.name("username")).sendKeys("naufal1996");
		driver.findElement(By.name("password")).sendKeys("eeemmmxxx14");
		}

	@And("click login button")
	public void click_login_button() {
		driver.findElement(By.id("loginbutton")).sendKeys(Keys.ENTER);
	}

	@Then("user will redirect to the home page")
	public void user_will_redirect_to_the_home_page() {
		driver.findElement(By.xpath("/html/body/div[3]/div/div[2]/div/div[1]/div[1]")).isDisplayed();
		driver.findElement(By.xpath("/html/body/div[3]/div/div[2]/div/div[1]/div[2]/button[1]")).sendKeys(Keys.ENTER);
		driver.findElement(By.xpath("/html/body/div[1]/div/div[4]/div[2]/span/header/div/div[2]/div[2]/span[1]/a/i")).isDisplayed();
		driver.quit();
	}

}
