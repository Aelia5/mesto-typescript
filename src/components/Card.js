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
    this._name = name;
    this._link = link;
    this.id = _id;
    this._owner = owner;
    this._user = user;
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

  removeCard() {
    this._element.remove();
  }

  toggleLike() {
    this._buttonLike.classList.toggle("element__like-button_active");
  }

  setLikes() {
    this._element.querySelector(".element__like-counter").textContent =
      this.likes.length;
  }

  _setEventListeners() {
    this._buttonLike.addEventListener("click", () => {
      this._handleToggleLike(this);
    });

    this._cardImage.addEventListener("click", () => {
      this._handleCardClick({ name: this._name, link: this._link });
    });

    this._cardTrash.addEventListener("click", () => {
      this._handleTrashClick(this);
    });
  }

  createCard() {
    this._element = this._getTemplate();
    this._cardTrash = this._element.querySelector(".element__delete-button");
    this._buttonLike = this._element.querySelector(".element__like-button");
    if (this._owner._id != this._user._id) {
      this._cardTrash.remove();
    }
    this._cardImage = this._element.querySelector(".element__image");
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._element.querySelector(".element__title").textContent = this._name;
    this.isLiked = this.likes.some((item) => {
      return item._id === this._user._id;
    });
    this.setLikes();
    if (this.isLiked) {
      this._buttonLike.classList.add("element__like-button_active");
    }
    this._setEventListeners();
    return this._element;
  }
}
