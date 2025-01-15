// Voeg de script tag dynamisch toe aan de head
(function addFlowboxEmbed() {
    // Controleer of de script al bestaat
    if (document.getElementById('flowbox-js-embed')) {
        console.log('Flowbox script is al ingeladen.');
        return;
    }

    // Creëer een script element
    var script = document.createElement('script');
    script.id = 'flowbox-js-embed';
    script.async = true;
    script.src = 'https://connect.getflowbox.com/flowbox.js';

    // Voeg het script toe aan de head
    document.head.appendChild(script);

    // Initialiseer flowbox als het niet bestaat
    if (!window.flowbox) {
        var f = function () {
            f.q.push(arguments);
        };
        f.q = [];
        window.flowbox = f;
    }
})();




// Voeg de script tag dynamisch toe aan de head
(function addTrustedWidget() {

    // Creëer een script element
    var script = document.createElement('script');
    script.async = true;
    script.defer = true;
    script.src = 'https://integrations.etrusted.com/applications/widget.js/v2';

    // Voeg het script toe aan de head
    document.head.appendChild(script);
})();
<script src="https://integrations.etrusted.com/applications/widget.js/v2" defer async></script>