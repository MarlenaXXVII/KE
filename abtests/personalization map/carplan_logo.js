(function () {
    // Function to check for the presence of the elements
    function changeCareplanImage() {
        var careplanLogo = document.querySelector('.careplan-logo');
        if (careplanLogo) {
            careplanLogo.src = 'media/0289a058-fc7c-4cbd-9bdd-d48da062894c/ke-uitgebreid-verzekeringspakket-png.png';
        }
    }

    // Polling to check for elements every 300 milliseconds
    var intervalId = setInterval(changeCareplanImage, 100);

    // Optional: Stop polling after 10 seconds to prevent infinite checking
    setTimeout(function () {
        clearInterval(intervalId);
    }, 10000);
})();