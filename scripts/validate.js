function showInputError (formElement, inputElement, errorMessage) {
  const errorElement = formElement.querySelector(`.popup__item-error_content_${inputElement.id}`);
  inputElement.classList.add ('popup__item_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__item-error_active');
}

function hideInputError (formElement, inputElement) {
  const errorElement = formElement.querySelector(`.popup__item-error_content_${inputElement.id}`);
  inputElement.classList.remove ('popup__item_type_error');
  errorElement.classList.remove('popup__item-error_active');
  errorElement.textContent = '';
}

function isValid (formElement, inputElement) {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  }
  else {
    hideInputError(formElement, inputElement);
  }
}

function setEventListeners (formElement) {
  const inputList = Array.from(formElement.querySelectorAll('.popup__item'));
  const buttonElement = formElement.querySelector('.popup__submit-button');
  inputList.forEach(function(inputElement) {
    inputElement.addEventListener('input', function () {
      isValid (formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    })
  })
}

function enableValidation () {
  const formList = Array.from(document.querySelectorAll('.popup__form'));
  formList.forEach(function(formElement) {
    setEventListeners(formElement);
  })
}

enableValidation();

function hasInvalidInput (inputList) {
  return inputList.some(function (inputElement) {
    return !inputElement.validity.valid;
  })
}

function toggleButtonState (inputList, buttonElement) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.remove('popup__submit-button_active');
  }
  else {
    buttonElement.classList.add ('popup__submit-button_active');
  }
}
