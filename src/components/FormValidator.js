export class FormValidator {
  constructor(data, formElement) {
    this._data = data;
    this._inputSelector = data.inputSelector;
    this._errorSelector = data.errorSelector;
    this._submitButtonSelector = data.submitButtonSelector;
    this._activeButtonClass = data.activeButtonClass;
    this._inputErrorClass = data.inputErrorClass;
    this._errorActiveClass = data.errorActiveClass;
    this._errorSelectorTemplate = data.errorSelectorTemplate;
    this._formElement = formElement;
    this._buttonElement = this._formElement.querySelector(
      this._submitButtonSelector
    );
    this._inputList = Array.from(
      this._formElement.querySelectorAll(this._inputSelector)
    );
    this.removeValidationErrors = this.removeValidationErrors.bind(this);
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
    //console.log(`${this._errorSelectorTemplate}${inputElement.id}`);
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

  enableSubmitButton() {
    this._buttonElement.classList.add(this._activeButtonClass);
    this._buttonElement.disabled = false;
  }

  disableSubmitButton() {
    this._buttonElement.classList.remove(this._activeButtonClass);
    this._buttonElement.disabled = true;
  }

  _toggleButtonState() {
    if (!this._formElement.checkValidity()) {
      this.disableSubmitButton();
    } else {
      this.enableSubmitButton();
    }
  }

  _setEventListeners() {
    this._inputList.forEach((item) => {
      item.addEventListener("input", () => {
        this._isInputValid(item);
        this._toggleButtonState();
      });
    });
  }

  enableValidation() {
    this._setEventListeners();
  }

  removeValidationErrors() {
    this._inputList.forEach((item) => {
      this._hideInputError(item);
    });
  }
}
