function validateForm(event) {
  event.preventDefault(); // Prevent form submission

  // Clear previous error messages
  clearErrors();

  // Validate name
  const nameInput = document.getElementById('name');
  if (nameInput.value === '') {
    displayError('nameError', 'Name is required');
    nameInput.focus();
    return false;
  }

  // Validate email
  const emailInput = document.getElementById('email');
  if (emailInput.value === '') {
    displayError('emailError', 'Email is required');
    emailInput.focus();
    return false;
  }

  // Validate phone number
  const phoneInput = document.getElementById('phone');
  if (phoneInput.value === '') {
    displayError('phoneError', 'Phone number is required');
    phoneInput.focus();
    return false;
  }

  // Validate password
  const passwordInput = document.getElementById('password');
  if (passwordInput.value === '') {
    displayError('passwordError', 'Password is required');
    passwordInput.focus();
    return false;
  }

  // Validate age
  const ageInput = document.getElementById('age');
  if (ageInput.value === '' || isNaN(ageInput.value)) {
    displayError('ageError', 'Age is required and must be a number');
    ageInput.focus();
    return false;
  }

  // Validate gender
  const genderInput = document.getElementById('gender');
  if (genderInput.value === '') {
    displayError('genderError', 'Gender is required');
    genderInput.focus();
    return false;
  }

  // Validate date
  const dateInput = document.getElementById('date');
  if (dateInput.value === '') {
    displayError('dateError', 'Date is required');
    dateInput.focus();
    return false;
  }

  // Validate color
  const colorInput = document.getElementById('color');
  if (colorInput.value === '') {
    displayError('colorError', 'Favorite color is required');
    colorInput.focus();
    return false;
  }

  // Form is valid, do something with the data
  alert('Form submitted successfully!');
  return true;
}

function displayError(elementId, errorMessage) {
  const errorElement = document.getElementById(elementId);
  errorElement.innerText = errorMessage;
}

function clearErrors() {
  const errorElements = document.getElementsByClassName('error');
  for (let i = 0; i < errorElements.length; i++) {
    errorElements[i].innerText = '';
  }
}

console.log('vimal');
