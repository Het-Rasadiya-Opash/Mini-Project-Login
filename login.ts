const email = document.getElementById("email") as HTMLInputElement;
const password = document.getElementById("password") as HTMLInputElement;
const form = document.querySelector(".form") as HTMLFormElement;
const emailPattern = new RegExp(
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailValue = email.value;
  const passwordValue = password.value;
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
