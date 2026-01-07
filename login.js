var email = document.getElementById("email");
var password = document.getElementById("password");
var form = document.querySelector(".form");
var username = document.getElementById("username");
var phoneNumber = document.getElementById("phone");
var bod = document.getElementById("bod");
var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
var phonePattern = /^\d{10}$/;
form.addEventListener("submit", function (e) {
    e.preventDefault();
    var emailValue = email.value.trim();
    var passwordValue = password.value;
    var phoneValue = phoneNumber.value.trim();
    var usernameValue = username.value.trim();
    if (!emailValue || !passwordValue || !phoneValue || !usernameValue) {
        alert("Please fill in all fields!");
        return;
    }
    if (passwordValue.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }
    if (!emailPattern.test(emailValue)) {
        alert("Please provide a valid email.");
        return;
    }
    if (!phonePattern.test(phoneValue)) {
        alert("Enter a valid 10-digit phone number.");
        return;
    }
    alert("Login Successful.");
    form.submit();
});
