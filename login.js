var email = document.getElementById("email");
var password = document.getElementById("password");
var form = document.querySelector(".form");
var username = document.getElementById("username");
var phoneNumber = document.getElementById("phone");
var bod = document.getElementById("bod");
var emailPattern = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
var phonePattern = new RegExp(/^\d{10}$/);
form.addEventListener("submit", function (e) {
    e.preventDefault();
    var emailValue = email.value;
    var passwordValue = password.value;
    var phoneValue = phoneNumber.value;
    var usernameValue = username.value;
    if (emailValue === "" ||
        passwordValue === "" ||
        phoneValue === "" ||
        usernameValue === "") {
        alert("Please fill in all fields...!");
        return;
    }
    if (passwordValue.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }
    if (!emailPattern.test(emailValue)) {
        alert("Please Provide valid email...");
        return;
    }
    if (!phonePattern.test(phoneValue)) {
        alert("Enter Valid Phone Number...");
        return;
    }
    alert("Login Successful...");
    form.submit();
});
