const emailInput = document.getElementById('email');

const inputContainer = document.querySelector('.input-container');
const inputIcon = document.querySelector('.input-icon');
const validationMessage = document.createElement('p');

function validateEmail(inputText) {
  var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (inputText.match(mailformat)) {
    inputIcon.style.display = 'block';
    inputIcon.style.background =
      ' url(../img/valid.png) no-repeat center center / cover';
    validationMessage.classList.add('validation-text');
    validationMessage.style.color = '#00e038';
    validationMessage.innerText = 'You Email Address is Valid';
    inputContainer.appendChild(validationMessage);
  } else {
    inputIcon.style.display = 'block';
    inputIcon.style.background =
      ' url(../img/invalid.png) no-repeat center center / cover';
    validationMessage.classList.add('validation-text');
    validationMessage.style.color = '#e94646';
    validationMessage.innerText = 'Please Enter Valid Email Address';
    inputContainer.appendChild(validationMessage);
  }
}

emailInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    validateEmail(emailInput.value.toString());
  }
});
