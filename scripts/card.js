export class Card {
  constructor(data, templateSelector, openPopup) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._openPopup = openPopup;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".element")
      .cloneNode(true);
    return cardElement;
  }

  _getElementImage() {
    return this._element.querySelector(".element__image");
  }

  _addLike(btn) {
    btn.classList.toggle("element__like-button_active");
  }

  _openImage() {
    const popup = document.querySelector(".popup_content_image");
    this._openPopup(popup);
    const popupImage = popup.querySelector(".popup__image");
    popupImage.src = this._link;
    popupImage.alt = this._name;
    popup.querySelector(".popup__image-name").textContent = this._name;
  }

  _setEventListeners() {
    const cardImage = this._getElementImage();
    const cardLike = this._element.querySelector(".element__like-button");
    const cardTrash = this._element.querySelector(".element__delete-button");

    cardLike.addEventListener("click", () => {
      this._addLike(cardLike);
    });

    cardImage.addEventListener("click", () => {
      this._openImage(cardImage);
    });

    cardTrash.addEventListener("click", () => {
      cardTrash.closest(".element").remove();
    });
  }

  createCard() {
    this._element = this._getTemplate();
    const cardImage = this._getElementImage();
    cardImage.src = this._link;
    cardImage.alt = this._name;
    this._element.querySelector(".element__title").textContent = this._name;
    this._setEventListeners();
    return this._element;
  }
}
