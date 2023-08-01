import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit, handleFormClose) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this.handleFormClose = handleFormClose;
    this._inputs = this._popup.querySelectorAll(".popup__item");
    this._form = this._popup.querySelector(".popup__form");
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
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      const inputValues = this._getInputValues();
      this._handleFormSubmit(inputValues);
      this.close();
    });
  }

  close() {
    super.close();
    this._form.reset();
    this.handleFormClose();
  }
}
