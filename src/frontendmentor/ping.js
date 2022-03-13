const emailInputElement = document.getElementById("email-input");
const warningMessageElement = document.querySelector(".validate-warning");
const submitBtnElement = document.getElementById("submit-btn");
const formElement = document.getElementById("main-form");

const mailFormat =
  /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

let validateForm = () => {
  if (emailInputElement.value.match(mailFormat)) {
    warningMessageElement.style.display = "block";
    warningMessageElement.textContent = "Form submitted!";
    warningMessageElement.style.color = "green";
    emailInputElement.style.borderColor = "green";
    emailInputElement.value = "";
} else if (emailInputElement.value === '') {
    warningMessageElement.style.display = "block";
    warningMessageElement.textContent = "Please enter your email!";
    warningMessageElement.style.color = "orange";
    emailInputElement.style.borderColor = "orange";
} else {
    emailInputElement.style.borderColor = "red";
    warningMessageElement.style.display = "block";
    warningMessageElement.textContent = "Please provide a valid email address";
  }
};

submitBtnElement.addEventListener("click", validateForm);
formElement.addEventListener("submit", (event) => {
  event.preventDefault();
});