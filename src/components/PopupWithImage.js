import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._image = this._popup.querySelector(".popup__image");
    this._text = this._popup.querySelector(".popup__image-name");
  }

  open(card) {
    super.open();
    this._image.src = card.link;
    this._image.alt = card.link;
    this._text.textContent = card.name;
  }
}
