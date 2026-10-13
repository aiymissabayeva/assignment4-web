const form = document.getElementById("contactForm");
const inputs = form.querySelectorAll(".form-control");

inputs.forEach(function(input) {
    input.addEventListener("input", function() {
        if (input.checkValidity()) {
            input.classList.add("is-valid");
            input.classList.remove("is-invalid");
        } else {
            input.classList.add("is-invalid");
            input.classList.remove("is-valid");
        }
    });
});

form.addEventListener("submit", function(event) {
    event.preventDefault();

    inputs.forEach(function(input) {
        if (input.checkValidity()) {
            input.classList.add("is-valid");
            input.classList.remove("is-invalid");
        } else {
            input.classList.add("is-invalid");
            input.classList.remove("is-valid");
        }
    });
});
