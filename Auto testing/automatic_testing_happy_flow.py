from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager
from selenium.common.exceptions import NoSuchElementException, TimeoutException
import random
import time

# New
# Instellen van de WebDriver (Chrome)
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))

def log_fout(stap, fout):
    print(f"Fout in stap '{stap}': {fout}")

def test_stappen():
    try:
        # Stap 1: Ga naar de website
        driver.get("https://www.kamera-express.lu/")
        print("Stap 1: Website geopend")
        time.sleep(2)
        # Stap 1.1: Klik de cookie melding weg
        try:
            inlog_knop = driver.find_element(By.CLASS_NAME, "accept")
            inlog_knop.click()
            print("Stap 2: Cookie knop gevonden en geklikt")
            time.sleep(2)
        except NoSuchElementException:
            log_fout("Stap 2:", "Cookie knop niet gevonden")
            time.sleep(2)
            return
        # Stap 3: Zoek naar het carousel-element
        try:
            carousel = WebDriverWait(driver, 10).until(
                EC.presence_of_element_located((By.CLASS_NAME, "ke-carousel"))
            )
            print("Stap 3: Carousel gevonden")

            # Zoek alle <a>-tags binnen de carousel
            links = carousel.find_elements(By.TAG_NAME, "a")
            random_link = random.choice(links)
            # if links:
            #     # Kies een willekeurige <a>-tag
            #     random_link = random.choice(links)
            #     random_link.click()
            #     print("Stap 4: Willekeurige link in de carousel aangeklikt")
            # else:
            #     log_fout("Stap 4", "Geen links gevonden in de carousel")
            if random_link.is_displayed() and random_link.is_enabled():
                random_link.click()
                print("Stap 4: Willekeurige link in de carousel aangeklikt")
            else:
                log_fout("Stap 4", "De willekeurige link is niet interactief")
        except TimeoutException:
            log_fout("Stap 3", "Carousel niet gevonden")
        except Exception as e:
            log_fout("Stap 4", f"Fout bij het selecteren van een willekeurige link: {e}")


    except TimeoutException:
        print("Pagina duurde te lang om te laden.")
    finally:
        # Sluit de browser
        driver.quit()

# Start het testscript
test_stappen()