var email = document.getElementById("email");
var password = document.getElementById("password");
var form = document.querySelector(".form");
var emailPattern = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
form.addEventListener("submit", function (e) {
    e.preventDefault();
    var emailValue = email.value;
    var passwordValue = password.value;
    if (emailValue === "" || passwordValue === "") {
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
});
