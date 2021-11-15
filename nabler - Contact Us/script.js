const form = document.getElementById("send-us-form");

// invalid input error elements
const invalidName = document.getElementById("invalid-name");
const invalidEmail = document.getElementById("invalid-email");
const invalidMsg = document.getElementById("invalid-msg");
const invalidCName = document.getElementById("invalid-cname");

if (form.attachEvent) {
  form.attachEvent("submit", processForm);
} else {
  form.addEventListener("submit", processForm);
}

// utility functions
function applyErrorStyles(ele, isValid) {
  ele.style.display = isValid ? "none" : "block";

  ele.parentElement.children[0].style.border = `1px solid ${
    isValid ? "#ced4da" : "#dc3545"
  }`;
}

// validation functions
function validateName(name) {
  const isValid = name.length > 0 && !/[^a-zA-Z\s]/.test(name);

  applyErrorStyles(invalidName, isValid);

  return isValid;
}

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const isValid = re.test(String(email).toLowerCase());

  applyErrorStyles(invalidEmail, isValid);

  return isValid;
}

function validateMsg(msg) {
  const isValid = msg.length >= 20;

  applyErrorStyles(invalidMsg, isValid);

  return isValid;
}

function validateCName(cname) {
  const isValid = cname.length > 0;

  applyErrorStyles(invalidCName, isValid);

  return isValid;
}

function processForm(e) {
  if (e.preventDefault) e.preventDefault();

  var formData = new FormData(form);

  var name = formData.get("name");
  var email = formData.get("email");
  var companyName = formData.get("companyName");
  var message = formData.get("message");
  var receiveMails = formData.get("receiveMails");

  // validation inputs
  const isValidName = validateName(name);
  const isValidEmail = validateEmail(email);
  const isValidCName = validateCName(companyName);
  const isValidMsg = validateMsg(message);

  if (!(isValidName && isValidEmail && isValidCName && isValidMsg)) {
    return;
  }

  const emailData = {
    name,
    email,
    companyName,
    message,
    receiveMails: Boolean(receiveMails),
  };

  const emailDataStr = JSON.stringify(emailData);

  //   Storing in Local Storage
  localStorage.setItem("emailData", emailDataStr);

  // Storing in Session Storage
  sessionStorage.setItem("emailData", emailDataStr);

  // Storing in Browser Cookie
  document.cookie = JSON.stringify(emailDataStr);
  form.reset();
}
