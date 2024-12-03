// -------------------------HUIDIG--------------------------- \\




(function () {
    //Select the class you want to check
    var productGrid = document.querySelector(".plp-main-content");
    //If its not productGrid, return
    if (!productGrid) {
        return;
    }
    //define the value i want to check (should be 0, but im checking on https://www.kamera-express.nl/systeemcamera and i have taken the 3rd of the first row which is "(15)")
    const NO_REVIEWS = '(15)';
 
    //execute function hideNoReviews();
    hideNoReviews();
    //start of function
    function hideNoReviews() {
        try {
            //select the tile
            let tiles = productGrid.querySelectorAll('.product-card-container');
            // define where to check for 0 reviews (or in my case now 15) 
            const amountReviews = productGrid.querySelector('.product-card-rating-container');
            //Prepare the style element (not sure if this is correct or not, i just took everything from hp_layout-changes.js and adjusted it)
            const styleElement = document.createElement('style');
            styleElement.textContent = '.hideReview{opacity: 0;}';
            document.querySelector('head').append(styleElement);

            //if statement to check if the amountReviews == 0 (or in my case 15 again)
            if(tiles.length) {
                tiles.forEach((tile) => {
                    //check what it says in .review-count and trim it(dont think trimming is neccecary because it will be "(0)"" or we do nothing in this case)
                    tileReview = tile.querySelector('.reviews-count');
                    const amountOfReviews = tileReview.textContent.trim();
                    
                    //This is where im lost, the style is applied, but to the first element in the row. 
                    //Where as im thinking, if amountOfReviews = 0 (15), then add class to this element
                    //How do i add the class to the elements where NO_REVIEWS = 0?
                    if(amountOfReviews == NO_REVIEWS) {
                        amountReviews.classList.add('hideReview');
                    }
                })
            }
            //Error logging
        } catch (e) {
            console.log(e);
        }
    }
})();