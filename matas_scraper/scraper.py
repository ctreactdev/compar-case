from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException, NoSuchElementException, ElementNotInteractableException
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.keys import Keys
import random
import psycopg2
import time

num = 0

def create_db_connection():
    connection = psycopg2.connect(
        database="initial_comar_db",
        user="postgres",
        password="Mikkel_compar!?",
        host="compar-case-db.csycqxkhpio6.eu-central-1.rds.amazonaws.com",
        port="5432"  # Default PostgreSQL port
    )
    return connection

def insert_product_data(connection, product_name, brand, price, category, ingredients, description, image_url):
    cursor = connection.cursor()
    insert_query = """
    INSERT INTO products (product_name, brand, price, category, ingredients, description, image_url)
    VALUES (%s, %s, %s, %s, %s, %s, %s)
    """
    cursor.execute(insert_query, (product_name, brand, price, category, ingredients, description, image_url))
    connection.commit()
    cursor.close()

# Create a WebDriver instance (Chrome in this case)
chrome_options = Options()
chrome_options.add_argument("user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3")
# chrome_options.add_argument("--headless")

driver = webdriver.Chrome(options=chrome_options)
driver.get("https://www.matas.dk")
driver.maximize_window()

# Wait for the cookies button to be clickable
cookiesBtn = WebDriverWait(driver, 10).until(
    EC.element_to_be_clickable((By.XPATH, "(//button[@aria-label='Accepter alle'])[1]"))
)

cookiesBtn.click()

# Wait for the "Søg produkter og artikler" button to be clickable
searchAllProducts = WebDriverWait(driver, 10).until(
    EC.element_to_be_clickable((By.XPATH, "//button[normalize-space()='Søg produkter og artikler']"))
)

searchAllProducts.click()

quickSearch = WebDriverWait(driver, 10).until(
    EC.presence_of_element_located((By.XPATH, "//input[@id='js-quicksearch-field']"))
)
quickSearch.send_keys("balsam")
quickSearch.send_keys(Keys.ENTER)

product_pr_page = WebDriverWait(driver, 10).until(
            EC.element_to_be_clickable((By.XPATH, "//div[@class='productlist__bottom']//a[@class='page-size__number js-pageSizeSelector'][normalize-space()='180']"))
        )

product_pr_page.click()

time.sleep(1)

product_links = [product.find_element(By.TAG_NAME, 'a').get_attribute('href') for product in driver.find_elements(By.CSS_SELECTOR, '[class^="CardContent__StyledCardContent"]')]

for product_link in product_links:
    driver.get(product_link)

    time.sleep(2)

    try:
        # Wait for the description content to be present
        description_content = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.XPATH, "//body//div//div[@data-js='viewContent']//div//div//div//div//div//div//div//div//div//div//div//div//div//div[1]//div[1]//div[1]"))
        ).text
    except (TimeoutException, NoSuchElementException, ValueError):
        description_content = ""

    try:
        # Wait for the price element to be present and clickable
        price_element = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.XPATH, "//span[contains(@class, 'Price__StyledText') and contains(@class, 'HorizontalPriceModule__StyledPrice') and contains(@class, 'Text__TextElement-sc-') and contains(@class, 'Price__StyledText-sc-')]"))
        )
        price = price_element.text
        price = price.replace(" kr.", "")
        price = float(price.replace(",", "."))
    except (TimeoutException, NoSuchElementException, ValueError):
        price = 0.0  # Set a default value

    try:
        product_name = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.XPATH, "//span[contains(@class, 'Text__TextElement-sc-') and contains(@class, 'Title__StyledText-sc-') and contains(@class, 'PageTitleNameRenderer__Title-sc-')]"))
        ).text
    except (TimeoutException, NoSuchElementException, ValueError):
        product_name = ""

    try:
        ingredienser_dropdwon = WebDriverWait(driver, 10).until(
            EC.element_to_be_clickable((By.XPATH, "//p[normalize-space()='Ingredienser']"))
        )
        
        ingredienser_dropdwon.click()
        ingredienser_text_element = WebDriverWait(driver, 10).until(
            EC.visibility_of_element_located((By.XPATH, "//div[@class='ProductInformation__Grid-sc-1qgonw7-0 gGrMZz']//div[@class='ProductAccordionItem__ContentContainer-sc-1rzxgex-1 bjXLZY js-active-accordion']/div"))
        )
        ingredienser_text = ingredienser_text_element.text
    except (TimeoutException, NoSuchElementException, ValueError):
        ingredienser_text = ""

    try:
        specifications = WebDriverWait(driver, 10).until(
            EC.element_to_be_clickable((By.XPATH, "//p[normalize-space()='Specifikationer']"))
        )
        time.sleep(1)
        specifications.click()
        time.sleep(1)
    except (TimeoutException, NoSuchElementException, ValueError):
        pass  # Handle this case as needed

    try:
        # Find the span with text "Mærke"
        brand_label = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.XPATH, "//span[normalize-space()='Mærke']"))
        )
        # Find brand
        brand = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.XPATH, "//span[normalize-space()='Mærke']/ancestor::tr/td[2]"))
        ).text
    except (TimeoutException, NoSuchElementException, ValueError):
        brand = ""

    try:
        category_label = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.XPATH, "//span[normalize-space()='Kategori']"))
        )
        category = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.XPATH, "//span[normalize-space()='Kategori']/ancestor::tr/td[2]"))
        ).text
    except (TimeoutException, NoSuchElementException, ValueError):
        category = ""

    try:
        # Add your logic here to extract other product information
        image_element = WebDriverWait(driver, 10).until(
            EC.visibility_of_element_located((By.XPATH, "//body/div/div[@data-js='viewMain']/div/div[@data-js='viewContent']/div/main/section/div/div/div/div/div/ul/li[1]/img[1]"))
        )
        # Get the value of the 'src' attribute
        image_url = image_element.get_attribute("src")
    except (TimeoutException, NoSuchElementException, ValueError):
        image_url = ""

    print("Product name:", product_name + "\n")
    print("Brand: ", brand + "\n")
    print("Price: ", price)
    print("Category: ", category + "\n")
    print("Ingredients: ", ingredienser_text + "\n")
    print("Description: ", description_content + "\n")
    print("Image_url: ", image_url + "\n")
    print("-----------------------------------------------")

    num += 1

    print(num)
    connection = create_db_connection()
    insert_product_data(connection, product_name, brand, price, category, ingredienser_text, description_content, image_url)
    connection.close()

    driver.back()

driver.quit()