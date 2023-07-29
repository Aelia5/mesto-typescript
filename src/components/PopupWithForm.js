import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit, validator) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._validator = validator;
    this._inputs = this._popup.querySelectorAll(".popup__item");
  }

  _getInputValues() {
    const inputValues = {};
    this._inputs.forEach((input) => {
      inputValues[input.name] = input.value;
    });
    return inputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popup.addEventListener("submit", (evt) => {
      evt.preventDefault();
      const inputValues = this._getInputValues();
      this._handleFormSubmit(inputValues);
      this.close();
      this._validator.disableSubmitButton();
    });
  }

  close() {
    super.close();
    this._inputs.forEach((input) => {
      input.value = "";
    });
    this._validator.removeValidationErrors();
  }
}
