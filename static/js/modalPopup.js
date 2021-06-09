function defence() {
    // All following code was taken from w3schools
    // Get the modal
    let modal = document.getElementById("modal-popup");

    // Get the button that opens the modal
    let btn = document.getElementById("open-popup");

    // Get the <span> element that closes the modal
    let span = document.getElementById("close-popup");

    // When the user clicks on the button, open the modal
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
};

defence();
