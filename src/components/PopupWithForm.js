import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit, handleFormClose) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this.handleFormClose = handleFormClose;
    this._inputs = this._popup.querySelectorAll(".popup__item");
    this._form = this._popup.querySelector(".popup__form");
    this._submitButton = this._popup.querySelector(".popup__submit-button");
    this._submitText = this._submitButton.textContent;
  }

  _getInputValues() {
    const inputValues = {};
    this._inputs.forEach((input) => {
      inputValues[input.name] = input.value;
    });
    return inputValues;
  }

  _restoreSubmitButton() {
    this._submitButton.textContent = this._submitText;
  }

  closeAfterSubmit() {
    this.close();
    this._restoreSubmitButton();
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitButton.textContent = "Сохранение...";
      const inputValues = this._getInputValues();
      this._handleFormSubmit(inputValues);
      //this.close();
    });
  }

  close() {
    super.close();
    this._form.reset();
    this.handleFormClose();
  }
}
