const email = document.getElementById("email") as HTMLInputElement;
const password = document.getElementById("password") as HTMLInputElement;
const form = document.querySelector(".form") as HTMLFormElement;
form.addEventListener("submit", (e: Event) => {
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
});
