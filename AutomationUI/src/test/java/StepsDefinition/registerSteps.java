package StepsDefinition;

import java.time.Duration;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import io.cucumber.java.en.*;


public class registerSteps {
	
	WebDriver driver = null;
	
	@Given("User on registration page")
	public void user_on_registration_page() {
		System.setProperty("webdriver.chrome.driver","/Users/mahfudhnaufal/eclipse-workspace/AutomationUI/src/test/resources/WebDriver/chromedriver");
		driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
		driver.manage().timeouts().pageLoadTimeout(Duration.ofSeconds(10));
		
		driver.navigate().to("https://stockbit.com/");
		driver.findElement(By.className("register-lnd")).sendKeys(Keys.ENTER);
	}

	@And("User choose register with email")
	public void user_choose_registration_with_email() {
		driver.findElement(By.xpath("/html/body/div[1]/div/div[4]/div/div[3]/div/div/form/div/a[2]")).sendKeys(Keys.ENTER);
		}

	@When("User input registration data")
	public void user_input_registration_data() {
		driver.findElement(By.id("input-1")).sendKeys("Mahfudh Naufal");
		driver.findElement(By.id("input-2")).sendKeys("mahfudhnaufal1414@gmail.com");
		driver.findElement(By.id("input-3")).sendKeys("arabxh14");
		driver.findElement(By.id("input-4")).sendKeys("aaabbbccc123");
		driver.findElement(By.id("input-5")).sendKeys("aaabbbccc123");
		driver.findElement(By.xpath("/html/body/div[1]/div/div[4]/div/div[3]/div/div/form/div/input")).sendKeys(Keys.ENTER);
	}
	
	@Then("User input phone number and will redirect to verification page")
	public void User_input_phone_number() {
		driver.findElement(By.xpath("/html/body/div[1]/div/div[4]/div/div[3]/div/div/div/div[2]/form/div[2]/div/input")).sendKeys("85716161212");
		driver.findElement(By.xpath("/html/body/div[1]/div/div[4]/div/div[3]/div/div/div/div[2]/form/div[2]/input[2]")).sendKeys(Keys.ENTER);
		driver.quit();
	}

}
