# Assignment 4 — Forms and Validation

## Project Overview

This project was developed for the Web Technologies course. The main purpose is to practice creating HTML forms, validating user input, and using Bootstrap 5 for responsive design.

The assignment includes five tasks, from a simple contact form to a registration form with JavaScript validation.

## Tasks Description

### Task 0 — Simple Contact Form
Created a basic contact form using HTML. It includes Name, Email, Message, and Submit button. Each field has a label connected to its input.

### Task 1 — HTML5 Validation
Improved the contact form by adding built-in HTML5 validation. The `required` attribute prevents empty submissions, `type="email"` checks the email format, and `maxlength` limits the input length.

### Task 2 — Bootstrap Form Styling
Designed a contact form using Bootstrap 5. Used the Bootstrap Grid System to create a responsive layout, along with `form-control`, `form-label`, placeholders, and helper text.

### Task 3 — Bootstrap Validation Feedback
Implemented form validation using JavaScript and Bootstrap. The form uses `checkValidity()` to check input values and applies `is-valid` or `is-invalid` classes. Success and error messages appear using Bootstrap feedback components.

### Task 4 — Registration Form
Created a responsive registration form with First Name, Last Name, Email, Password, Confirm Password, Gender, Hobbies, and Country.

The form includes:
- HTML5 validation for required fields and password length
- JavaScript validation for password confirmation and gender selection
- Bootstrap success and error feedback
- Register and Reset buttons

## Technologies Used

- **HTML5** — form elements and validation attributes
- **CSS3** — custom styling and colors
- **Bootstrap 5** — responsive layout and form styling
- **JavaScript** — validation and feedback messages

## Project Structure

```text
assignment4-web/
├── index.html
├── validation.html
├── bootstrap.html
├── feedback.html
├── feedback.js
├── registration.html
├── registration.js
├── style.css
└── README.md
```

## How to Run

1. Clone or download the repository.
2. Open `index.html` in a browser or using VS Code Live Server.
3. Use the navigation bar to switch between Tasks 0–4.
4. Test the forms by entering valid and invalid information.
