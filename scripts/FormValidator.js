export class FormValidator {
  constructor(data, formElement) {
    (this._formSelector = data.formSelector),
      (this._inputSelector = data.inputSelector),
      (this._errorSelector = data.errorSelector),
      (this._submitButtonSelector = data.submitButtonSelector),
      (this._activeButtonClass = data.activeButtonClass),
      (this._inputErrorClass = data.inputErrorClass),
      (this._errorActiveClass = data.errorActiveClass),
      (this._errorSelectorTemplate = data.errorSelectorTemplate),
      (this._formElement = formElement);
  }

  _getErrorElement(inputElement) {
    return this._formElement.querySelector(
      `${this._errorSelectorTemplate}${inputElement.id}`
    );
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._getErrorElement(inputElement);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorActiveClass);
  }

  _hideInputError(inputElement) {
    const errorElement = this._getErrorElement(inputElement);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorActiveClass);
    errorElement.textContent = "";
  }

  _isInputValid(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _toggleButtonState(buttonElement) {
    if (!this._formElement.checkValidity()) {
      buttonElement.classList.remove(this._activeButtonClass);
      buttonElement.disabled = true;
    } else {
      buttonElement.classList.add(this._activeButtonClass);
      buttonElement.disabled = false;
    }
  }

  _setEventListeners() {
    const inputList = Array.from(
      this._formElement.querySelectorAll(this._inputSelector)
    );
    const buttonElement = this._formElement.querySelector(
      this._submitButtonSelector
    );
    inputList.forEach((item) => {
      item.addEventListener("input", () => {
        this._isInputValid(item);
        this._toggleButtonState(buttonElement);
      });
    });
  }

  enableValidation() {
    this._setEventListeners();
  }

  removeValidationErrors(popup) {
    popup.querySelectorAll(this._errorSelector).forEach((item) => {
      item.classList.remove(this._errorActiveClass);
      item.textContent = "";
    });
    popup.querySelectorAll(this._inputSelector).forEach((item) => {
      item.classList.remove(this._inputErrorClass);
    });
  }

  enableSubmitButton(buttonElement) {
    buttonElement.classList.add(this._activeButtonClass);
    buttonElement.disabled = false;
  }

  disableSubmitButton(buttonElement) {
    buttonElement.classList.remove(this._activeButtonClass);
    buttonElement.disabled = true;
  }
}
