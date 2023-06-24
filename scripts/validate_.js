function showInputError (formElement, inputElement, errorMessage) {
  const errorElement = formElement.querySelector(`${errorClass}_${inputElement.id}`);
  inputElement.classList.add (inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(errorClass);
}

function hideInputError (formElement, inputElement) {
  const errorElement = formElement.querySelector(`${errorClass}_${inputElement.id}`);
  inputElement.classList.remove (inputErrorClass);
  errorElement.classList.remove(errorClass);
  errorElement.textContent = '';
}

function isInputValid (formElement, inputElement) {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  }
  else {
    hideInputError(formElement, inputElement);
  }
}

function toggleButtonState (formElement, buttonElement) {
  if (!formElement.checkValidity()) {
    buttonElement.classList.remove(activeButtonClass);
    }
  else {
    buttonElement.classList.add (activeButtonClass);
      }
}

function setEventListeners (formElement) {
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  const buttonElement = formElement.querySelector(submitButtonSelector);
  inputList.forEach(function(inputElement) {
    inputElement.addEventListener('input', function () {
      isInputValid (formElement, inputElement);
      toggleButtonState(formElement, buttonElement);
    })
  })
}

function enableValidation () {
  const formList = Array.from(document.querySelectorAll(formSelector));
  formList.forEach(function(formElement) {
    setEventListeners(formElement);
  })
}
enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__item',
  submitButtonSelector: '.popup__submit-button',
  activeButtonClass: 'popup__submit-button_active',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__item-error_active'
});

