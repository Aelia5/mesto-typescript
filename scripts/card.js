export class Card {
  constructor (data, templateSelector) {
    this.name = data.name;
    this.link = data.link;
    this.templateSelector = templateSelector;
  }

  getTemplate () {
    const cardElement = document
      .querySelector(this.templateSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);
    return cardElement;
  }

  addLike(btn) {
    btn.classList.toggle("element__like-button_active");
    }

  openImage() {
    const popup = document.querySelector('.popup_content_image');
    const popupImage = popup.querySelector(".popup__image");
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', function (evt) {
      if (evt.key === 'Escape') {
        popup.classList.remove('popup_opened');
      }
    })
    popupImage.src = this.link;
    popupImage.alt = this.name;
    popup.querySelector(".popup__image-name").textContent = this.name;
  }

  setEventListeners () {
    const cardLike = this.element.querySelector('.element__like-button');
    const cardImage = this.element.querySelector('.element__image');
    const cardTrash = this.element.querySelector('.element__delete-button');

    cardLike.addEventListener('click', () => {
      this.addLike(cardLike);
    })

    cardImage.addEventListener("click", () => {
      this.openImage(cardImage);
    })

    cardTrash.addEventListener("click", () => {
      cardTrash.closest(".element").remove();
      })

  }
  createCard () {
    this.element = this.getTemplate();
    this.element.querySelector('.element__image').src = this.link;
    this.element.querySelector('.element__image').alt = this.name;
    this.element.querySelector('.element__title').textContent = this.name;
    this.setEventListeners();
    return this.element;
  }
}
