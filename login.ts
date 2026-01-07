const email = document.getElementById("email") as HTMLInputElement;
const password = document.getElementById("password") as HTMLInputElement;
const form = document.querySelector(".form") as HTMLFormElement;
const username = document.getElementById("username") as HTMLInputElement;
const phoneNumber = document.getElementById("phone") as HTMLInputElement;
const bod = document.getElementById("bod") as HTMLInputElement;

const emailPattern = new RegExp(
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
);

const phonePattern = new RegExp(/^\d{10}$/);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  const emailValue = email.value;
  const passwordValue = password.value;
  const phoneValue = phoneNumber.value;
  const usernameValue = username.value;

  if (
    emailValue === "" ||
    passwordValue === "" ||
    phoneValue === "" ||
    usernameValue === ""
  ) {
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
