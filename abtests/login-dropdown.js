
if(document.querySelectorAll('.ab-custom-dropdown').length === 0) {
    var parser = new DOMParser();

    if(document.querySelector('.K1-header__content-bottom')) {
        if(document.querySelector('.K1-header__account').textContent.trim() === 'Log in') {
            document.querySelector('body').addEventListener('click', function(e) {
                if(!(e.target.closest('.ab-login-dropdown') || e.target.closest('.K1-header__account'))) {
                   hideLoginDropdown();
                }
            });
            // K1 type of header
            const desktopButton = document.querySelector('.K1-header__account-toggle');
            // paste tick stuff
            const svgTickTemplate = '<span class="K1-icon-down K1-icon-sm"></span>';
            var svgTick = parser.parseFromString(svgTickTemplate, 'text/html').body.firstChild;    
            desktopButton.append(svgTick);
        
            desktopButton.href = '#';
            desktopButton.addEventListener('click', function(e) {
                e.preventDefault();
                showLoginDropdown();
            });
        
            const styleElement = document.createElement('style');
            styleElement.textContent = '.header-content-bottom {position: relative;}.header-content-bottom > .sf-button {border-color: #fff;border-radius: 4px 4px 0 0;border-width: 1px;padding: 0 8px;}.ab-login-dropdown {position: absolute;right: 175px;bottom: 8px;left: auto;background-color: #fff;transform: translateY(calc(100% - 1px));width: calc(100vw - 16px);max-width: 420px;z-index: 11;display: none;}.ab-login-dropdown .items-container {padding: 16px;border: solid #dadada;border-width: 1px 1px 0;border-radius: 4px 0 0 0;}.ab-login-dropdown .inspiration-container {padding: 16px;background-color: #f0f0f0;border-radius: 0 0 4px 4px;}.ab-login-dropdown .empty-cart-container a:hover {color: #fff !important;}.ab-login-dropdown .sf-button--outline:hover {color: #ea580c;}.login-ul {list-style: none;flex-basis: 50%;padding: 0 .5rem 1rem 0;margin: 0;}.login-ul li {display: flex;align-items: flex-start;gap: .5rem;margin-bottom: 4PX;position: relative;top: -1px;}.header-content-bottom.has-login-dropdown > .sf-button {border-color: #dadada;}.has-login-dropdown .ab-login-dropdown {display: block;}@media(max-width: 768px) {.ab-login-dropdown {right: 8px !important;bottom: 60px;left: auto;transform: translateY(100%);max-width: calc(100% - 16px) !important;}.has-login-dropdown .mobile-user-button {background: white;}}.K1-header__account {position: relative;}.K1-header__account .dropdown-menu {display: none;top: 42px;right: 0;bottom: auto;left: auto;}.K1-header__account .K1-header__cart-extra .K1-header__cart-content__footer {margin-top: 1rem;}.K1-header__account.has-login-dropdown .dropdown-menu {display: block;}.has-login-dropdown .K1-header__account-toggle {border: 1px solid #DADADA;z-index: 1001;position: relative;background-color: #fff;border-bottom-color: #fff;border-bottom-left-radius: 0;border-bottom-right-radius: 0;}.K1-header__account .K1-icon-down {position: relative;left: 4px;}.has-login-dropdown .K1-icon-down {transform: rotate(-180deg);position: relative;top: -2px;}.K1-header__content-bottom {position: relative;z-index: 2000;}@media(max-width: 768px) {.K1-header__account .K1-icon-down {display: none;}.K1-header__account .dropdown-menu {top: 50px;right: -53px;}.K1-header__account .dropdown-menu a {font-size: 16px !important;}}';
            document.querySelector('head').append(styleElement);
    
            // inject dropdown
            const loginDropdownTemplate = '<div class="ab-custom-dropdown dropdown-menu K1-header__cart-dropdown"><div class="K1-header__cart-content K1-header__cart-empty ng-scope"><h3 class="K1-header__cart-content__title">Welkom terug</h3><p>Log in met jouw Kamera Express-account</p><div class="K1-header__cart-content__footer"><ul class="K1-header__cart-content__buttons list--buttons"><li><a class="K1-btn K1-btn-primary K1-btn-block K1-btn-lg" href="login">Inloggen</a></li></ul></div></div><div class="K1-header__cart-content K1-header__cart-extra ng-scope"><h3 class="K1-header__cart-content__title">Nieuw hier?</h3><p>Creëer jouw Kamera Express-account</p><ul class="login-ul"><li><svg data-v-1d5b8ca6="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path data-v-1d5b8ca6="" d="M5 14L9 18L19 8" stroke="#00A984" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><span>Sneller afrekenen</span></li><li><svg data-v-1d5b8ca6="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path data-v-1d5b8ca6="" d="M5 14L9 18L19 8" stroke="#00A984" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><span>Bestellingen beheren en volgen</span></li><li><svg data-v-1d5b8ca6="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path data-v-1d5b8ca6="" d="M5 14L9 18L19 8" stroke="#00A984" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><span>Persoonlijke verlanglijstjes bijhouden</span></li></ul><div class="K1-header__cart-content__footer"><ul class="K1-header__cart-content__buttons list--buttons"><li><a class="K1-btn K1-btn-outlined K1-btn-shadow K1-btn-white K1-btn-lg" ng-href="inspiratie" rel="nofollow" title="Bestellen" href="registratie">Account aanmaken</a></li></ul></div></div></div>';
            var loginDropdown = parser.parseFromString(loginDropdownTemplate, 'text/html').body.firstChild;
            document.querySelector('.K1-header__account').append(loginDropdown)
        }
    
    } else {
    
        if(document.querySelector('.login-button').textContent.trim() === 'Log in') {
            document.querySelector('body').addEventListener('click', function(e) {
                if(!(e.target.closest('.ab-login-dropdown') || e.target.closest('.mobile-top-bar'))) {
                   hideLoginDropdown();
                }
            });
        
            // other type of header
            // remove event listeners and add own
            const mobileButton = document.querySelector('.mobile-user-button');
            const desktopButton = document.querySelector('.header-content-bottom button');
            mobileButton.outerHTML = mobileButton.outerHTML;
            desktopButton.outerHTML = desktopButton.outerHTML;
        
            const newMobileButton = document.querySelector('.mobile-user-button');
            const newDesktopButton = document.querySelector('.header-content-bottom button');
            // add new event listeners
        
            newMobileButton.addEventListener('click', showLoginDropdown);
            newDesktopButton.addEventListener('mouseenter', showLoginDropdown);
        
            // paste tick stuff
            const svgTickTemplate = '<svg data-v-9d9a829e="" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-7d0215a8=""><path d="M3.5 6.33333L8.16667 11L12.8333 6.33333" stroke="currentColor" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round"></path></svg>';
            var svgTick = parser.parseFromString(svgTickTemplate, 'text/html').body.firstChild;    
            newDesktopButton.append(svgTick);
        
            // inject dropdown
    
            const styleElement = document.createElement('style');
            styleElement.textContent = '.header-content-bottom {position: relative;}.header-content-bottom > .sf-button {border-color: #fff;border-radius: 4px 4px 0 0;border-width: 1px;padding: 0 8px;}.ab-login-dropdown {position: absolute;right: 175px;bottom: 8px;left: auto;background-color: #fff;transform: translateY(calc(100% - 1px));width: calc(100vw - 16px);max-width: 420px;z-index: 11;display: none;}.ab-login-dropdown .items-container {padding: 16px;border: solid #dadada;border-width: 1px 1px 0;border-radius: 4px 0 0 0;}.ab-login-dropdown .inspiration-container {padding: 16px;background-color: #f0f0f0;border-radius: 0 0 4px 4px;}.ab-login-dropdown .empty-cart-container a:hover {color: #fff !important;}.ab-login-dropdown .sf-button--outline:hover {color: #ea580c;}.login-ul {list-style: none;flex-basis: 50%;padding: 0 .5rem 1rem 0;margin: 0;}.login-ul li {display: flex;align-items: flex-start;gap: .5rem;margin-bottom: 4PX;position: relative;top: -1px;}.header-content-bottom.has-login-dropdown > .sf-button {border-color: #dadada;}.has-login-dropdown .ab-login-dropdown {display: block;}@media(max-width: 768px) {.ab-login-dropdown {right: 8px !important;bottom: 60px;left: auto;transform: translateY(100%);max-width: calc(100% - 16px) !important;}.has-login-dropdown .mobile-user-button {background: white;}}.K1-header__account {position: relative;}.K1-header__account .dropdown-menu {display: none;top: 42px;right: 0;bottom: auto;left: auto;}.K1-header__account .K1-header__cart-extra .K1-header__cart-content__footer {margin-top: 1rem;}.K1-header__account.has-login-dropdown .dropdown-menu {display: block;}.has-login-dropdown .K1-header__account-toggle {border: 1px solid #DADADA;z-index: 1001;position: relative;background-color: #fff;border-bottom-color: #fff;border-bottom-left-radius: 0;border-bottom-right-radius: 0;}.K1-header__account .K1-icon-down {position: relative;left: 4px;}.has-login-dropdown .K1-icon-down {transform: rotate(-180deg);position: relative;top: -2px;}.K1-header__content-bottom {position: relative;z-index: 2000;}@media(max-width: 768px) {.K1-header__account .K1-icon-down {display: none;}.K1-header__account .dropdown-menu {top: 50px;right: -53px;}.K1-header__account .dropdown-menu a {font-size: 16px !important;}}';
            document.querySelector('head').append(styleElement);
    
            const loginDropdownTemplate = '<div data-v-9d9a829e="" class="ab-custom-dropdown ab-login-dropdown"><div data-v-9d9a829e="" class="items-container"><div data-v-9d9a829e="" class="empty-cart-container"><div data-v-9d9a829e="" class="empty-cart-text-container"><h5 data-v-9d9a829e="">Welkom terug</h5><p data-v-9d9a829e="">Log in met jouw Kamera Express-account</p></div><a href="login" data-v-7d0215a8="" class="sf-button">Inloggen</a></div></div><div data-v-9d9a829e="" class="inspiration-container"><div data-v-9d9a829e="" class="inspiration-text-container"><h5 data-v-9d9a829e="">Nieuw hier?</h5><p data-v-9d9a829e="">Creëer jouw Kamera Express-account</p><ul class="login-ul"><li><svg data-v-1d5b8ca6="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path data-v-1d5b8ca6="" d="M5 14L9 18L19 8" stroke="#00A984" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><span>Sneller afrekenen</span></li><li><svg data-v-1d5b8ca6="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path data-v-1d5b8ca6="" d="M5 14L9 18L19 8" stroke="#00A984" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><span>Bestellingen beheren en volgen</span></li><li><svg data-v-1d5b8ca6="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path data-v-1d5b8ca6="" d="M5 14L9 18L19 8" stroke="#00A984" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><span>Persoonlijke verlanglijstjes bijhouden</span></li></ul><a href="registratie" data-v-7d0215a8="" class="sf-button--outline sf-button">Account aanmaken</a></div></div></div>';
            var loginDropdown = parser.parseFromString(loginDropdownTemplate, 'text/html').body.firstChild;
            var loginDropdownMobile = parser.parseFromString(loginDropdownTemplate, 'text/html').body.firstChild;  
            newDesktopButton.after(loginDropdown);
            newMobileButton.after(loginDropdownMobile);
        }
    
       
    }
    
    function showLoginDropdown() {
        if(document.querySelector('.K1-header__content-bottom')) {
            // K1 type of header
                document.querySelector('.K1-header__account').classList.toggle('has-login-dropdown');
            
        } else {
            // other type of header
            document.querySelector('.header-content-bottom').classList.add('has-login-dropdown');
            document.querySelector('.mobile-buttons').classList.add('has-login-dropdown');
        }
    }
    
    function hideLoginDropdown() {
        if(document.querySelector('.K1-header__content-bottom')) {
            // K1 type of header
            document.querySelector('.K1-header__account').classList.remove('has-login-dropdown');
        } else {
            // other type of header
            document.querySelector('.header-content-bottom').classList.remove('has-login-dropdown');
            document.querySelector('.mobile-buttons').classList.remove('has-login-dropdown');
        }
    }
}




