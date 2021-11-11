/* Client Validation */
const form = document.getElementById('signup');
// let form = document.getElementById('subscribe');
const { email } = form.elements;
// const emailAddress = email.value;

const requiredFields = [
  { input: email, message: 'Email is required' },
];

function error(input, message) {
  input.className = 'error';
  // show the error message
  const error = document.querySelector('.labelformat');
  error.innerText = message;
  return false;
}

function success(input) {
  input.className = 'success';
  // hide the error message
  const error = input.previousElementSibling;
  error.innerText = '';
  return true;
}

function validateEmail(input) {
  const re = /^[a-z0-9.!#$%&'*+=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z90-]+)*$/;

  return re.test(input.value.trim())
    ? success(input)
    : error(input, 'Invalid email format. Use Lowercase');
}

// checks if an input element has a non-empty
function requireValue(input, message) {
  return input.value.trim() === ''
    ? error(input, message)
    : success(input);
}

form.addEventListener('submit', (event) => {
  // check required fields
  let valid = true;
  requiredFields.forEach((input) => {
    valid = requireValue(input.input, input.message);
  });
  // validate email
  if (valid) {
    valid = validateEmail(email);
  }
  // stop submitting the form if the data is invalid
  if (!valid) {
    event.preventDefault();
  }
});