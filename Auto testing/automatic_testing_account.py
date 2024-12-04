from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager
from selenium.common.exceptions import NoSuchElementException, TimeoutException
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

        # Stap 2: Zoek en klik op een knop, bijvoorbeeld een inlogknop
        try:
            inlog_knop = driver.find_element(By.CLASS_NAME, "header-content-bottom")
            inlog_knop.click()
            print("Stap 3: layover geopend")
            time.sleep(3)
            inlog_menu_knop = driver.find_element(By.XPATH, "/html/body/div[1]/div/div/div[1]/div[1]/div[2]/div[1]/div/div[2]/div[1]/div/div/div[1]/a/button").click()
            print("Stap 3.1: 'Se connecter' knop in het menu geklikt")
            time.sleep(3)
        except NoSuchElementException:
            log_fout("Stap 3:", "knop niet vindbaar")
            time.sleep(2)
            return
        # Stap 3: Inloggegevens invoeren
        try:
            gebruikersnaam_vak = driver.find_element(By.NAME, "username")
            gebruikersnaam_vak.send_keys("marlenatest@hotmail.com")
            time.sleep(2)
            wachtwoord_vak = driver.find_element(By.NAME, "password")
            wachtwoord_vak.send_keys("Welkom123!")
            print("Stap 4: Gebruikersnaam en wachtwoord ingevoerd")
            time.sleep(2)
        except NoSuchElementException:
            log_fout("Stap 4:", "Gebruikersnaam- of wachtwoordveld niet gevonden")
            time.sleep(2)
            return

        # Stap 4: Klik op inloggen
        try:
            inlog_bevestigen = driver.find_element(By.ID, "btn_login")
            inlog_bevestigen.click()
            print("Stap 5: Inloggen geklikt")
            time.sleep(2)
        except NoSuchElementException:
            log_fout("Stap 5:", "Inlog bevestigingsknop niet gevonden")
            time.sleep(2)
            return

        # Wacht even om de pagina te laten laden
        time.sleep(3)

        # Stap 5: Controleren of je bent ingelogd door een element te zoeken dat alleen zichtbaar is na inloggen
        try:
            welkom_tekst = driver.find_element(By.CLASS_NAME, "account-sidebar")
            print("Stap 5: Inloggen succesvol, welkom-tekst gevonden")
            time.sleep(2)
        except NoSuchElementException:
            log_fout("Stap 5:", "Welkom-tekst niet gevonden. Inloggen mislukt")
            time.sleep(2)
            return
        # Stap 6: klikken op wachtwoord veranderen
        try:
            klik_op_wachtwoord_veranderen = driver.find_element(By.XPATH, "/html/body/div[6]/div[4]/div/div/div[1]/div/div/div/div[2]/ul/li[3]")
            klik_op_wachtwoord_veranderen.click()
            print("Stap 6: Op de wachtwoord veranderen knop geklikt")
            time.sleep(2)
            oud_wachtwoord_vak = driver.find_element(By.NAME, "current_password")
            oud_wachtwoord_vak.send_keys("Welkom123!")
            print("Stap 6.1: Oud wachtwoord ingevoerd")
            time.sleep(2)
            new_wachtwoord_vak = driver.find_element(By.NAME, "password_modified")
            new_wachtwoord_vak.send_keys("Tester123!")
            print("Stap 6.2: Nieuw wachtwoord ingevoerd")
            time.sleep(2)
            check_wachtwoord_vak = driver.find_element(By.NAME, "confirm_password_modified")
            check_wachtwoord_vak.send_keys("Tester123!")
            print("Stap 6.3: 2e wachtwoord ingevuld")
            time.sleep(2)
            click_submit = driver.find_element(By.ID, "btn_change_password")
            click_submit.click()
            print("Stap 6.4: Op bevestigen drukken..")
            time.sleep(2)
            klik_weer_op_wachtwoord_veranderen = driver.find_element(By.XPATH, "/html/body/div[6]/div[4]/div/div/div[1]/div/div/div/div[2]/ul/li[3]/a")
            klik_weer_op_wachtwoord_veranderen.click()
            oud_wachtwoord_vak = driver.find_element(By.NAME, "current_password")
            oud_wachtwoord_vak.send_keys("Tester123!")
            print("Stap 6.5: Wachtwoord veranderen naar oude wachtwoord.....")
            time.sleep(2)
            new_wachtwoord_vak = driver.find_element(By.NAME, "password_modified")
            new_wachtwoord_vak.send_keys("Welkom123!")
            time.sleep(2)
            check_wachtwoord_vak = driver.find_element(By.NAME, "confirm_password_modified")
            check_wachtwoord_vak.send_keys("Welkom123!")
            time.sleep(2)
            click_submit = driver.find_element(By.ID, "btn_change_password")
            click_submit.click()
            time.sleep(2)
        except NoSuchElementException:
            log_fout("Stap 6:", "Wachtwoord veranderen knop niet gevonden")
            time.sleep(2)
            return

    except TimeoutException:
        print("Pagina duurde te lang om te laden.")
    finally:
        # Sluit de browser
        driver.quit()

# Start het testscript
test_stappen()