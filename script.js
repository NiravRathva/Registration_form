const  validateForm=(event)=> {
  event.preventDefault(); // Prevent form submission

  // Get form field values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const city = document.getElementById("city").value;
  const phone = document.getElementById("phone").value;

  // Regular expression patterns for validation
  const namePattern = /^[a-zA-Z ]+$/;
  const cityPattern = /^[a-zA-Z ]+$/;
  const emailPattern = /\S+@\S+\.\S+/;
  const phonePattern = /^[0-9]{10}$/;

  // Validate form fields
  if (!namePattern.test(name)) {
    showMessage("error", "Please enter a valid name.");
  } else if (!emailPattern.test(email)) {
    showMessage("error", "Please enter a valid email address.");
  } else if (password.length < 6) {
    showMessage("error", "Password should be at least 6 characters long.");
  } else if (!cityPattern.test(city)) {
    showMessage("error", "Please enter a valid city.");
  } else if (!phonePattern.test(phone)) {
    showMessage("error", "Please enter a valid 10-digit phone number.");
  } else {
    showMessage("success", "Registration successful!");
    document.getElementById("registrationForm").reset(); // Reset form
  }
}

const showMessage=(type,message)=>{
  const messageElement = document.getElementById("message");
  messageElement.innerHTML = message;
  messageElement.className = type;
}