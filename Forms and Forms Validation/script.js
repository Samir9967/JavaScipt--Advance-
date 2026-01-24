let form = document.querySelector("form");
let names = document.querySelector("#name");
// let div = document.querySelector("p");
let email = document.querySelector("#email");
let password = document.querySelector("#password");

form.addEventListener("submit", (dets) => {
  dets.preventDefault();
  document.querySelector(".emailError").textContent = "";
  document.querySelector(".passwordError").textContent = "";

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  let emailAns = emailRegex.test(email.value);
  let passwordAns = passwordRegex.test(password.value);

  if (!emailAns) {
    document.querySelector(".emailError").style.display = "initial";
    document.querySelector(".emailError").textContent =
      "Your Email is incorrect!!";
  }

  if (!passwordAns) {
    document.querySelector(".passwordError").style.display = "initial";
    document.querySelector(".passwordError").textContent =
      "Your Password is incorrect!!";
  }
});
