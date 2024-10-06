document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Collect form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const responseMessage = document.getElementById("responseMessage");

  // Simple validation
  if (name === "" || email === "" || message === "") {
    responseMessage.style.color = "red";
    responseMessage.textContent = "Please fill in all required fields.";
    return;
  }

  // Simulate sending form data
  responseMessage.style.color = "green";
  responseMessage.textContent = "Message sent successfully!";

  // Optionally, reset the form after submission
  document.getElementById("contactForm").reset();

  setTimeout(function () {
    responseMessage.textContent = "";
  }, 3000);
});
