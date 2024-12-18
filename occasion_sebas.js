// Voeg stijlen toe voor de aanbevelingsbox en overlay
const styles = `.ab-rating span{display:block;height:100%;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAANCAMAAAAJ3xm2AAAAflBMVEX/////0zn///v//vj/0zf/1Ub/1kv/+eX/5I3//PH/+uv/11T/1EH//fT/8s7/1D3/9t3/6qr/55r/2V//11D/+ej/78T/8Mn/7r3/7Lb/4H3/33b/3m7/2Fn/+u3/67H/6ab/5pX/5In/9NX/6KH/9t//8MP/2mf/2mT/0i8kV9qPAAABPUlEQVQ4y32T2ZqCMAxGky5QdmQTFVBcZnn/FxyhbbRO9b/r4TT9khbQqcBNvHsBV+ausw18AqHowYka3QJT8VKgCvgncMbaKdCiODr6jI1TIErxBG8BKwWK3dMGrhCTiD2EsEDcPAsVooyZF5TXoUkRsQh+5vxOWH8eA7xHJofNtIzjpAUMarVdhC9Vk9DCPxBKtCnydfxIqbPlfoIH6BbhiJQk8gDakF4AnO/fXI+ncQ4E6K0wZl4QSa3fwGQnVjDYGWWNFi5W6EwD/A0Y1tXj2ktdcAabve4goleGa87wBqAOFcxNx+SnGkx0ohkY+EH8K8b8IAR1dEJRdQU2tuVIiCbfC9zSTFCorcSU+0GeLM+lPNDvN8wtAO9lZs8Pludy2ysagQoBWCdjP5iYGQSYGI/TpbwKrRG4B/wBeqgQ6mCzYZwAAAAASUVORK5CYII=)}.ab-rating{width:80px;height:13px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAANBAMAAADML/S3AAAAMFBMVEX////a2tr8/Pzr6+vv7+/29vb4+Pjd3d3z8/Pc3Nzi4uLf39/m5ubo6Ojk5OTh4eFXKiHAAAABI0lEQVQoz0XOvUoDURAF4ONudgnRBA9JXH8gXFEQrFbRWpPGxsJUipViZRdTW+wTiKkFUaysDNqkNJW1IKYWfAB/XiBzdwYyzcfuzJm5kDqCVmjGuypSc9V8MtuZOtO3QE3FSIloA182cFqzQGIB6ol1/llgPjcYLjkN2ECZXX//jeRlC9FOj7zZBvYvyIVvh7NH8SVDcSSN2xYq9HWHOLcODL2y89zLDGHuszYagDYOgFCDCHoaxIYGURZfoY05aKPhXdMgChpEkdRH/5Idb5usekvyRidGJFNMNkKc9TbJRe8USWeb+mKFW/wRYw7u6yLeq83Eu5xc5adDfvBanN7ESscHB4geRPy7YM+JhxmOU7H0iUJXDAA4M4Z+BCZOYD8xBhhyNtl9yoFfAAAAAElFTkSuQmCC)}.ab-rating-hidden{opacity:0}.ab-rating{width:80px;height:13px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAANBAMAAADML/S3AAAAMFBMVEX////a2tr8/Pzr6+vv7+/29vb4+Pjd3d3z8/Pc3Nzi4uLf39/m5ubo6Ojk5OTh4eFXKiHAAAABI0lEQVQoz0XOvUoDURAF4ONudgnRBA9JXH8gXFEQrFbRWpPGxsJUipViZRdTW+wTiKkFUaysDNqkNJW1IKYWfAB/XiBzdwYyzcfuzJm5kDqCVmjGuypSc9V8MtuZOtO3QE3FSIloA182cFqzQGIB6ol1/llgPjcYLjkN2ECZXX//jeRlC9FOj7zZBvYvyIVvh7NH8SVDcSSN2xYq9HWHOLcODL2y89zLDGHuszYagDYOgFCDCHoaxIYGURZfoY05aKPhXdMgChpEkdRH/5Idb5usekvyRidGJFNMNkKc9TbJRe8USWeb+mKFW/wRYw7u6yLeq83Eu5xc5adDfvBanN7ESscHB4geRPy7YM+JhxmOU7H0iUJXDAA4M4Z+BCZOYD8xBhhyNtl9yoFfAAAAAElFTkSuQmCC)}.ab-rating-wrapper{margin-bottom:1rem;display:flex;align-items:center;justify-content:flex-start;gap:.5rem}.ab-rating-votes{font-weight:500;font-size:14px;color:#646363}.pdp-reco{display:flex;align-items:center;justify-content:space-between;border:1px solid #f0f0f0;padding:15px;margin-bottom:-1px;border-radius:5px;background-color:#fff;position:relative}.container-wrapper{display:flex;align-items:center;width:100%}.item-image{flex-shrink:0;}.item-image img{width:80px;height:80px;border-radius:5px;object-fit:cover}.item-info{max-width:47%;flex:1}.item-button{position:absolute;right:20px;top:50%;transform:translateY(-50%)}.orange-button{height:40px;padding:8px 24px;color:#fff;background-color:#ea580c;border:none;font-weight:700;border-radius:4px;font-family:Barlow,sans-serif;font-size:initial;cursor:pointer}.orange-button:hover{background-color:#cc4e0b}button.orange-button{height:40px;padding:8px 24px;color:#fff;background-color:#ea580c;border:none;font-weight:700;border-radius:4px;font-family:Barlow,sans-serif;font-size:initial}.recommendationbox-pdp{background-color:#fff;width:100%;padding:10px;margin-top:0px;border-radius:5px;}.pdp-reco{border: 1px solid #f0f0f0;padding:15px 10px;display:flex;align-items:center}.pdp-reco img{border-radius:5px;margin-right:15px;width:80px;height:80px;object-fit:cover}.pdp-reco p{margin:0;font-size:18px;line-height:1.5;color:#333}.pdp-reco .price{font-weight:700;font-size:20px;color:#000}.overlay{color:#fff;z-index:49;background-color:rgba(0,0,0,0.5);position:absolute;top:0;left:0;width:100%;height:inherit;display:flex;justify-content:center;align-items:center;font-size:24px;font-family:Barlow,sans-serif;pointer-events:none;}@media only screen and (max-width: 767px){}@media only screen and (max-width: 767px){.overlay{height:100%}}`;
const styleSheet = document.createElement("style");
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);

