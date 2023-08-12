export class Card {
  constructor(
    { name, link, _id, owner },
    templateSelector,
    handleCardClick,
    handleTrashClick
  ) {
    this.name = name;
    this.link = link;
    this.id = _id;
    this.owner = owner;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleTrashClick = handleTrashClick;
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

  removeCard() {
    this._element.remove();
  }

  _setEventListeners() {
    this._buttonLike = this._element.querySelector(".element__like-button");

    this._buttonLike.addEventListener("click", () => {
      this._toggleLike();
    });

    this._cardImage.addEventListener("click", () => {
      this._handleCardClick({ name: this.name, link: this.link });
    });

    this._cardTrash.addEventListener("click", () => {
      this._handleTrashClick(this);
    });
  }

  createCard() {
    this._element = this._getTemplate();
    this._cardTrash = this._element.querySelector(".element__delete-button");
    if (this.owner._id != "6334eb6538383ca9a7d71089") {
      this._cardTrash.remove();
    }
    this._cardImage = this._element.querySelector(".element__image");
    this._cardImage.src = this.link;
    this._cardImage.alt = this.name;
    this._element.querySelector(".element__title").textContent = this.name;
    this._setEventListeners();
    return this._element;
  }
}
