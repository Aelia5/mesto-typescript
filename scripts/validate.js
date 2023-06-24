const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__item',
  submitButtonSelector: '.popup__submit-button',
  activeButtonClass: 'popup__submit-button_active',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__item-error_active'
}

function showInputError (formElement, inputElement, errorMessage, config) {
  const errorElement = formElement.querySelector(`.error_${inputElement.id}`);
  inputElement.classList.add (config.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(config.errorClass);
}

function hideInputError (formElement, inputElement, config) {
  const errorElement = formElement.querySelector(`.error_${inputElement.id}`);
  inputElement.classList.remove (config.inputErrorClass);
  errorElement.classList.remove(config.errorClass);
  errorElement.textContent = '';
}

function isInputValid (formElement, inputElement) {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, config);
  }
  else {
    hideInputError(formElement, inputElement, config);
  }
}

function toggleButtonState (formElement, buttonElement, config) {
  if (!formElement.checkValidity()) {
    buttonElement.classList.remove(config.activeButtonClass);
    }
  else {
    buttonElement.classList.add (config.activeButtonClass);
      }
}


function setEventListeners (formElement, config) {
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  const buttonElement = formElement.querySelector(config.submitButtonSelector);
  inputList.forEach(function(inputElement) {
    inputElement.addEventListener('input', function () {
      isInputValid (formElement, inputElement);
      toggleButtonState(formElement, buttonElement, config);
    })
  })
}

function enableValidation (config) {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach(function(formElement) {
    setEventListeners(formElement, config);
  })
}

enableValidation(config);

