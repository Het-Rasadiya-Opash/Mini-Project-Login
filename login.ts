const email = document.getElementById("email") as HTMLInputElement;
const password = document.getElementById("password") as HTMLInputElement;
const form = document.querySelector(".form") as HTMLFormElement;
const username = document.getElementById("username") as HTMLInputElement;
const phoneNumber = document.getElementById("phone") as HTMLInputElement;


const emailPattern: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phonePattern: RegExp = /^\d{10}$/;


form.addEventListener("submit", (e: SubmitEvent): void => {
  e.preventDefault();

  const emailValue = email.value.trim();
  const passwordValue = password.value;
  const phoneValue = phoneNumber.value.trim();
  const usernameValue = username.value.trim();

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