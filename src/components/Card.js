export class Card {
  constructor({ name, link }, templateSelector, handleCardClick) {
    this.name = name;
    this.link = link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
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
      this._handleCardClick(this);
    });

    cardTrash.addEventListener("click", () => {
      this._removeCard();
    });
  }

  createCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector(".element__image");
    this._cardImage.src = this.link;
    this._cardImage.alt = this.name;
    this._element.querySelector(".element__title").textContent = this.name;
    this._setEventListeners();
    return this._element;
  }
}
