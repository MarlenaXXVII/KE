const minicart = document.querySelector('#K1-header__cart, .mini-cart-button-container');

function onMinicartOpen() {
    function checkAccountOrLogin(selector) {
        var myDiv = document.querySelector(selector);
        if (myDiv) {
            var divText = myDiv.textContent.trim();
            if (divText === "Log in") {} else {
                // Bepaal of we op mobiel of desktop zijn
                var isNotMobile = window.innerWidth >= 768; // Aannemen dat < 768px breedte mobiel is

                if (isNotMobile) {
                    // Desktop versie
                    var buttons = document.querySelectorAll('.cart-price-box-row.buttons .sf-button');
                    if (buttons.length >= 2) {
                        var bestellenButton = buttons[3]; 
                        var href = "/checkout";
                        var styleButton = "padding: 15px; color: white";
                        bestellenButton.setAttribute('style', "padding: 0px;");
                        bestellenButton.innerHTML = "<a style='" + styleButton + "' href='" + href + "'>Direct bestellen</a>";
                    } else {
                        var primaryButton = document.querySelector('.K1-btn-primary');
                        if (primaryButton) {
                            primaryButton.innerHTML = "Direct bestellen";
                            primaryButton.href = "/checkout";
                        }
                    }
                } else {
                    // Mobiele versie - gebruik een andere selector voor de knoppen
                    var buttons = document.querySelectorAll('.cart-price-box-row.buttons .sf-button');
                    if (buttons.length >= 2) {
                        var bestellenButton = buttons[1];
                        var href = "/checkout";
                        var styleButton = "padding: 15px 120px; color: white";
                        bestellenButton.setAttribute('style', "padding: 0px;");
                        bestellenButton.innerHTML = "<a style='" + styleButton + "' href='" + href + "'>Direct bestellen</a>";
                    }
                    else{
                        var primaryButton = document.querySelector('.K1-btn-primary');
                        if (primaryButton) {
                            primaryButton.innerHTML = "Direct bestellen";
                            primaryButton.href = "/checkout";
                        }
                    }
                }
            }
        }
    }
    checkAccountOrLogin(".login-button");
    checkAccountOrLogin(".K1-header__account-toggle > .K1-btn-label");
}

// Maak een observer aan
const observer = new MutationObserver((mutationsList) => {
    mutationsList.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
            if (minicart.classList.contains('open') || minicart.classList.contains('is-open')) {
                onMinicartOpen();
            }
        }
    });
});
observer.observe(minicart, {
    attributes: true
});


const isLoggedOut = (document.querySelector(".K1-header__account-toggle > .K1-btn-label").textContent === 'Log in') || 
document.querySelector(".login-button").textContent.trim() === 'Log in' ? true : false;

console.log(isLoggedOut);















// const minicart = document.querySelector('#K1-header__cart, .mini-cart-button-container');

// function onMinicartOpen() {
//     function checkAccountOrLogin(selector) {
//         var myDiv = document.querySelector(selector);
//         if (myDiv) {
//             var divText = myDiv.textContent.trim();
//             if (divText === "Log in") {} else {
//                 var buttons = document.querySelectorAll('.cart-price-box-row.buttons .sf-button');
//                 if (buttons.length >= 2) {
//                     var bestellenButton = buttons[3];
//                     var mobielBestellenButton = buttons[1];
//                     var href = "/checkout";
//                     var styleButton = "padding: 15px; color: white";
//                     bestellenButton.setAttribute('style', "padding: 0px;");
//                     bestellenButton.innerHTML = "<a style='" + styleButton + "' href='" + href + "'>Direct bestellen</a>";
//                     mobielBestellenButton.innerHTML = "<a>Direct bestellen</a>";
//                 } else {
//                     document.querySelector('.K1-btn-primary').innerHTML = ("Direct bestellen");
//                     document.querySelector('.K1-btn-primary').href = "/checkout";
//                 }
//             }
//         } else {}
//     }
//     checkAccountOrLogin(".login-button");
//     checkAccountOrLogin(".K1-header__account-toggle > .K1-btn-label");
// }

// // Maak een observer aan
// const observer = new MutationObserver((mutationsList) => {
//     mutationsList.forEach((mutation) => {
//         if (mutation.attributeName === 'class') {
//             if (minicart.classList.contains('open') || minicart.classList.contains('is-open')) {
//                 onMinicartOpen();
//             }
//         }
//     });
// });
// observer.observe(minicart, {
//     attributes: true
// });














////////////////////////////////




function adjustTitle() {

    const titleElement = document.querySelector('.K1-slider-title');
    if (titleElement) {

        const mainHeadline = titleElement.querySelector('h2');
        if (mainHeadline) {
            mainHeadline.textContent = 'Neueste Produkte'
        }

        const allArticlesLink = titleElement.querySelector('.K1-slider-title-link');
        if (allArticlesLink) {
            allArticlesLink.classList.remove('hidden')
            allArticlesLink.textContent = 'Alle neuen Produkte >';
            allArticlesLink.setAttribute('href', 'https://www.kamera-express.de/neuesten-produkte');
            allArticlesLink.setAttribute('target', '_blank');
        }
    }
}

