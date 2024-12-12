/**
 * recommendationId: 590ae3bbsample03add10921
 * recommendationBlockCssSelector: #recommendations
 * emptyRecommendationsMessage: Nothing could be recommended for you! 
 */
var styles = `
	.recommendationbox-pdp { border: 0px solid #f0f0f0; width:100%; padding:10px; }
	.pdp-reco {border-top:1px solid #f0f0f0; padding-top:3px;padding-bottom:3px;}
`;

var styleSheet = document.createElement("style");
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);

// Define the trigger buttons
const nl_button = document.querySelector('[productstatus="Niet meer leverbaar"]');
const fr_button = document.querySelector('[productstatus="Epuisé temporairement"]');
const de_button = document.querySelector('[productstatus="Vorübergehend ausverkauft"]');

// Check if any of the buttons exist
if (nl_button || fr_button || de_button) {
    // Retrieve the current product's price from the page
    var currentPriceText = document.querySelector("#buySection > div > div.price-container > div.prices-container > div.current-price-container.centered > p > span").innerText;

    // Convert the price text to a number (assuming the price is in the format "€1.234,56")
    var currentPrice = parseFloat(currentPriceText.replace(/[^\d,-]/g, '').replace(',', '.'));

    // Function to determine the category based on price
    function determineCategory(price) {
        if (price < 1000) {
            return 'Low';
        } else if (price >= 1000 && price < 2500) {
            return 'Mid';
        } else {
            return 'High';
        }
    }

    // Get the category based on the current price
    var category = determineCategory(currentPrice);

    // Define the price range based on the determined category
    var lowerBound, upperBound;

    function setPriceRange(category) {
        switch (category) {
            case 'Low':
                lowerBound = currentPrice * 0.6;
                upperBound = currentPrice * 3.0;
                break;
            case 'Mid':
                lowerBound = currentPrice * 0.8;
                upperBound = currentPrice * 1.8;
                break;
            case 'High':
                lowerBound = currentPrice * 0.8;
                upperBound = currentPrice * 5.0;
                break;
            default:
                console.error('Unknown category: ' + category);
                break;
        }
    }

    // Set the price range based on the category
    setPriceRange(category);

    const getJsonitemData = () => {
        const itemdata = document.querySelector('script[data-n-head="ssr"][type="application/ld+json"]')?.text;
        if (itemdata) return JSON.parse(itemdata);
    };

    const itemdata = getJsonitemData();
    var item_id = itemdata?.offers?.sku;

    var options = {
        recommendationId: "66c35ff125986ba33efdf5fa",
        callback: onRecommendationsLoaded,
        size: 20,
        items: { [item_id]: 1 },
    };

    const productWrapper = document.querySelector('.sf-gallery__stage');
    const productImage = document.querySelector('.sf-image--wrapper');

    function addOverlay() {
        const overlay = document.createElement('div');
        overlay.innerText = 'Niet meer leverbaar';
        overlay.style.position = 'absolute';
        overlay.style.top = '0';
        overlay.style.fontFamily = 'Barlow';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
        overlay.style.display = 'flex';
        overlay.style.justifyContent = 'center';
        overlay.style.alignItems = 'center';
        overlay.style.color = 'white';
        overlay.style.fontSize = '24px';
        overlay.style.pointerEvents = 'none';
        overlay.classList.add('overlay');

        productWrapper.style.position = 'relative';
        productWrapper.appendChild(overlay);

        productImage.style.filter = 'grayscale(100%)';
        productImage.style.pointerEvents = 'none';
    }

    function generateStarsHTML(item) {
        let starsHTML = '';

        if (parseInt(item.amount_of_reviews) > 1) {
            if (parseInt(item.average_review_rating) > 0.5) starsHTML += '&#9733;';
            if (parseInt(item.average_review_rating) > 1.5) starsHTML += '&#9733;';
            if (parseInt(item.average_review_rating) > 2.5) starsHTML += '&#9733;';
            if (parseInt(item.average_review_rating) > 3.5) starsHTML += '&#9733;';
            if (parseInt(item.average_review_rating) > 4.5) starsHTML += '&#9733;';
            starsHTML += `<span style="color:#2e2d2c; font-size:14px; font-family: 'Rubik', Arial, sans-serif;">(${item.amount_of_reviews})</span>`;
        }

        return `
            <div class="stars" style="text-align:left; margin-left:10px; font-size:18px; color:#FFD339;">
                ${starsHTML}
            </div>
        `;
    }

    function generateWobbler(item) {
        if (item.text_wobbler && item.text_wobbler.length > 0) {
            return "<span data-v-083af505='' data-v-400330c3='' class='sf-gallery-promotion promotion large sf-badge has-pointer' style='--badge-color: false; --badge-background: false;'> <span data-v-083af505=''>" + item.text_wobbler + "</span></span>";
        } else {
            return "";
        }
    }

    function onRecommendationsLoaded(data) {
        if (data && data.length > 0) {
            //document.querySelectorAll("");
            var element = document.querySelectorAll(".buy-section-wrapper");

            var div = document.createElement('div');

            div.setAttribute('class', "recommendationbox-pdp");
            element.innerHTML = '<span data-v-083af505="" data-v-aee04296="" class="not-available large sf-badge" style="--badge-color: false; --badge-background: false;margin-bottom:5px;"> <span data-v-083af505="">Niet meer leverbaar</span></span>Dit product is helaas niet meer leverbaar. Gelukkig hebben we enkele alternatieven voor jou weten te selecteren: <br/><br/>';
            element.appendChild(div);

            var o = 0;

            for (var i = 0; i < data.length; i++) {
                if (o == 2) {
                    continue;
                } else {

                    var item = data[i];

                    let cur_price = 0;
                    let higher_msrp = "0";
                    let is_cashback = "0";

                    let suggested_retail_price = item.suggested_retail_price !== null ? parseInt(item.suggested_retail_price) : 0;
                    let item_price = item.item_price !== null ? parseInt(item.item_price) : 0;
                    let item_price_with_cashback = item.item_price_with_cashback !== null ? parseInt(item.item_price_with_cashback) : 0;

                    if (suggested_retail_price > item_price) {
                        higher_msrp = "1";
                    } else {
                        higher_msrp = "0";
                    }

                    if (item_price_with_cashback < 5) {
                        cur_price = item_price;
                    }

                    if (item_price_with_cashback > 5) {
                        is_cashback = "1";
                        cur_price = item_price_with_cashback;
                    } else {
                        is_cashback = "0";
                    }

                    const itemstars = {
                        amount_of_reviews: item.amount_of_reviews !== null ? item.amount_of_reviews.toString() : '',
                        average_review_rating: item.average_review_rating !== null ? item.average_review_rating.toString() : ''
                    };

                    let formattedPrice = new Intl.NumberFormat('nl-NL', {
                        style: 'currency',
                        currency: 'EUR',
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    }).format(cur_price);

                    if (formattedPrice.endsWith(',00')) {
                        formattedPrice = formattedPrice.slice(0, -3);
                    }

                    var itemPrice = parseFloat(cur_price);

                    if (itemPrice < lowerBound || itemPrice > upperBound) {
                        continue;
                    } else {
                        o = o + 1;
                    }

                    const starsHTML = generateStarsHTML(item);
                    const redWobbler = generateWobbler(item);

                    var innerDiv = document.createElement('div'),
                        img = document.createElement('img'),
                        a = document.createElement('a');

                    img.id = item.item_id;
                    img.setAttribute('width', 110);
                    img.setAttribute('src', item.image);
                    innerDiv.setAttribute('class', "pdp-reco");

                    a.setAttribute('href', item.url);

                    a.appendChild(img);

                    var html = "<table><tr><td style='height:100px; position:relative'><a href='" + item.url + "'><img width='100' src='" + item.image + "' href='" + item.url + "'></a></td><td width='20'>&nbsp;</td><td width='100%' valign='top' style='font-family:\"Barlow\", arial, sans-serif; font-size:16px; font-weight:400;margin-top:5px;'><a href='" + item.url + "'>" + item.title + " </a><br/>" + starsHTML + "<br/>" + redWobbler + "<table width='100%'><tr> <td align='left'><br/><b>" + formattedPrice + "</b></td> <td align='right'><a href='" + item.url + "'><button data-v-75a5fd6c='' data-v-12098f7f='' style='float:right;font-size:14px;' class='add-review-button small-button sf-button'>Bekijk nu</button></a></td></tr></table></td></tr></table>";

                    innerDiv.innerHTML = html;
                    div.appendChild(innerDiv);
                }
            }
        } else {
            document.querySelectorAll(".buy-section-wrapper").innerText = 'Dit product is niet meer leverbaar. Helaas hebben we geen geschikt alternatief voor je kunnen vinden.';
            //document.querySelector("#buySection > div ").innerText = 'Dit product is niet meer leverbaar. Helaas hebben we geen geschikt alternatief voor je kunnen vinden.';
        }
    }

    exponea.getRecommendation(options);

    addOverlay();
}