(function() {
    function checkAndHideInspirationBlock() {
        var checkIfHomepage = document.querySelector(".promo-banners-container");
        if (checkIfHomepage) {
            var inspirationalTiles = document.querySelector(".inspirational-tiles-container");
            if (inspirationalTiles) {
                inspirationalTiles.style.display = "none";
                clearInterval(intervalId);
            }
        }
    }

    var intervalId = setInterval(checkAndHideInspirationBlock, 300);
    
    setTimeout(function() {
        clearInterval(intervalId);
    }, 10000);
})();