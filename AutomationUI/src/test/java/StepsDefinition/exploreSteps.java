package StepsDefinition;

import java.time.Duration;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import io.cucumber.java.en.*;


public class exploreSteps {
	
	WebDriver driver = null;
	
	@Given("User on homepage")
	public void User_on_homepage() {
		System.setProperty("webdriver.chrome.driver","/Users/mahfudhnaufal/eclipse-workspace/AutomationUI/src/test/resources/WebDriver/chromedriver");
		driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
		driver.manage().timeouts().pageLoadTimeout(Duration.ofSeconds(10));
		
		driver.navigate().to("https://stockbit.com/");
	}

	@And("User go to the investing menu")
	public void user_go_to_the_investing_menu() {
		driver.navigate().to("https://stockbit.com/info/mulai-investasi");
		}

	@And("User go to the pro tools menu")
	public void user_go_to_the_pro_tools_menu() {
		driver.navigate().to("https://stockbit.com/info/pro-tools");
	}
	
	@And("User go to academy menu")
	public void user_go_to_academy_menu() {
		driver.navigate().to("https://academy.stockbit.com/");	
	}
	
	@And("User go to about us menu")
	public void user_go_to_about_us_menu() {
		driver.navigate().to("https://stockbit.com/#/about");
	}
	
	@And("User go to blog menu")
	public void user_go_to_blog_menu() {
		driver.navigate().to("https://snips.stockbit.com/");
	}
	
	@When("User go to Help menu")
	public void user_go_to_Help_menu() {
		driver.navigate().to("https://help.stockbit.com/id/");
	}

	@Then("User will go back to homepage screen")
	public void user_will_go_back_to_homepage_screen() {
		driver.navigate().to("https://stockbit.com/");
		driver.quit();
	}

}
