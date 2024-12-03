
function movePriceUp() {
    const buySectionColumn = document.querySelector('.buy-section-wrapper');
    if(buySectionColumn) {
        const priceElement = buySectionColumn.querySelector('.price-container');
        if(priceElement) {
            buySectionColumn.prepend(priceElement);
        }
    }
}

function removeEmptyCashbackContainer() {
    const cashbackPriceContainer = document.querySelector('.buy-section-wrapper .cashback-price-container');
    if(cashbackPriceContainer) {
        const cashbackContent = cashbackPriceContainer.textContent.trim();
        if(cashbackContent === '') {
            cashbackPriceContainer.remove();
        }
    }
}

function applySendingCosts() {
    const priceContainer = document.querySelector('.buy-section-wrapper .price-container');
    if(priceContainer) {
        priceContainer.after(
            new DOMParser().parseFromString(
                '<div class="ab4365-sending-costs">inkl. MwST / versandkostenfrei</div>',
                'text/html'
            ).body.firstChild
        )
    }
}

function applyStylesheet() {
    const se = document.createElement('style');
    se.textContent = '.ab4365-sending-costs{font-size:14px;font-weight:700;transform:translateY(-15px)}.ab-4365-pdp .buy-section-wrapper .current-price{color:#ea0c27} .buysection-divider-top.sf-divider{display:none;}';
    document.querySelector('head').append(se);
}

function changeUSP() {
    const uspBlock = document.querySelector('.buy-section-usps-container');
    if(uspBlock) {
        const uspList = uspBlock.querySelectorAll('button');
        uspList.forEach(usp => {
            const uspSpan = usp.querySelector('.icon-usp-label');
            if(uspSpan) {
                if(uspSpan.textContent.trim() === '42.000 Produkte auf Lager') {
                    uspSpan.textContent = 'Kostenloser Versand ab 39€';
                    uspBlock.prepend(usp);
                }
            }
        })
    }
}
function addHR() {
    
    const parser = new DOMParser();
    const addHR = parser.parseFromString('<hr class="ab-buysection-divider-top ab-sf-divider" style="--ab-divider-margin: -15px 0 20px 0px; border: 1px solid #dadada; position: relative; left: -16px; width: 100vw; bottom: 16px;" >','text/html').body.firstChild;
    const parent = document.querySelector('#buySection')
    if (window.matchMedia("(min-width: 768px)").matches) {
    } else {
        parent.prepend(addHR);
    }
}

function main4365() {

    if(document.querySelector('.ab-4365-pdp')) {
        return;
    }

    document.querySelector('html').classList.add('ab-4365-pdp');

    applyStylesheet();
    movePriceUp();
    removeEmptyCashbackContainer();
    changeUSP();
    addHR();

    setTimeout(() => {
        applySendingCosts();
    },100);
}

main4365();












function movePriceUp() {
    const buySectionColumn = document.querySelector('.buy-section-wrapper');
    if(buySectionColumn) {
        const priceElement = buySectionColumn.querySelector('.price-container');
        if(priceElement) {
            buySectionColumn.prepend(priceElement);
        }
    }
}

function removeEmptyCashbackContainer() {
    const cashbackPriceContainer = document.querySelector('.buy-section-wrapper .cashback-price-container');
    if(cashbackPriceContainer) {
        const cashbackContent = cashbackPriceContainer.textContent.trim();
        if(cashbackContent === '') {
            cashbackPriceContainer.remove();
        }
    }
}

function applySendingCosts() {
    const priceContainer = document.querySelector('.buy-section-wrapper .price-container');
    if(priceContainer) {
        priceContainer.after(
            new DOMParser().parseFromString(
                '<div class="ab4365-sending-costs">inkl. MwST / versandkostenfrei</div>',
                'text/html'
            ).body.firstChild
        )
    }
}

function applyStylesheet() {
    const se = document.createElement('style');
    se.textContent = '.ab4365-sending-costs{font-size:14px;font-weight:700;transform:translateY(-15px)}.ab-4365-pdp .buy-section-wrapper .current-price{color:#ea0c27}';
    document.querySelector('head').append(se);
}

function changeUSP() {
    const uspBlock = document.querySelector('.buy-section-usps-container');
    if(uspBlock) {
        const uspList = uspBlock.querySelectorAll('button');
        uspList.forEach(usp => {
            const uspSpan = usp.querySelector('.icon-usp-label');
            if(uspSpan) {
                if(uspSpan.textContent.trim() === '42.000 Produkte auf Lager') {
                    uspSpan.textContent = 'Kostenloser Versand ab 39€';
                    uspBlock.prepend(usp);
                }
            }
        })
    }
}

function main4365() {

    if(document.querySelector('.ab-4365-pdp')) {
        return;
    }

    document.querySelector('html').classList.add('ab-4365-pdp');

    applyStylesheet();
    movePriceUp();
    removeEmptyCashbackContainer();
    changeUSP();

    setTimeout(() => {
        applySendingCosts();
    },100);
}

main4365();