export class Card {
  constructor(data, templateSelector, openImage) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._openImage = openImage;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".element")
      .cloneNode(true);
    return cardElement;
  }

  _toggleLike() {
    this._buttonLike.classList.toggle("element__like-button_active");
  }

  _removeCard() {
    this._element.remove();
  }

  _setEventListeners() {
    this._buttonLike = this._element.querySelector(".element__like-button");
    const cardTrash = this._element.querySelector(".element__delete-button");

    this._buttonLike.addEventListener("click", () => {
      this._toggleLike();
    });

    this._cardImage.addEventListener("click", () => {
      this._openImage(this);
    });

    cardTrash.addEventListener("click", () => {
      this._removeCard();
    });
  }

  createCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector(".element__image");
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._element.querySelector(".element__title").textContent = this._name;
    this._setEventListeners();
    return this._element;
  }
}