// Controleer productstatus
const nlButton = document.querySelector('[productstatus="Niet meer leverbaar"]');
const frButton = document.querySelector('[productstatus="Epuisé temporairement"]');
const deButton = document.querySelector('[productstatus="Vorübergehend ausverkauft"]');



if (nlButton || frButton || deButton) {
    console.log("Product is niet meer leverbaar. Alternatieven laden...");

    // Prijs ophalen
    const priceElement = document.querySelector("#buySection .current-price-container p span");
    if (!priceElement) {
        console.error("Prijsselector niet gevonden!");
    } else {
        const currentPriceText = priceElement.innerText;
        const currentPrice = parseFloat(currentPriceText.replace(/[^\d,-]/g, '').replace(',', '.'));

        if (isNaN(currentPrice)) {
            console.error("Kon prijs niet omzetten naar een geldig getal.");
        } else {
            console.log(`Huidige prijs: €${currentPrice}`);

            // Prijscategorie bepalen
            function determineCategory(price) {
                if (price < 1000) return 'Low';
                if (price < 2500) return 'Mid';
                return 'High';
            }

            const category = determineCategory(currentPrice);
            console.log(`Categorie: ${category}`);

            // Prijsbereik instellen
            let lowerBound, upperBound;
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
            }
            console.log(`Prijsbereik: €${lowerBound.toFixed(2)} - €${upperBound.toFixed(2)}`);

            // Overlay toevoegen
            const productWrapper = document.querySelector('.sf-gallery__stage');
            const productImage = document.querySelector('.sf-image--wrapper');

            if (productWrapper && productImage) {
                const overlay = document.createElement('div');
                overlay.className = 'overlay';
                overlay.innerText = 'Niet meer leverbaar';
                // productWrapper.style.position = 'relative';
                productWrapper.prepend(overlay);
                // productImage.style.filter = 'grayscale(100%)';
                // productImage.style.pointerEvents = 'none';
            } else {
                console.warn("Kon de productwrapper of -afbeelding niet vinden voor overlay.");
            }

            // Haal itemgegevens op
            const getJsonItemData = () => {
                const itemData = document.querySelector('script[data-n-head="ssr"][type="application/ld+json"]')?.text;
                return itemData ? JSON.parse(itemData) : null;
            };
            const itemData = getJsonItemData();
            const itemId = itemData?.offers?.sku;

            if (!itemId) {
                console.error("Kon item ID niet ophalen!");
            } else {
                console.log(`Item ID: ${itemId}`);

                // Exponea-aanroep instellen
                const options = {
                    recommendationId: "66c35ff125986ba33efdf5fa",
                    callback: onRecommendationsLoaded,
                    size: 20,
                    items: { [itemId]: 1 },
                };

                // Callbackfunctie voor aanbevelingen
                function onRecommendationsLoaded(data) {
                    console.log("Aanbevelingen ontvangen:", data);

                    const buySection = document.querySelector("#buySection > div");
                    if (!buySection) {
                        console.error("BuySection niet gevonden!");
                        return;
                    }

                    buySection.innerHTML = ""; // Reset huidige inhoud
                    const recommendationsDiv = document.createElement('div');
                    recommendationsDiv.className = "recommendationbox-pdp";
                    recommendationsDiv.innerHTML = `
                        <span class="not-available large sf-badge" style=" display: block; font-size: 18px; background-color: unset; color: black; padding: 0 10px 10px 10px;">
                            Dit product is helaas niet meer leverbaar. <br> Bekijk onze alternatieven:
                        </span>
                    `;
                    buySection.appendChild(recommendationsDiv);

                    let recommendationsShown = 0;
                    if (item.title_nl.includes("occasion")) {
                        console.log("occasion gevonden");
                        if (data && data.length > 0) {
                            for (let item of data) {
                                const itemPrice = parseFloat(item.item_price_with_cashback || item.item_price || 0);
                                const productRating = Math.round(100 * item.average_review_rating / 5);
                                const ratingClass = productRating === 0 ? 'ab-rating-hidden' : '';

                                if (itemPrice >= lowerBound && itemPrice <= upperBound) {
                                    const itemDiv = document.createElement('div');
                                    itemDiv.className = "pdp-reco";
                                    itemDiv.innerHTML = `
                                <div class="container-wrapper">
                                    <div class="item-image">
                                        <a href="${item.url}" target="_blank" style="text-decoration:none;">
                                            <img src="${item.image}" alt="${item.title}" class="reco-image" />
                                        </a>
                                    </div>
                                    <div class="item-info">
                                        <p class="item-name">
                                            <a href="${item.url}" target="_blank" style="color: #333; text-decoration: none; font-weight: bold;">
                                                ${item.title}
                                            </a>
                                        </p>
                                        <p class="price">€${itemPrice.toFixed(2)}</p>
                                        <div class="ab-rating-wrapper ${ratingClass}"><div class="ab-rating"><span style="width: ${productRating}%;"></span></div><div class="ab-rating-votes">(${item.amount_of_reviews})</div></div>
                                    </div>
                                    <div class="item-button">
                                        <a href="${item.url}" target="_blank">
                                            <button class="orange-button">Bekijk nu</button>
                                        </a>
                                    </div>
                                </div>
                                `;
                                    recommendationsDiv.appendChild(itemDiv);

                                    recommendationsShown++;
                                    if (recommendationsShown >= 2) break;  // Beperk tot 2 aanbevelingen
                                }
                            }

                            if (recommendationsShown === 0) {
                                recommendationsDiv.innerHTML += "<p>Geen alternatieven gevonden binnen jouw prijsklasse.</p>";
                            }
                        } else {
                            recommendationsDiv.innerHTML += "<p>Geen aanbevelingen gevonden.</p>";
                        }
                    }
                }
                // Aanbevelingen ophalen via Exponea
                if (typeof exponea !== 'undefined') {
                    exponea.getRecommendation(options);
                } else {
                    console.error("Exponea SDK is niet geladen!");
                }
            }
        }
    }
} else {
    console.log("Product is nog beschikbaar.");
}
