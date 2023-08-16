export class Card {
  constructor(
    { likes, name, link, _id, owner },
    user,
    templateSelector,
    handleCardClick,
    handleTrashClick,
    handleToggleLike
  ) {
    this.likes = likes;
    this.name = name;
    this.link = link;
    this.id = _id;
    this.owner = owner;
    this.user = user;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleTrashClick = handleTrashClick;
    this._handleToggleLike = handleToggleLike;
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

  updateLikes(data) {
    this.likes = data.likes;
    this._element.querySelector(".element__like-counter").textContent =
      this.likes.length;
    this.isLiked = this.likes.some((item) => {
      return item._id === this.user._id;
    });
    if (this.isLiked) {
      this._buttonLike.classList.add("element__like-button_active");
    } else this._buttonLike.classList.remove("element__like-button_active");
  }

  _setEventListeners() {
    this._buttonLike.addEventListener("click", () => {
      this._handleToggleLike(this);
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
    this._buttonLike = this._element.querySelector(".element__like-button");
    if (this.owner._id != this.user._id) {
      this._cardTrash.remove();
    }
    this._cardImage = this._element.querySelector(".element__image");
    this._cardImage.src = this.link;
    this._cardImage.alt = this.name;
    this._element.querySelector(".element__title").textContent = this.name;
    this.updateLikes(this);
    this._setEventListeners();
    return this._element;
  }
}
