(function () {
 
    var productGrid = document.querySelector(".plp-main-content");
 
    if (!productGrid) {
        return;
    }
 
    const OLD_LABEL = 'Op voorraad'
    const NEW_LABEL = 'Morgen in huis';
 
    var observer = new MutationObserver(function (mutationRecords) {
        renameLabels();
    });
 
    observer.observe(productGrid, {
        childList: true
    });
 
    renameLabels();
 
    function renameLabels() {
        try {
            let tiles = productGrid.querySelectorAll('.product-card-container');
 
            if(tiles.length) {
                tiles.forEach((tile) => {
                    tileStatus = tile.querySelector('.product-card-status-container span span');
                    const currentLabel = tileStatus.textContent.trim();
 
                    if(currentLabel == OLD_LABEL) {
                        tileStatus.textContent = NEW_LABEL;
                    }
                })
            }
 
        } catch (e) {
            console.log(e);
        }
    }
})();