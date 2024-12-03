(function () {
 
    if (document.querySelector('.ab-ke-registratie')) {
        return;
    }
    (function () {
 
        // embed this function in your test and run it
 
        function checkboxPart() {
 
            // inject CSS
            const se = document.createElement('style');
            se.textContent = 'span.custom-checkbox{top: 10px; left: 10px; background:url(data:image/svg+xml;base64,PHN2ZyBkYXRhLXYtMmIzNzExOWE9IiIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB2aWV3Qm94PSIwIDAgMjAgMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgY2xhc3M9ImNoZWNrYm94LWljb24iPjxyZWN0IHg9IjAuNSIgeT0iMC41IiB3aWR0aD0iMTkiIGhlaWdodD0iMTkiIHJ4PSIzLjUiIGZpbGw9IndoaXRlIiBzdHJva2U9ImN1cnJlbnRDb2xvciI+PC9yZWN0Pjwvc3ZnPg==);width:20px;height:20px;display:block;background-size:cover;position:absolute}.checkbox label{padding-left:40px}.checkbox input{display:none}.checkbox input:checked+span.custom-checkbox{background:url(data:image/svg+xml;base64,PHN2ZyBkYXRhLXYtMmIzNzExOWE9IiIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB2aWV3Qm94PSIwIDAgMjAgMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgY2xhc3M9ImNoZWNrYm94LWljb24iPjxwYXRoIGQ9Ik0wIDRDMCAxLjc5MDg2IDEuNzkwODYgMCA0IDBIMTZDMTguMjA5MSAwIDIwIDEuNzkwODYgMjAgNFYxNkMyMCAxOC4yMDkxIDE4LjIwOTEgMjAgMTYgMjBINEMxLjc5MDg2IDIwIDAgMTguMjA5MSAwIDE2VjRaIiBmaWxsPSIjRUE1ODBDIj48L3BhdGg+IDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTUuMTM1NiA2Ljg2MTgxQzE1LjM5NTMgNy4xMjE1IDE1LjM5NTMgNy41NDI1NiAxNS4xMzU2IDcuODAyMjZMOC40Njg5MiAxNC40Njg5QzguMjA5MjIgMTQuNzI4NiA3Ljc4ODE3IDE0LjcyODYgNy41Mjg0NyAxNC40Njg5TDQuODYxODEgMTEuODAyM0M0LjYwMjExIDExLjU0MjYgNC42MDIxMSAxMS4xMjE1IDQuODYxODEgMTAuODYxOEM1LjEyMTUgMTAuNjAyMSA1LjU0MjU2IDEwLjYwMjEgNS44MDIyNiAxMC44NjE4TDcuOTk4NyAxMy4wNTgyTDE0LjE5NTEgNi44NjE4MUMxNC40NTQ4IDYuNjAyMTEgMTQuODc1OSA2LjYwMjExIDE1LjEzNTYgNi44NjE4MVoiIGZpbGw9IndoaXRlIj48L3BhdGg+PC9zdmc+)}.custom-radiobutton{display:block;width:20px;height:20px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAuCAMAAABkkgs4AAAAe1BMVEX////6+vr8/Pz19fWnp6fc3NyqqqqkpKTe3t7i4uLZ2dn39/fr6+vw8PCzs7Pp6enl5eXV1dXFxcW4uLjJycmhoaHMzMywsLCbm5uYmJi8vLz5+fm6urrv7+/y8vKenp6+vr7t7e3b29vQ0NDOzs6tra3Ly8vBwcGysrIHQi6xAAACd0lEQVRIx73V2ZKbMBAFUGy19gUJsdisXrBn/v8L02BXnDADrslD+vmUqkGt28nuB/WfcKNJl3opqFLqIoT0xupVrIlReV1BcTgeD/zm6lLYFaz7lJYndwM+TLgAVsUsyNTqb3Av72woWMzGcKFUhTJrK+BVLuwXTAzNXTGwdhSG7JNkZz29fnwCfGb0TBbYXCPnbUnTjjRok/1u+lqpMuB1OP+FyVlF4C6YJvmr9kREzmplyB/4HGrOcmnx0IXuZc54vJrfWFtaM3byuyWd2/E1QKS9fmIrMg53T77auROfc57L/onT3EGUr3OXZ0vH3T3VzYxlBZno0a7oLrQFo0Qj1jYAKOxhtRpTDkNpSDJ3zJzcsMm+oaw4qQ6xKdvqI002K22Zy1PE/lS1V7uNuzHeao9YOpYJso2JyKCSiMUNSq+3cWPGAsSEeRHsbhvvSRgKivhyOCi8kDd6UojV8UiTt0WPx5/jw+HytotZIabFEMgbvbOh4PPfAD6aZhtrX8JtwrKC95dCp/lB7OtbHLs3131tK7zuefRZ+26QPqpYGsSdOuFoN5szOs+PRUweo91sWKKABzu/FIKj3Qa7X7X9PHPzg210enfcbT3YCJ95ivgRidNjX4+CO3Ds+Il1TyOsh8yJsZpajfgVi+wu+y/ppTuMr0c0voLRqJpBFMtOtAmOQ1Rn8sSvaIRMSYxcPbezbzByadnyKRaXYX6mmQNwH1fq7Q4tMWJscRW4nBqywFPY5BWwqs3KoCi9hDGLrBimL/luAdlUBtwj7LGtBg43d8JV0OsFfp0+7Sv+2FZVnStDkK5gbY2XQlyUUlRIP31t84/r+BdRei2zZmxYTQAAAABJRU5ErkJggg==);position:absolute;left:-4px;background-size:cover}.ab-radioactive .custom-radiobutton{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAuCAMAAABkkgs4AAAA21BMVEXqWAv6+vr////rXBHrZCD68Or//Pr51MXrXhf69/b418fwh1bsaCr69fLwglTtcDb45t3+9/H57OX43c/63M33y7f3uZ7zqYbzn3jym3HxlmrxgE/rZib++ff96+P56eH44db42cr20b31wqj1vqLzsZD1o370onvwiVrwhFDvgE3vekbuekHteD3ucjrtbjPtay3rYR7559/6+fj85dv84tT53dD70L/6zLn6yLT2x7D5xq31war4vaP0tJfzrYrypoHypX/zm3Pxk2fxjV/uh1Lve0jvfEbtdUALkXodAAACyElEQVRIx72V2bKiMBRF7SthSEAQBJmcUBBFcZ6u8+z/f1FHiyLYyK3qfuj9mKxKJefs7JP79Rf6P/CEE2SprjQgg9UozetjwGXCnDB2WnvdvKBCwT8bbbcJQQbMAYnZlM1rf0jlczmWF3vIcFVFAtwHGCjNk/UY8BSL2VyeHVG8GPh6C4IULNSgZoSYe1Oe6ps7KAt/wLXvAxJHMUvoASqr8hssyM6xa+c+ikdlpyYkYFktd232M8zy3eN3LYY5AMuIz2XK7h4g4CIYwB3i2WyYtZGmgAiWWuYg96NEoylxkxes6H3qZ3gUnhiBwzAHVJ/Kk2LZ4c0qFKxATC6y1mYsYBhAN0gsU3dvu1owS03vJelH2ZExPG4aIlkcdjx1Cip0cbZud4aEHpgtCcN1F/Hk3I5WqhZp+osuVktah5zNX/d1DM/bvfh5VK9dqtBfL9GVkne3452+rmC4ZIijuET6uorZiK6qXhjXemg2MNw4k4YE2qz4Fas43d7IBS8Qw4xPjGktizSBabCyyNMR84QLpPgFJmKjWy+Seyl4UXmjmRSMSDWtFUheo7i0SA/9JwwvpJq37TT5wJkWEFefX9Uwh3E1Qk9Nlm6ti7GVRKOE4aTn7LuXbMp7u+bPdu+vqXZ/0al2Ixe3O7I+MVJ7PSvSFTBVPWykpP3HGJad8iNp0Z6uLZnFauvdkxYNXAgwLIw3FpukxeBp/ltoJxd9Fbx+isCcwlEuQ8Rzrw874SRi/7SI9aMoUDRk/xQFPNpBQELmEIVXVoBFIRPF4rHLs1kR08XRmAzGmpMZYHb36MgkGKNoRAMqHbkjER2iWCSwIMOd2Y/p2JihocGakB4TsKX7gchTo2hOUPzgYZ2aCvg8gBTVNVBP5FnMUsP+1SxvmPQAIqc33bZx9gsFdDH1fcuRBIxmwBwY1+elBoMFG0pdkgVu8q/j+DcfH0m/PjoE4wAAAABJRU5ErkJggg==);background-size:cover}';
            document.querySelector('head').append(se);
 
            // the class we style custom checkboxes with
            const ACTIVE_CLASS = 'ab-radioactive';
            // we assume that in the beginning persoon is active
            // we have to since there is no other way of determining it with
            // angular setup
            let CURRENT_ACTIVE_SELECTOR = 'persoon';
 
            // events are used to add ACTIVE_CLASS
            // we need to rerun it in the observer, since they will be gone after
            // angular rerenders stuff.
            function addEvents() {
                const boxes = document.querySelectorAll('.radio-inline');
                boxes.forEach(b => {
                    b.addEventListener('click', function (e) {
                        if (e.target.closest('.radio-inline').classList.contains('persoon')) {
                            CURRENT_ACTIVE_SELECTOR = 'persoon';
                        } else {
                            CURRENT_ACTIVE_SELECTOR = 'bedrijf';
                        }
                    })
                })
            }
 
            // this is just adding <spans> after input elements
            // must be run within observer casue spans will be gone
            // after repaint.
            function createCustomRadioButtons() {
                setTimeout(function () {
                    const currentRadioButtons = document.querySelectorAll('.radio-inline input');
                    if (currentRadioButtons) {
                        currentRadioButtons.forEach(cc => {
 
                            cc.after(
                                new DOMParser().parseFromString('<span class="custom-radiobutton"></span>', 'text/html').body.firstChild
                            )
                            const container = cc.closest('.radio-inline');
                            if (container) {
                                //console.log(CURRENT_ACTIVE_SELECTOR);
                                // console.log(container.classList.contains(CURRENT_ACTIVE_SELECTOR));
                                if (container.classList.contains(CURRENT_ACTIVE_SELECTOR)) {
                                    container.classList.add(ACTIVE_CLASS);
                                }
 
                                const labelElem = container.querySelector('label');
                                if(labelElem) {
                                    const newLabel = new DOMParser().parseFromString('<div class="ab-particulier">Particulier</div>', 'text/html').body.firstChild;
                                    labelElem.append(newLabel);
                                }
 
                            }
                        })
                    }
                }, 10);
            }
            function createCustomCheckboxOne() {
                const parser = new DOMParser();
                const customSpan = parser.parseFromString('<span class="custom-checkbox"></span>','text/html').body.firstChild;
                const firstSpanParent = document.querySelector('#fe_newsletter .checkbox label');
                firstSpanParent.append(customSpan);
            }
            function createCustomCheckboxTwo() {
                const parser = new DOMParser();
                const customSpan = parser.parseFromString('<span class="custom-checkbox"></span>','text/html').body.firstChild;
                const secondSpanParent = document.querySelector('#fe_recommendations_commerce .checkbox label');
                secondSpanParent.append(customSpan);
            }
 
 
            createCustomRadioButtons();
            createCustomCheckboxOne();
            createCustomCheckboxTwo();
            addEvents();
 
            // mount observer for monitoring changes and rerunning custom checkboxes creation
            // and adding events
            const watchedElement = document.querySelector('#fe_per_org');
            var observer = new MutationObserver(function (mutationRecords) {
                createCustomRadioButtons();
                addEvents();
            });
 
            observer.observe(watchedElement, {
                childList: true
            });
        }
 
 
        checkboxPart();




        
 
        const mainFieldset = document.querySelector('.ke-registratie');
        if (mainFieldset) {
            mainFieldset.classList.add('ab-ke-registratie');
            // inject css styles
            const styleElement = document.createElement('style');
            styleElement.textContent = 'input.form-control.ng-pristine.ng-untouched.ng-valid-email.ng-invalid.ng-invalid-required {width:70%;}.bedrijf label{font-weight:200}.ab-particulier {font-weight: 200 !important;}.button_and_privacy a:hover {color:#ea580c !important}.bedrijf .ab-particulier {display: none; } .ab-particulier{position:absolute;top:0;left:0;background:#f4f4f4;top:7px;left:20px}.persoon{padding-right:20px}.type_of_customer{padding:20px 0px 0px 15px;}.row.button_and_privacy a{text-decoration:underline;color:#646363;}.row.button_and_privacy{background-color:#fff;padding-left:15px;padding-top:30px}#form{box-shadow:none}ul.ke-registration-benefits li {display:none;} .showItem{ display:block !important}.ke-voordelen{margin-top:0;} .ke-voordelen h3{display:none;}.ke-voordelen p{display:none;} input#register {padding: 12px 24px; text-transform:capitalize;box-shadow:none;font-size:16px;}.form_header h3{margin: 40px 0px 20px 0;}.form_header p{background-color:#fff;margin-top:-20px}.voorkeuren{padding-left:15px;font-weight:900}.voorkeuren span{font-weight:30}#group legend{display:none}#row_organization label{display:none}#row_btw label{display:none}#row_prefix_surname label{display:none}#row_prefix_surname{max-width:22px;min-width:22px;visibility:hidden}#row_first_name label{display:none}#row_surname label{display:none}#row_email label{display:none}#row_password label{display:none}#row_confirm_password label{display:none}#fe_privacy_policy label{display:none}#row_register input{transform: translateY(85px) translateX(15px);}#form h3{ display:none; } #form { box-shadow:none; background-color: rgba(233,233,233,0.5);}#row_per_org{ width:100%; } input[type="radio"] {accent-color: #EA580C;} .ke-registratie{ padding-bottom: 40px; display:flex;flex-wrap:wrap;gap:.5rem;position:relative;}.ke-registratie>div{display:flex!important;flex-direction:column;width:100%;justify-content:flex-end}#row_register{position:absolute;bottom:0;right:0;width:auto}.K1-footer__content-middle,.K1-footer__content-top,.ke-registration-benefits span{display:none}.ke-registration-benefits li{display:flex;align-items:center;gap:.5rem}.ke-registration-benefits svg{max-width: 20px;min-width: 20px;width:20px; transform: translateY(6px) translateX(-2px);} .ke-voordelen { margin-left: 0 !important; } @media(max-width: 767px) {  .K1-footer .K1-footer__methods-list li a { padding: 0; } .K1-footer .K1-footer__methods-list li img { height: 20px !important; } .K1-footer .K1-footer__methods { transform: translateY(-16px); } } @media(min-width: 768px) { #row_first_name,#row_prefix_surname,#row_surname{max-width:52%;min-width:52%;} #row_btw,#row_confirm_password,#row_organization,#row_password{width:52%}#form{width: 60%;}.ke-voordelen{width: 31.666667%;} .ke-registratie{padding-bottom: 0;} .button_and_privacy p {margin-right:20px;color:#646363;font-size:14px;} .ke-voordelen {margin-left: 97px !Important;} }@media(max-width:768px) { .button_and_privacy {padding-right: 140px}}';
            document.querySelector('head').append(styleElement);
 
            // Benefits of signing up
            const parser = new DOMParser();
            const liParent = document.querySelector('.ke-registration-benefits')
            const liOne = parser.parseFromString('<li class="showItem">Registratie is gratis en gemakkelijk</li>','text/html').body.firstChild;
            const liTwo = parser.parseFromString('<li class="showItem">Nóg sneller bestellingen plaatsen en je voorkeuren behouden</li>','text/html').body.firstChild;
            const liThree = parser.parseFromString('<li class="showItem">Je eerdere bestellingen bekijken</li>','text/html').body.firstChild;
            const liFour = parser.parseFromString('<li class="showItem">Meerdere verzendadressen opslaan</li>','text/html').body.firstChild;
            const liFive = parser.parseFromString('<li class="showItem">Een gepersonaliseerde beleving</li>','text/html').body.firstChild;
            const liSix = parser.parseFromString('<li class="showItem">Aan- en afmeldingen van nieuwsbriefabonnementen</li>','text/html').body.firstChild;
            
            liParent.append(liOne, liTwo, liThree, liFour, liFive, liSix);
            const svgTickSvg = parser.parseFromString('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path data-v-1d5b8ca6="" d="M5 14L9 18L19 8" stroke="#00A984" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>', 'text/html').body.firstChild;
            const registerListItems = document.querySelectorAll('.ke-registration-benefits li');
 
            if (registerListItems.length) {
                registerListItems.forEach((li) => {
                    li.prepend(svgTickSvg.cloneNode(true));
                });
            }

            //Registration form
            const organization = document.getElementById('row_organization');
            if (organization) {
                organization.querySelector("input[type=text]").setAttribute("placeholder", "Bedrijfsnaam");
            }
            const btw = document.getElementById('row_btw');
            if (btw) {
                btw.querySelector("input[type=text]").setAttribute("placeholder", "BTW-nummer");
            }
            const prefix = document.getElementById('row_prefix_surname');
            if (prefix) {
                prefix.style.visibility = 'hidden';
                prefix.style.maxWidth = '22px';
                prefix.style.minWidth = '22px';
            }
            const firstName = document.getElementById('row_first_name');
            if (firstName) {
                firstName.querySelector("input[type=text]").setAttribute("placeholder", "Voornaam");
            }
 
            const surName = document.getElementById('row_surname');
            if (surName) {
                surName.querySelector("input[type=text]").setAttribute("placeholder", "Achternaam");
            }
            const email = document.getElementById('row_email');
            if (email) {
                email.querySelector("input[type=email]").setAttribute("placeholder", "E-mailadres");
            }
            const password = document.getElementById('row_password');
            if (password) {
                password.querySelector("input[type=password]").setAttribute("placeholder", "Wachtwoord");
            }
            const confirmPassword = document.getElementById('row_confirm_password');
            if (confirmPassword) {
                confirmPassword.querySelector("input[type=password]").setAttribute("placeholder", "Bevestig wachtwoord");
            }
 
        }
 
    })();
 
    const parser = new DOMParser();
 
    const formHeader = parser.parseFromString('<div class="form_header"><h3>Start jouw foto-avontuur</h3><p>Creëer nu jouw Kamera Express-account en geniet van alle voordelen</p></div>','text/html').body.firstChild;
    const formParent = document.querySelector('.row')
    formParent.append(formHeader);
 
    const typeOfCustomer = parser.parseFromString('<div class="type_of_customer"><p><strong>Type klant<strong></p></div>','text/html').body.firstChild;
    const typeOfCustomerParent = document.querySelector('#row_per_org')
    typeOfCustomerParent.prepend(typeOfCustomer);
 
    const privacyElement = parser.parseFromString('<div class="row button_and_privacy"><p>Lees hoe wij je gegevens gebruiken in <a href="/privacy-policy">ons privacybeleid</a>.</p></div>','text/html').body.firstChild;
    const privacyParent = document.querySelector('#form')
    privacyParent.append(privacyElement);
 
 
    const subscriptionHeader = parser.parseFromString('<div class="voorkeuren"><p><strong>E-mail voorkeuren<strong><span> (optioneel)</span></p></div>','text/html').body.firstChild;
    const subscriptionParent = document.querySelector('#row_newsletter')
    subscriptionParent.prepend(subscriptionHeader);

    const benefitsHeader = parser.parseFromString('<div class="header_benefit"><h4>Sluit je aan bij meer dan 100.000 andere beeldmakers</h4></div>','text/html').body.firstChild;
    const benefitsParent = document.querySelector('.ke-voordelen')
    benefitsParent.prepend(benefitsHeader);
})();