function applyStyles4335() {
    const se = document.createElement('style');
    se.textContent = '.ab-4335-hpde .K1-news-slider .card--news{flex-direction:row;align-items:center;gap:1rem;border:1px solid #fff;box-shadow:0 0 20px 4px #1d1f2219;height:100%}.ab-4335-hpde .K1-news-slider .K1-slider-title{display:flex}.ab-4335-hpde .card--news-body{opacity:1!important;cursor:pointer}.ab-4335-hpde .card--news-body:hover a{text-decoration:underline;color:#ea580c}.ab-4335-hpde .card-news-img{height:35px;display:inline-flex;align-items:center}.ab-4335-hpde .card-news-img img{height:30px;max-width:100px;width:auto}.ab-4335-hpde .card--news .card--news-title{cursor:pointer}@media(min-width:768px){.ab-4335-hpde .card--news-body{height:46px;margin-bottom:11px}.ab-4335-hpde .card-news-img{height:100%}}';
    document.querySelector('head').append(se);
}

function adjustTiles() {
    const data4335 = [{
            label: 'Sony FE 85mm F/1.4 GM II',
            url: 'https://www.kamera-express.de/sony-fe-85mm-f-1-4-gm-ii',
            image: 'https://www.kamera-express.nl/media/f057731c-b49b-4c83-ba9a-10e32799e957/sony-85mm-gmii-1-jpg.jpg'
        },
        {
            label: 'Canon EOS R5 Mark II',
            url: 'https://www.kamera-express.de/canon-eos-r5-mark-ii-body',
            image: 'https://www.kamera-express.nl/media/2dce0249-5f14-4862-92f4-61583b0f9f32/canon-eos-r5-mark-ii-jpg.jpg'
        },
        {
            label: 'Sony ZV-E10 II Gehäuse',
            url: 'https://www.kamera-express.de/sony-zv-e10-ii-geh-use',
            image: 'https://www.kamera-express.nl/media/fe3f9d4b-a4c1-430f-8543-b4d3f6b401be/sony-zv-e10-ii-1-jpg.jpg'
        },
        {
            label: 'Nikon Z6 III',
            url: 'https://www.kamera-express.de/nikon-z6-iii',
            image: 'https://www.kamera-express.nl/media/99e825e1-480f-468f-8076-8a871c9c0f88/nikon-z6-iii-1-jpg.jpg'
        },
        {
            label: 'Canon RF 35mm F/1.4 L VCM',
            url: 'https://www.kamera-express.de/canon-rf-35mm-f-1-4-l-vcm',
            image: 'https://www.kamera-express.nl/media/bc3c5e80-a052-432d-9c5a-7208163db4b5/canon-35mm-f1-4-vcm-1-jpg.jpg'
        },
        {
            label: 'Canon Cinema EOS C400',
            url: 'https://www.kamera-express.de/canon-cinema-eos-c400',
            image: 'https://www.kamera-express.nl/media/b80ca9af-308a-4172-b5da-e8832e064dd3/canon-eos-c400-1-jpg.jpg'
        },
        {
            label: 'Canon EOS R1',
            url: 'https://www.kamera-express.de/canon-eos-r1',
            image: 'https://www.kamera-express.nl/media/ec0e9b1c-ee80-4f8f-8259-28969ddcc2bc/canon-eos-r1-1-jpg.jpg'
        }
    ]

    const newsSlider = document.querySelector('.K1-news-slider');
    if (!newsSlider) {
        return;
    }

    const newsSliderItems = newsSlider.querySelectorAll('li');
    const itemsLength = newsSliderItems.length;
    if (itemsLength > 0) {
        const dataA = data4335.splice(0, itemsLength);

        for (var i = 0; i < itemsLength; i++) {
            const item = newsSliderItems[i];
            const itemData = dataA[i];
            if (item) {
                const itemDate = item.querySelector('.card--news-date');
                if (itemDate) {
                    itemDate.remove();
                }
                const itemLink = item.querySelector('a');
                if (itemLink) {
                    itemLink.textContent = itemData.label;
                    itemLink.setAttribute('href', itemData.url);
                }



                const cardNews = item.querySelector('.card--news');
                if (cardNews) {
                    const imgElement = new DOMParser().parseFromString(
                        `<div class="card-news-img"><img width="40" src="${itemData.image}"></div>`,
                        'text/html'
                    ).body.firstChild;
                    cardNews.prepend(imgElement);
                }
            }
        }
    }

    // now add new items

    const newsSliderList = newsSlider.querySelector('ul');
    if (newsSliderList) {
        data4335.forEach(itemData => {
            const newElem = new DOMParser().parseFromString(
                `<li class="card--news-body tns-item tns-slide-active">
                <div class="card--news"><div class="card-news-img"><img width="40" src="${itemData.image}"></div>
                <p class="card--news-title"><a href="${itemData.url}">${itemData.label}</a></p>
                </div>
                </li>`,
                'text/html'
            ).body.firstChild;
            newsSliderList.append(newElem);
        })
    }
}

function applyTilesClickability() {
    const sliderItems = document.querySelectorAll('.K1-slider-list  .card--news-body');
    if (sliderItems.length) {
        sliderItems.forEach(item => {
            item.addEventListener('click', function (e) {
                if (e.target.tagName != 'A') {
                    const linkElement = e.target.querySelector('a');
                    if (linkElement) {
                        const linkURL = linkElement.getAttribute('href');
                        if (linkURL) {
                            location.href = linkURL;
                            return;
                        }
                    }
                }
            })
        });
    }
}

function main4335() {
    if (document.querySelector('.ab-4335-hpde')) {
        return;
    }
    document.querySelector('html').classList.add('ab-4335-hpde');

    applyStyles4335();
    adjustTitle();
    adjustTiles();

    applyTilesClickability();
}


main4335();