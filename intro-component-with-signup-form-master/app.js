const form = document.getElementById("form");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log(!isValid(email.value));

  if (firstname.value.trim() === "") {
    addErrorTo(firstname, "Firstname is required");
  } else {
    removeError(firstname);
  }

  if (lastname.value.trim() === "") {
    addErrorTo(lastname, "Lastname is required");
  } else {
    removeError(lastname);
  }

  if (email.value.trim() === "") {
    addErrorTo(email, "Email is required");
  } else if (isValid(email.value) === false) {
    addErrorTo(email, "Email is not valid");
  } else {
    removeError(email);
  }

  if (password.value.trim() === "") {
    addErrorTo(password, "Password is required");
  } else {
    removeError(password);
  }
});

function addErrorTo(field, message) {
  console.log(field.parentElement);
  const formControl = field.parentElement;
  formControl.classList.add("error");
  const small = field.nextElementSibling;
  small.innerText = message;
}

function removeError(field) {
  const formControl = field.parentElement;
  formControl.classList.remove("error");
  const small = field.nextElementSibling;
  small.style.opacity = 0;
}

function isValid(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
