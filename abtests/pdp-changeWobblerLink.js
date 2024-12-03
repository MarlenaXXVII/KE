document.querySelectorAll('.sf-gallery-promotions-container span').forEach((el) => {

    const element = document.getElementById('promotionsSection');
    el.addEventListener('click', function (e) {

        e.preventDefault();
        e.stopPropagation();
        element.scrollIntoView({
            block: 'center',
            behavior: 'smooth'
        });
    });
});



//foreach span in the container "sf-gallery-promotions-container"
document.querySelectorAll('.sf-gallery-promotions-container span').forEach((el) => {
    //define "element" which will be used to create the anchor for the scroll into view function
    const element = document.getElementById('promotionsSection');

    //foreach "el" create an event listener onclick with this function(e)
    el.addEventListener('click', function (e) {
        //preventDefault stops the default action of this (el)
        e.preventDefault();
        //prevents propagation of the same event from being called (https://stackoverflow.com/questions/5963669/whats-the-difference-between-event-stoppropagation-and-event-preventdefault)
        e.stopPropagation();
        //execute this on each click
        element.scrollIntoView({
            block: 'center',
            behavior: 'smooth'
        });
    });
});