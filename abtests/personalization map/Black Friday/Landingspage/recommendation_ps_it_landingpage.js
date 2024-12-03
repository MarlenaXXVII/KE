/** 
 * componentID: unique ID, creates namespace for CSS so each carousel 
 * can have diferent styles if needed
 * 
 * componentClasses: addotional CSS classes if needed
 * 
 * recommendationID: recommendation model ID
 * 
 * headline: headline title for the component
 * 
 * styles: additional inline styles if needed
 * 
 * placement {
 *      selector: CSS selector of the element on the page used to position carousel against
 *      action: how to inject carousel against element. possible values:
 *          append, after, before, prepend
 *      
 * }
 */

let popularHeadline = null;
let popularCarousel = null;
let hasEnoughProducts = false;

function setCssHomepage(){
    const styleElement = document.createElement('style');
    styleElement.textContent = `@media(max-width:768px){.gallery-card .title h6{line-height:14.4px}}@media(min-width:768px){.gallery-card .title h6{line-height:24px !important}}`;
    document.querySelector('head').append(styleElement);
}

function setProductRecommendations(options) {

    const COMPONENT_ID = options.componentId
    console.log(`-- starting ${COMPONENT_ID}`)

    const COMPONENT_CLASSES = options.componentClasses;
    const RECOMMENDATION_ID = options.recommendationID
    const HEADLINE = options.headline
    // this is element that we are using to inject our carousel after
    const PLACEMENT_ELEMENT = document.querySelector(options.placement.selector);

    const createCarousel = (recievedProductData) => {

        // console.log(recievedProductData);

        // Product Validator:
        // Rule #1
        // if category_level_1_nl = "Tweedehands" AND stock_level = 0      HIDE
        // Rule #2
        // if category_level_1_nl is NOT "Tweedehands" AND stock_level = 0 AND EOL = True Hide
        const validateProduct = (product) => {
            let valid = true;
            if(product.active == false) {
                valid = false;
            }
            if(!product.image || product.image==null || product.image == 'https://www.kamera-express.nl/' || product.title == "") {
                valid = false;
            }
            if( product.text_wobbler.includes("Profotonet") || product.text_wobbler.includes("Nuovo") || product.text_wobbler.includes("Garanzia") || product.text_wobbler == "") {
                valid = false;
            }
            if(product.category_level_1_nl == 'Tweedehands' || product.title.match('occasion')) {
                // console.log('occasion!');
                if( product.stock_level == 0 ) {
                    valid = false;
                }
            } else {
                if(product.stock_level == 0 && product.eol == true) {
                    // valid = false;
                }
            }
            return valid;
        }

        // filter products based on conditions of the validator
        let productData = [];
        recievedProductData.map((product) => {
            if(validateProduct(product)) {
                productData.push(product);
            }
        })

        if(!productData || !PLACEMENT_ELEMENT) {
            return;
        }
        if (productData && productData.length >= 5) {
            hasEnoughProducts = true;
        } else {
            hasEnoughProducts = false;
            return; // Stop met het uitvoeren van de functie
        }

        if(document.getElementById(COMPONENT_ID)) {
            return;
        }

        const getItemIds = () => {
            let ids = [];
            productData.map((item) => {
                ids.push(item.item_id);
            });
            return ids;
        }

        const formatPrice = (n) =>  n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

        const getItemPartial = (item) => {

            let priceMain = '';
            let priceReminder = '';

            if(item.item_price) {
                if(item.item_price % 1 === 0) {
                    priceMain = `${formatPrice(item.item_price)},-`
                } else {
                    const priceSplit = item.item_price.toString().split('.');
                    priceMain = `${formatPrice(priceSplit[0])},`
                    priceReminder = priceSplit[1];
                    if(priceReminder.length == 1) {
                        priceReminder = `${priceReminder}0`
                    }
                }
            }

            const productRating = Math.round(100*item.average_review_rating/5);
            const ratingClass = productRating === 0 ? 'ab-rating-hidden' : '';
        
            const itemTemplate = `<a class=ab-rcmd-item data-id="${item.item_id}" href="${item.url}"><div class=ab-rcmd-item__img><img alt=""data-v-0aa41950=""height=200 loading=lazy src="${item.image}" width=200></div> ${item.text_wobbler ? `<span data-v-083af505 data-v-6d26c398 class="promotion-label-container promotion large sf-badge" style="--badge-color: false; --badge-background: false; max-width:100%; background:#000;"> <span class="promotion-label-container-text">${item.text_wobbler}</span></span>` : `<span>&nbsp;</span>`}<div class=ab-rcmd-item__name><p>${item.title}</div><div class="ab-rating-wrapper ${ratingClass}"><div class="ab-rating"><span style="width: ${productRating}%;"></span></div><div class="ab-rating-votes">(${item.amount_of_reviews})</div></div><div class=ab-rcmd-item__price><p class=current-price><span>${priceMain}</span> <span class=decimal>${priceReminder}</span></div></a>`
            return itemTemplate;
        }
        
        const getCarouselPartial = (data) => {
            let items = '';
            if(data) {
                data.map((item) => {
                    items += getItemPartial(item);
                })
            }

            const carouselTemplate = `
                <div class="K1-container K1-mb-container ${COMPONENT_CLASSES}" id="${COMPONENT_ID}" style="${options.styles}">
                    <div class="ab-rcmd-pdp-headline">
                        <h2>${HEADLINE}</h2>
                    </div>            
                    <div class="ab-rcmd-carousel ab-rcmd-noprev">
                        <div class="ab-rcmd-carousel-slider-wrapper">
                            <div class="ab-rcmd-carousel-slider">
                                ${items}
                            </div>
                        </div>
                        <div class="ab-rcmd-carousel-buttons">
                            <span class="ab-rcmd-carousel-prev"><span><img width="14" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAdCAMAAABluEcAAAAAP1BMVEXv7+8zMzPq6urg4OBCQkLU1NTOzs49PT3FxcU5OTm/v79HR0dFRUViYmLQ0NDKysrk5OTIyMi4uLi1tbVZWVmrCPKQAAAAYklEQVQoz93ROxKAIAxFUaIoohH87X+tJmPjL6+k4LXnzqSIey8nh5Y9o2ANRNyZPAijYIxUKJhKBc3PtlswkzUN1GGAnQ7snKB7efXSfrfHi3vry5WyfBaxBgGyXlBGwZNPXMAE5AdfHpkAAAAASUVORK5CYII="></span></span>
                            <span class="ab-rcmd-carousel-next"><span><img width="14" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAdCAMAAABluEcAAAAAP1BMVEXv7+8zMzPq6urg4OBCQkLU1NTOzs49PT3FxcU5OTm/v79HR0dFRUViYmLQ0NDKysrk5OTIyMi4uLi1tbVZWVmrCPKQAAAAYklEQVQoz93ROxKAIAxFUaIoohH87X+tJmPjL6+k4LXnzqSIey8nh5Y9o2ANRNyZPAijYIxUKJhKBc3PtlswkzUN1GGAnQ7snKB7efXSfrfHi3vry5WyfBaxBgGyXlBGwZNPXMAE5AdfHpkAAAAASUVORK5CYII="></span></span>
                        </div>
                    </div>
                </div>
            `
            return carouselTemplate;
        }

        const parser = new DOMParser();
        const ITEM_WIDTH = 238;
        const GAP = 11;
        let OFFSET = 0;

        // returns how many items to scroll
        // based on viewport width
        const getItemsToScroll = () => {
            const viewportWidth = document.querySelector('.ab-rcmd-carousel').offsetWidth;
            const itemsToScroll = Math.floor(viewportWidth / (ITEM_WIDTH+GAP));
            return itemsToScroll;
        }
        
        const getMaxOffset = () => {
            const itemsToScroll = getItemsToScroll();
            const maxOffset = itemsToScroll*Math.floor(productData.length/itemsToScroll) - itemsToScroll;
            return maxOffset;
        }

        const controllButtonsVisibility = (slider) => {
            const sliderWrapper = slider.closest('.ab-rcmd-carousel');

            if(OFFSET == 0) {
                sliderWrapper.classList.add('ab-rcmd-noprev')
                sliderWrapper.classList.remove('ab-rcmd-nonext')
            } else if(OFFSET >= getMaxOffset()) {
                sliderWrapper.classList.remove('ab-rcmd-noprev')
                sliderWrapper.classList.add('ab-rcmd-nonext')
            } else {
                sliderWrapper.classList.remove('ab-rcmd-noprev')
                sliderWrapper.classList.remove('ab-rcmd-nonext')
            }
        }

        const getSlider = () => {
            return document.getElementById(COMPONENT_ID).querySelector('.ab-rcmd-carousel-slider-wrapper');
        }

        const scrollSlider = (slider) => {
            slider.scroll({left: OFFSET*(ITEM_WIDTH+GAP), behavior: 'smooth'});
        }

        const goNext = () => {
            const slider = getSlider();
            if(slider) {
                OFFSET += getItemsToScroll();
                scrollSlider(slider);
                controllButtonsVisibility(slider);
            }
        }
        const goPrev = () => {
            const slider = getSlider();
            if(slider) {
                OFFSET -= getItemsToScroll();
                scrollSlider(slider);
                controllButtonsVisibility(slider);
            }
        }
        // inject css styles
        // @TODO check if we can add class to style to not inject more than once.
        const styleElement = document.createElement('style');
        styleElement.textContent = `#${COMPONENT_ID} {.ab-rating-hidden{opacity:0}.ab-rcmd-carousel-prev img{transform:rotate(180deg)}.ab-rcmd-pdp-headline{margin-bottom:1rem}.ab-rcmd-pdp-headline h2{font-size:24px;line-height:29px;font-weight:400}.ab-rating-wrapper{margin-bottom:1rem;display:flex;align-items:center;justify-content:flex-start;gap:.5rem}.ab-rating-votes{font-weight:500;font-size:14px;color:#646363}.ab-rating{width:80px;height:13px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAANBAMAAADML/S3AAAAMFBMVEX////a2tr8/Pzr6+vv7+/29vb4+Pjd3d3z8/Pc3Nzi4uLf39/m5ubo6Ojk5OTh4eFXKiHAAAABI0lEQVQoz0XOvUoDURAF4ONudgnRBA9JXH8gXFEQrFbRWpPGxsJUipViZRdTW+wTiKkFUaysDNqkNJW1IKYWfAB/XiBzdwYyzcfuzJm5kDqCVmjGuypSc9V8MtuZOtO3QE3FSIloA182cFqzQGIB6ol1/llgPjcYLjkN2ECZXX//jeRlC9FOj7zZBvYvyIVvh7NH8SVDcSSN2xYq9HWHOLcODL2y89zLDGHuszYagDYOgFCDCHoaxIYGURZfoY05aKPhXdMgChpEkdRH/5Idb5usekvyRidGJFNMNkKc9TbJRe8USWeb+mKFW/wRYw7u6yLeq83Eu5xc5adDfvBanN7ESscHB4geRPy7YM+JhxmOU7H0iUJXDAA4M4Z+BCZOYD8xBhhyNtl9yoFfAAAAAElFTkSuQmCC)}.ab-rating span{display:block;height:100%;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAANCAMAAAAJ3xm2AAAAflBMVEX/////0zn///v//vj/0zf/1Ub/1kv/+eX/5I3//PH/+uv/11T/1EH//fT/8s7/1D3/9t3/6qr/55r/2V//11D/+ej/78T/8Mn/7r3/7Lb/4H3/33b/3m7/2Fn/+u3/67H/6ab/5pX/5In/9NX/6KH/9t//8MP/2mf/2mT/0i8kV9qPAAABPUlEQVQ4y32T2ZqCMAxGky5QdmQTFVBcZnn/FxyhbbRO9b/r4TT9khbQqcBNvHsBV+ausw18AqHowYka3QJT8VKgCvgncMbaKdCiODr6jI1TIErxBG8BKwWK3dMGrhCTiD2EsEDcPAsVooyZF5TXoUkRsQh+5vxOWH8eA7xHJofNtIzjpAUMarVdhC9Vk9DCPxBKtCnydfxIqbPlfoIH6BbhiJQk8gDakF4AnO/fXI+ncQ4E6K0wZl4QSa3fwGQnVjDYGWWNFi5W6EwD/A0Y1tXj2ktdcAabve4goleGa87wBqAOFcxNx+SnGkx0ohkY+EH8K8b8IAR1dEJRdQU2tuVIiCbfC9zSTFCorcSU+0GeLM+lPNDvN8wtAO9lZs8Pludy2ysagQoBWCdjP5iYGQSYGI/TpbwKrRG4B/wBeqgQ6mCzYZwAAAAASUVORK5CYII=)}.five-in-row .ab-rcmd-item{width:238px;min-width:238px;max-width:238px}.ab-rcmd-item{border:1px solid #dadada;background-color:#fff;box-shadow:0 4px 20px rgb(29 31 34 / .05);padding:16px;display:flex;flex-direction:column;width:198px;min-width:198px;max-width:198px;grid-gap:8px;gap:8px;color:#2E2D2C}.ab-rcmd-item:hover{text-decoration:none;color:#2E2D2C}.ab-rcmd-item__img{text-align:center}.ab-rcmd-item__img img{width:128px;height:128px;object-fit:cover}.ab-rcmd-item__name{height:48px}.ab-rcmd-item__name p{font-family:Barlow,sans-serif;font-size:18px;font-weight:700;line-height:24px;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;display:-webkit-box}.ab-rcmd-item__price{display:flex;align-items:flex-start;grid-gap:4px;gap:4px;color:#2e2d2c}.ab-rcmd-item__price .current-price{display:flex;align-items:flex-start;font-weight:700;font-size:24px;line-height:24px}.ab-rcmd-item__price .decimal{line-height:14px;margin-left:-4px;font-size:14px}.ab-rcmd-carousel-slider{display:flex;gap:11px}.promotion-label-container-text{display:inline-block;max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ab-rcmd-carousel{width:100%;position:relative}.ab-rcmd-carousel-slider-wrapper{overflow-x:scroll}.ab-rcmd-carousel-next,.ab-rcmd-carousel-prev{pointer-events:auto;transition:.25s;justify-content:center;align-items:center;font-family:K1-icomoon!important;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;line-height:32px;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-size:14px;width:44px;height:44px;border-radius:50%;border:1px solid #DADADA;box-shadow:1px 2px 24px 4px rgb(0 0 0 / .04);text-shadow:none;background:#efefef;display:inline-flex;cursor:pointer}.ab-rcmd-carousel-next{transform:translateX(10px)}.ab-rcmd-carousel-prev{transform:translateX(-10px)}.ab-rcmd-carousel-buttons{width:100%;justify-content:space-between;position:absolute;top:50%;pointer-events:none;transform:translateY(-50%);display:none}.ab-rcmd-noprev .ab-rcmd-carousel-prev{opacity:0}.ab-rcmd-nonext .ab-rcmd-carousel-next{opacity:0}@media(max-width:767px){.ab-rcmd-carousel-slider-wrapper{overflow:hidden}.ab-rcmd-carousel-slider{overflow-x:scroll;scroll-snap-type:x mandatory}.ab-rcmd-item{scroll-snap-align:start}.ab-rcmd-pdp-headline h2{font-size: 20px !important;}.ab-rcmd-pdp-headline{padding: 0 16px;}.ab-rcmd-carousel{padding: 0 0 0 16px;}}@media(min-width:768px){.ab-rcmd-carousel-slider-wrapper{overflow-x:scroll;width:100%;-ms-overflow-style:none;scrollbar-width:none}.ab-rcmd-carousel-slider-wrapper::-webkit-scrollbar{display:none}.ab-rcmd-carousel-buttons{display:flex}}}`;
        document.querySelector('head').append(styleElement);

        const carouselTemplate = getCarouselPartial(productData);
        if(carouselTemplate) {
            const carouselHTML = parser.parseFromString(carouselTemplate, 'text/html').body.firstChild;
            // console.log('***');
            // console.log(carouselHTML);

            const injectAction = options.placement.action;

            if(injectAction === 'append') {
                PLACEMENT_ELEMENT.append(carouselHTML);
            } else if(injectAction === 'prepend') {
                PLACEMENT_ELEMENT.prepend(carouselHTML);
            } else if(injectAction === 'after') {
                PLACEMENT_ELEMENT.after(carouselHTML);
            } else if(injectAction === 'before') {
                PLACEMENT_ELEMENT.before(carouselHTML);
            }


            setTimeout(function() {
                const btnNext = document.getElementById(COMPONENT_ID).querySelector('.ab-rcmd-carousel-next');
                const btnPrev = document.getElementById(COMPONENT_ID).querySelector('.ab-rcmd-carousel-prev');
                if(btnNext) {
                    btnNext.addEventListener('click', function(e) {
                        e.preventDefault();
                        e.stopPropagation();
                        goNext();
                    })
                }
                if(btnPrev) {
                    btnPrev.addEventListener('click', function(e) {
                        e.preventDefault();
                        e.stopPropagation();
                        goPrev();
                    })
                }

                // add tracking events
                // Impression event
                const itemIds = getItemIds();
                exponea.track("recommendation", {
                    action: "show",
                    item_ids: itemIds,
                    recommendation_id: RECOMMENDATION_ID
                });

                    // Click event
                const tiles = document.getElementById(COMPONENT_ID).querySelectorAll('.ab-rcmd-item');
                tiles.forEach((tile) => {
                    tile.addEventListener('click', function(e) {
                        const payload = {
                            action: "click",
                            item_id: tile.getAttribute('data-id'),
                            recommendation_id: RECOMMENDATION_ID
                        }
                        exponea.track("recommendation", payload);
                    })
                })

                // console.log(getItemsToScroll());
                // console.log(productData.length);
                if(productData.length <= getItemsToScroll()) {

                    // console.log('remove button right');
                    const slider = getSlider();
                    const sliderWrapper = slider.closest('.ab-rcmd-carousel');
                    sliderWrapper.classList.add('ab-rcmd-nonext');
                }
                
            }, 200);
        }
    }

    exponea.getRecommendation({
        recommendationId: RECOMMENDATION_ID,
        size: 10,
        callback: createCarousel,
        fillWithRandom: false,
        catalogFilter: [],
        catalogAttributesWhitelist: []
    });

    // createCarousel(products);
}


