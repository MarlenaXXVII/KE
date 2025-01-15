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
            log_fout("Stap 2", "Cookie knop niet gevonden")
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
                limited_links = links[:5]
                
                if limited_links:
                    # Kies een willekeurige link uit de eerste vijf
                    random_link = random.choice(limited_links)
                    # Scroll naar het element (voor zekerheid)
                    driver.execute_script("arguments[0].scrollIntoView({block: 'center'});", random_link)
                    time.sleep(1)
                    # Klik op de willekeurige link
                    random_link.click()
                    print("Stap 3: Willekeurige link (tussen 1-5) in de carousel aangeklikt")
                else:
                    log_fout("Stap 3", "Geen links gevonden in de eerste vijf posities van het carousel")
            else:
                log_fout("Stap 3", "Geen links gevonden in de carousel")
        except TimeoutException:
            log_fout("Stap 3", "Carousel niet gevonden")
        except Exception as e:
            log_fout("Stap 3", f"Fout bij het klikken op een willekeurige link (tussen 1-5): {e}")
        
        # Stap 4: Kies een willekeurig product en controleer beschikbaarheid
        def check_availability_and_retry():
            try:
                # Zoek naar de availability-wrapper
                time.sleep(2)  # Wacht tot de pagina volledig geladen is
                availability_wrapper = WebDriverWait(driver, 10).until(
                    EC.presence_of_element_located((By.CLASS_NAME, "availability-wrapper"))
                )
                print("Stap 4: Availability-wrapper gevonden")
                
                # Zoek de eerste <span> binnen de availability-wrapper
                spans = availability_wrapper.find_elements(By.TAG_NAME, "span")
                
                if spans and ("available" in spans[0].get_attribute("class") or "soon-available" in spans[0].get_attribute("class")):
                    print("Stap 4: Product is beschikbaar.")
                    # Zoek de add-to-cart-knop
                    try:
                        add_to_cart_div = WebDriverWait(driver, 10).until(
                            EC.presence_of_element_located((By.CLASS_NAME, "add-to-cart-button"))
                        )
                        add_to_cart_button = add_to_cart_div.find_element(By.TAG_NAME, "button")
                        
                        # Klik op de knop
                        add_to_cart_button.click()
                        print("Stap 4: Product is toegevoegd aan de winkelwagen.")
                        time.sleep(10)
                        return True  # Product is beschikbaar en toegevoegd
                    except TimeoutException:
                        print("Stap 4: Add-to-cart-knop niet gevonden.")
                        return False  # Knop niet gevonden, terug naar PLP
                    except Exception as e:
                        print(f"Stap 4: Fout bij het klikken op de add-to-cart-knop: {e}")
                        return False  # Algemene fout, terug naar PLP
                else:
                    print("Stap 4: Product is niet beschikbaar, probeer een ander.")
                    driver.back()  # Ga terug naar de vorige pagina
                    time.sleep(2)  # Wacht tot de vorige pagina is geladen
                    return False  # Niet beschikbaar, probeer opnieuw
            except TimeoutException:
                print("Stap 4: Availability-wrapper niet gevonden.")
                driver.back()  # Ga terug naar de vorige pagina
                time.sleep(2)  # Wacht tot de vorige pagina is geladen
                return False  # Niet beschikbaar, probeer opnieuw
        
        # Herhalingslus: blijf proberen tot een beschikbaar product wordt gevonden
        product_found = False
        while not product_found:
            try:
                # Zoek het grid
                product_grid = WebDriverWait(driver, 10).until(
                    EC.presence_of_element_located((By.CLASS_NAME, "product-grid"))
                )
                print("Stap 5: Grid gevonden")
                
                # Zoek alle <a>-tags binnen de grid
                product_links = product_grid.find_elements(By.TAG_NAME, "a")
                if product_links:
                    # Beperk de links tot de eerste twaalf
                    limited_links = product_links[:12]
                    
                    if limited_links:
                        # Kies een willekeurige link
                        random_link = random.choice(limited_links)
                        # Scroll naar het element (voor zekerheid)
                        driver.execute_script("arguments[0].scrollIntoView({block: 'center'});", random_link)
                        time.sleep(1)
                        # Klik op de willekeurige link
                        random_link.click()
                        print("Stap 5: Willekeurige link (tussen 1-12) in de grid aangeklikt")
                        
                        # Controleer beschikbaarheid
                        product_found = check_availability_and_retry()
                    else:
                        log_fout("Stap 5", "Geen links gevonden in de eerste twaalf posities van het grid")
                else:
                    log_fout("Stap 5", "Geen links gevonden in de grid")
            except TimeoutException:
                log_fout("Stap 5", "Grid niet gevonden")
            except Exception as e:
                log_fout("Stap 5", f"Fout bij het selecteren van een product: {e}")
    except TimeoutException:
        print("Pagina duurde te lang om te laden.")
    finally:
        # Sluit de browser
        driver.quit()

# Start het testscript
test_stappen()
