"use strict";

const form = document.querySelector('.main-form');
const submitBtn = document.getElementById("submit-info");

const userName = document.querySelector(".first-name");
const nameLabel = document.querySelector(".name-label");
const nameError = document.querySelector(".first-name-error");

const userLastName = document.querySelector(".last-name");
const lastNameLabel = document.querySelector(".lastname-label");
const lastNameError = document.querySelector(".last-name-error");

const userEmail = document.querySelector(".user-email");
const emailLabel = document.querySelector(".email-label");
const emailError = document.querySelector(".user-email-error");

const userPass = document.querySelector(".user-pass");
const passLabel = document.querySelector(".pass-label");
const passError = document.querySelector(".user-pass-error");

const successMsg = document.querySelector(".success-msg");

const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passValidation = /^[A-Za-z]\w{7,14}$/;

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const userNameValueLength = userName.value.length;
  const userLastNameValueLength = userLastName.value.length;

  if (userNameValueLength === 0) {
    nameLabel.textContent = "First Name cannot be empty";
    userName.style.borderColor = "red";
    nameError.style.display = "inline";
  }

  if (userLastNameValueLength === 0) {
    lastNameLabel.textContent = "Last Name cannot be empty";
    userLastName.style.borderColor = "red";
    lastNameError.style.display = "inline";
  }

  if (userEmail.value.length === 0) {
    emailLabel.textContent = "Email cannot be empty";
    userEmail.style.borderColor = "red";
    emailError.style.display = "inline";
  } else if (!userEmail.value.match(emailValidation)) {
    emailLabel.textContent = "Looks like this is not an email";
    userEmail.style.borderColor = "red";
    emailError.style.display = "inline";
  }

  if (userPass.value.length === 0) {
    passLabel.textContent = "Password cannot be empty";
    userPass.style.borderColor = "red";
    passError.style.display = "inline";
  } else if (!userPass.value.match(passValidation)) {
    passLabel.textContent =
      "A password must be between 7-16 characters that starts with a letter (Only letters, numbers & underscore)";
    userPass.style.borderColor = "red";
    passError.style.display = "inline";
  }

  if (userNameValueLength > 0 && userLastNameValueLength > 0 && userEmail.value.match(emailValidation) && userPass.value.match(passValidation)) {
    successMsg.textContent = "Success! Please check your email";
    form.submit();
  } else {
    console.log("Unknown error");
  }
});
