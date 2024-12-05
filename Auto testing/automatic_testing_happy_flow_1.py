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
            # Zoek het carousel
            carousel = WebDriverWait(driver, 10).until(
                EC.presence_of_element_located((By.CLASS_NAME, "ke-carousel"))
            )
            print("Stap 3: Carousel gevonden")
            
            # Zoek alle <a>-tags binnen de carousel
            links = carousel.find_elements(By.TAG_NAME, "a")
            if links:
                # Beperk de links tot de eerste vijf
                limited_links = links[:6]
                
                if limited_links:
                    # Kies een willekeurige link uit de eerste vijf
                    random_link = random.choice(limited_links)
                    # Scroll naar het element (voor zekerheid)
                    driver.execute_script("arguments[0].scrollIntoView({block: 'center'});", random_link)
                    time.sleep(1)
                    # Klik op de willekeurige link
                    random_link.click()
                    print("Stap 4: Willekeurige link (tussen 1-6) in de carousel aangeklikt")
                else:
                    log_fout("Stap 4", "Geen links gevonden in de eerste vijf posities van het carousel")
            else:
                log_fout("Stap 4", "Geen links gevonden in de carousel")
        except TimeoutException:
            log_fout("Stap 3", "Carousel niet gevonden")
        except Exception as e:
            log_fout("Stap 4", f"Fout bij het klikken op een willekeurige link (tussen 1-5): {e}")
        # Stap 4: kies een willekeurig product
        try:
            # Zoek het carousel
            carousel = WebDriverWait(driver, 10).until(
                EC.presence_of_element_located((By.CLASS_NAME, "product-grid"))
            )
            print("Stap 4: Grid gevonden")
            
            # Zoek alle <a>-tags binnen de carousel
            links = carousel.find_elements(By.TAG_NAME, "a")
            if links:
                # Beperk de links tot de eerste vijf
                limited_links = links[:12]
                
                if limited_links:
                    # Kies een willekeurige link uit de eerste vijf
                    random_link = random.choice(limited_links)
                    # Scroll naar het element (voor zekerheid)
                    driver.execute_script("arguments[0].scrollIntoView({block: 'center'});", random_link)
                    time.sleep(1)
                    # Klik op de willekeurige link
                    random_link.click()
                    print("Stap 4: Willekeurige link (tussen 1-12) in de carousel aangeklikt")
                else:
                    log_fout("Stap 4", "Geen links gevonden in de eerste twaalf posities van het carousel")
            else:
                log_fout("Stap 4", "Geen links gevonden in de carousel")
        except TimeoutException:
            log_fout("Stap 3", "Carousel niet gevonden")
        except Exception as e:
            log_fout("Stap 4", f"Fout bij het klikken op een willekeurige link (tussen 1-12): {e}")

    except TimeoutException:
        print("Pagina duurde te lang om te laden.")
    finally:
        # Sluit de browser
        driver.quit()

# Start het testscript
test_stappen()