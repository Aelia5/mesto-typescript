export class FormValidator {
  constructor (data, formElement) {
  this.formSelector = data.formSelector,
  this.inputSelector = data.inputSelector,
  this.errorSelector = data.errorSelector,
  this.submitButtonSelector = data.submitButtonSelector,
  this.activeButtonClass = data.activeButtonClass,
  this.inputErrorClass = data.inputErrorClass,
  this.errorActiveClass = data.errorActiveClass,
  this.errorSelectorTemplate = data.errorSelectorTemplate,
  this.formElement = formElement
  }

  showInputError (inputElement, errorMessage) {
    const errorElement = this.formElement.querySelector(
      `${this.errorSelectorTemplate}${inputElement.id}`
    );
    inputElement.classList.add(this.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this.errorActiveClass);
  }

  hideInputError(inputElement) {
    const errorElement = this.formElement.querySelector(
      `${this.errorSelectorTemplate}${inputElement.id}`
    );
    inputElement.classList.remove(this.inputErrorClass);
    errorElement.classList.remove(this.errorActiveClass);
    errorElement.textContent = "";
  }

  isInputValid(inputElement) {
    if (!inputElement.validity.valid) {
      this.showInputError(
        inputElement,
        inputElement.validationMessage,
      );
    } else {
      this.hideInputError(inputElement);
    }
  }

  toggleButtonState(buttonElement) {
    if (!this.formElement.checkValidity()) {
      buttonElement.classList.remove(this.activeButtonClass);
      buttonElement.disabled = true;
    } else {
      buttonElement.classList.add(this.activeButtonClass);
      buttonElement.disabled = false;
    }
  }

  setEventListeners() {
    const inputList = Array.from(
      this.formElement.querySelectorAll(this.inputSelector)
    );
    const buttonElement = this.formElement.querySelector(this.submitButtonSelector);
    inputList.forEach((item) => {
      item.addEventListener("input", () => {
        this.isInputValid(item);
        this.toggleButtonState(buttonElement);
      });
    });
  }

  enableValidation() {
      this.setEventListeners();
   }

   removeValidationErrors(popup) {
    popup.querySelectorAll(this.errorSelector).forEach((item) => {
      item.classList.remove(this.errorActiveClass);
      item.textContent = "";
    });
    popup.querySelectorAll(this.inputSelector).forEach((item) => {
      item.classList.remove(this.inputErrorClass);
    });
  }

  enableSubmitButton(buttonElement) {
    buttonElement.classList.add(this.activeButtonClass);
    buttonElement.disabled = false;
  }

  disableSubmitButton(buttonElement) {
    buttonElement.classList.remove(this.activeButtonClass);
    buttonElement.disabled = true;
  }

}
