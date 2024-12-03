const tilesData = [
    {
        "image": "https://www.kamera-express.nl/media/82119ffd-0846-4441-9eab-b4125c823213/systeemcamera.webp",
        "name": "Camera's",
        "url": "https://www.kamera-express.nl/producten/foto/fotocamera",
        "allLinkLabel": "Alle camera's",
        "subcats": [
            {
                "name": "Systeemcamera's",
                "url": "https://www.kamera-express.nl/systeemcamera",
            },
            {
                "name": "Compactcamera's",
                "url": "https://www.kamera-express.nl/compact-camera",
            },
            {
                "name": "Spiegelreflexcamera's",
                "url": "https://www.kamera-express.nl/spiegelreflexcamera",
            },
        ]
    },

    {
        "image": "https://www.kamera-express.nl/media/76370bbb-e95c-4443-a4d8-1486178a0ae6/objectieven.webp",
        "name": "Objectieven",
        "url": "https://www.kamera-express.nl/producten/objectieven/camera-objectieven",
        "allLinkLabel": "Alle objectieven",
        "subcats": [
            {
                "name": "Zoomlenzen",
                "url": "https://www.kamera-express.nl/zoomlens",
            },
            {
                "name": "Primelenzen",
                "url": "https://www.kamera-express.nl/prime-lens",
            },
            {
                "name": "Telelenzen",
                "url": "https://www.kamera-express.nl/telelens",
            }
        ]
    },

    {
        "image": "https://www.kamera-express.nl/media/d8d4b692-39a2-4f28-afd2-6e16e93283ca/statief.webp",
        "name": "Statieven",
        "url": "https://www.kamera-express.nl/alle-statieven",
        "allLinkLabel": "Alle statieven",
        "subcats": [
            {
                "name": "Tripods",
                "url": "https://www.kamera-express.nl/tripod",
            },
            {
                "name": "Monopods",
                "url": "https://www.kamera-express.nl/monopod",
            },
            {
                "name": "Reisstatieven",
                "url": "https://www.kamera-express.nl/reisstatief",
            }
        ]
    },

    {
        "image": "https://www.kamera-express.nl/media/38d18685-b202-4724-89b8-51ff8e25cb4f/tassen.webp",
        "name": "Tassen",
        "url": "https://www.kamera-express.nl/alle-tassen",
        "allLinkLabel": "Alle tassen",
        "subcats": [
            {
                "name": "Rugzakken",
                "url": "https://www.kamera-express.nl/rugzak",
            },
            {
                "name": "Schoudertassen",
                "url": "https://www.kamera-express.nl/schoudertassen",
            },
            {
                "name": "Koffers",
                "url": "https://www.kamera-express.nl/koffers",
            }
        ]
    },

    {
        "image": "https://www.kamera-express.nl/media/43322bd4-5bc5-4f70-b211-219c5d5de71c/drones.webp",
        "name": "Video",
        "url": "https://www.kamera-express.nl/producten/video/videocamera",
        "allLinkLabel": "Alle video",
        "subcats": [
            {
                "name": "Drones",
                "url": "https://www.kamera-express.nl/drone",
            },
            {
                "name": "Actioncams",
                "url": "https://www.kamera-express.nl/action-cam",
            },
            {
                "name": "Stabilizers",
                "url": "https://www.kamera-express.nl/stabilizers",
            }
        ]
    },

    {
        "image": "https://www.kamera-express.nl/media/6987f5a5-4b04-4c97-9740-9d94abcc76cf/12475891_1.jpg",
        "name": "Tweedehands",
        "url": "https://www.kamera-express.nl/producten/tweedehands-foto",
        "allLinkLabel": "Alle tweedehands",
        "subcats": [
            {
                "name": "Zoomlenzen",
                "url": "https://www.kamera-express.nl/tweedehands-zoomlens",
            },
            {
                "name": "Primelenzen",
                "url": "https://www.kamera-express.nl/tweedehands-primelens",
            },
            {
                "name": "Systeemcamera's",
                "url": "https://www.kamera-express.nl/tweedehands-systeemcamera",
            }
        ]
    },

];

function getSubcategoriesTemplate(item) {
    let compiled = '<ul>';
    item.subcats.map((cat) => {
        compiled += `<li><span data-url="${cat.url}">${cat.name}</span></li>`;
    })
    compiled += `<li class="ab-more"><span data-url="${item.url}">${item.allLinkLabel}</span></li>`;
    compiled += '</ul>'
    return compiled;
}


function compileTemplate() {
    let compiled = '<div class="ab-cards">';
    tilesData.map((item) => {
        compiled += `<a class="ab-card-item" href="${item.url}"><div class="ab-card-item__img"><img alt="" class="card--tag-img" src="${item.image}"></div><div class="ab-card-item__text"><p class="ab-card-item__text-content">${item.name}</p>`;
        compiled += getSubcategoriesTemplate(item);
        compiled += `</div></a>`;
    })
    compiled += '</div>'
    return compiled;
}

const currentSlider = document.querySelector('.K1-tags-slider');
const ABCards = document.querySelector('.ab-cards');

if(currentSlider && !ABCards) {
    const carousel = currentSlider.querySelector('.tns-outer');
    if(carousel) {
        // class to hide carousel
        carousel.classList.add('ab-k1-carousel')
        // inject css styles
        const styleElement = document.createElement('style');
        styleElement.textContent = '.ab-cards{display:flex;justify-content:space-between;gap:1rem;display:none}.ab-card-item{display:flex;flex-direction:column;background:#fff;border:1px solid #DADADA;box-sizing:border-box;box-shadow:0 4px 20px rgba(0,0,0,.05);transition:.2s;padding:15px;flex:1}.ab-card-item:hover{transform:scale(1.05);text-decoration:none}.ab-card-item:hover a{border:0;text-decoration:none}.ab-card-item__img{display:flex;justify-content:center}.ab-card-item__text{text-align:left;margin-top:auto;margin-bottom:auto}.ab-card-item__text-content{font-size:16px;font-weight:500;padding-top:15px}.ab-card-item__img img{width:100px;height:100px;object-fit:contain}.ab-card-item__text ul{list-style:none;padding:0;margin:0;text-align:left}.ab-card-item__text li{margin-bottom:4px;font-size:14px}.ab-more{margin-top:8px}.ab-more a{color:#EA580C}.ab-more a:before{content:"> "}@media(min-width:1200px){.ab-k1-carousel{display:none}.ab-cards{display:flex}} .ab-card-item:hover span{color:#2e2d2c}.ab-card-item:hover span:hover{color:#EA580C}.ab-more{color:#EA580C}.ab-card-item:hover .ab-more span{color:#EA580C}.ab-more:before{content:"> "}';
        document.querySelector('head').append(styleElement);

        const parser = new DOMParser();
        const cardsHTML = parser.parseFromString(compileTemplate(), 'text/html').body.firstChild;
        carousel.after(cardsHTML);

        setTimeout(function() {
            let spans = document.querySelectorAll('.ab-card-item ul span');
            if(spans) {
                spans.forEach((span) => {
                    span.addEventListener('click', function(e) {
                        e.preventDefault();
                        e.stopPropagation();
                        window.location = this.getAttribute("data-url");
                    })
                })
            }
        }, 500);
    }
}