function hp_personalizedblocksq4() {

    // const hp_personalizedblocksq4 = document.createElement('style');
    // hp_personalizedblocksq4.textContent = '.K1-products-slider {display: none;}'
    // document.querySelector('head').append(hp_personalizedblocksq4);


    setProductRecommendations({
        componentId: 'hp_personalizedblocksq4_1',
        componentClasses: '',
        recommendationID: '671a45cf728160554d9df4bb',
        headline: 'Trova l\'offerta perfetta per la Black Friday Week',
        styles: '',
        placement: {
            selector: '.black-friday-products',
            action: 'after'
        }
    });

    // setProductRecommendations({
    //     componentId: 'hp_personalizedblocksq4_2',
    //     componentClasses: '',
    //     recommendationID: '668b983ed54ece898afd7fb2',
    //     headline: 'Deze producten heb je eerder bekeken',
    //     styles: '',
    //     placement: {
    //         selector: '.home-brands',
    //         action: 'after'
    //     }
    // });
}



function setSyblingClassByParentTitle(title, clazz) {
    const titlesFr = document.querySelectorAll('.regular-title');
    titlesFr.forEach(t=> {
        if(t.textContent.trim() === title) {
            const gridTitle = t.closest('.grid-container');
            if(gridTitle) {
                const syb = gridTitle.nextElementSibling;
                if(syb) {
                    syb.classList.add(clazz);
                }
            }
        }
    })
}
const titlesFr = document.querySelectorAll('.regular-title');
titlesFr.forEach(t=> {
    if(t.textContent.trim() === 'Le migliori offerte') {
        popularHeadline = t.closest('.grid-container');
        if(popularHeadline) {
            popularCarousel = popularHeadline.nextElementSibling;
        }
    }
})
if (window.innerWidth <= 768) {
    const bannerMobile = document.querySelectorAll('img'); // Selecteer alle <img> elementen
    const targetSrcFragment = 'd29be525-128f-4f19-8c70-ba695125283e';

    // Template voor de nieuwe banner
    const itemTemplate = `
        <div class="grid-container" data-v-f3af6222="">
             <div class="showcase-image-container sm-cols-6 lg-cols-12" data-v-5ea6967a="" data-v-f3af6222="">
                 <img src="/_ipx/b_%23ffffff00,f_webp,fit_contain/https://www.kamera-express.nl/media/7c8b3074-fff7-46c1-a369-d08078578c9e/ke-blackfriday-paginaheader-300x600-it-webp.webp" alt="" loading="lazy" class="showcase-image" data-v-5ea6967a="" style="height: 200px"> 
            </div>
        </div>
    `;

    bannerMobile.forEach(img => {
        if (img.src.includes(targetSrcFragment)) {
            const bannerContainer = img.closest('.grid-container'); // Zoek de dichtstbijzijnde grid-container
            
            if (bannerContainer) {
                // Maak een nieuw element van het template
                const newBanner = document.createElement('div');
                newBanner.innerHTML = itemTemplate;
                
                // Vervang de oude container door de nieuwe banner
                bannerContainer.replaceWith(newBanner.firstElementChild);
            }
        }
    });
}
setSyblingClassByParentTitle('Le nostre migliori offerte della Black Friday Week', 'black-friday-products')

setCssHomepage();

setTimeout(function() {
    hp_personalizedblocksq4();
}, 500);
setTimeout(function() {
    if (hasEnoughProducts && popularHeadline) {
        popularHeadline.remove();
        popularCarousel.remove();
    }
},3000)