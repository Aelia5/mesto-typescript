const formElement = document.querySelector('.popup__form');
const formInput = formElement.querySelector('.popup__item');
const formError = formElement.querySelector(`.popup__item-error_content_${formInput.id}`);

function showInputError (element, errorMessage) {
  element.classList.add ('popup__item_type_error');
  formError.textContent = errorMessage;
  formError.classList.add('popup__item-error_active');
}

function hideInputError (element) {
  element.classList.remove ('popup__item_type_error');
  formError.classList.remove('popup__item-error_active');
  formError.textContent = '';
}

function isValid () {
  if (!formInput.validity.valid) {
    showInputError(formInput, formInput.validationMessage);
  }
  else {
    hideInputError(formInput);
  }
}

formInput.addEventListener('input', isValid);
