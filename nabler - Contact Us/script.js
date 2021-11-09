const form = document.getElementById("send-us-form");

if (form.attachEvent) {
  form.attachEvent("submit", processForm);
} else {
  form.addEventListener("submit", processForm);
}

function processForm(e) {
  if (e.preventDefault) e.preventDefault();

  var formData = new FormData(form);

  var name = formData.get("name");
  var email = formData.get("email");
  var companyName = formData.get("companyName");
  var message = formData.get("message");
  var receiveMails = formData.get("receiveMails");

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
