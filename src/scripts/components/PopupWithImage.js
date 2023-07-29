import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(card) {
    super.open();
    const popupImage = this._popup.querySelector(".popup__image");
    popupImage.src = card.link;
    popupImage.alt = card.link;
    this._popup.querySelector(".popup__image-name").textContent = card.name;
  }
}
