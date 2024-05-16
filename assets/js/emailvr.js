/*--Contact form--*/
document.addEventListener('DOMContentLoaded', function() 
{
    var element = document.getElementById('contactForm');
    if (element) {
        element.addEventListener('click', function() {

    fetch('/send-email', {
        method: 'POST',
        body: new FormData(this),
        headers: {
            'Accept': 'application/json',
        },
    })
       
});
}
else {
    console.error("Element with ID 'yourElementId' not found.");
}
});
