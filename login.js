var email = document.getElementById("email");
var password = document.getElementById("password");
var form = document.querySelector(".form");
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
});
