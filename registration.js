const form = document.getElementById("registrationForm");
const inputs = form.querySelectorAll(".form-control, .form-select");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const genderInputs = document.querySelectorAll('input[name="gender"]');
const genderFeedback = document.getElementById("genderFeedback");

function validateInput(input) {
    let valid = input.checkValidity();

    if (input.id === "confirmPassword") {
        valid = valid && input.value === password.value;
    }

    if (valid) {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
    } else {
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
    }

    return valid;
}

inputs.forEach(function(input) {
    input.addEventListener("input", function() {
        validateInput(input);

        if (input.id === "password" && confirmPassword.value !== "") {
            validateInput(confirmPassword);
        }
    });

    input.addEventListener("change", function() {
        validateInput(input);
    });
});

function validateGender() {
    const selected = document.querySelector('input[name="gender"]:checked');

    if (selected) {
        genderFeedback.style.display = "none";

        genderInputs.forEach(function(input) {
            input.classList.remove("is-invalid");
        });

        return true;
    } else {
        genderFeedback.style.display = "block";

        genderInputs.forEach(function(input) {
            input.classList.add("is-invalid");
        });

        return false;
    }
}

genderInputs.forEach(function(input) {
    input.addEventListener("change", validateGender);
});

form.addEventListener("submit", function(event) {
    event.preventDefault();

    inputs.forEach(function(input) {
        validateInput(input);
    });

    validateGender();
});

form.addEventListener("reset", function() {
    inputs.forEach(function(input) {
        input.classList.remove("is-valid", "is-invalid");
    });

    genderInputs.forEach(function(input) {
        input.classList.remove("is-invalid");
    });

    genderFeedback.style.display = "none";
});