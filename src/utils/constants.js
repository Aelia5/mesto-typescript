const popupProfile = document.querySelector(".popup_content_profile");
const editButtonProfile = document.querySelector(".profile__edit-button");
const popupName = popupProfile.querySelector(".popup__item_content_name");
const popupAbout = popupProfile.querySelector(".popup__item_content_about");
const profileForm = popupProfile.querySelector(".popup__form");
const addButtonNewCard = document.querySelector(".profile__add-button");
const popupNewCard = document.querySelector(".popup_content_card");
const placeForm = popupNewCard.querySelector(".popup__form");

const cards = [
  {
    name: "Байкал",
    link: "https://aelia5.github.io/mesto/images/baikal.jpg",
  },
  {
    name: "Эльбрус",
    link: "https://aelia5.github.io/mesto/images/elbrus.jpg",
  },
  {
    name: "Кунгурская пещера",
    link: "https://aelia5.github.io/mesto/images/kungur.jpg",
  },
  {
    name: "Домбай",
    link: "https://aelia5.github.io/mesto/images/dombay.jpg",
  },
  {
    name: "Камчатка",
    link: "https://aelia5.github.io/mesto/images/kamchatka.jpg",
  },
  {
    name: "Куршская коса",
    link: "https://aelia5.github.io/mesto/images/kosa.jpg",
  },
];

const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__item",
  errorSelector: ".popup__item-error",
  submitButtonSelector: ".popup__submit-button",
  activeButtonClass: "popup__submit-button_active",
  inputErrorClass: "popup__input_type_error",
  errorActiveClass: "popup__item-error_active",
  errorSelectorTemplate: ".popup__item-error_content_",
};

export {
  popupProfile,
  editButtonProfile,
  popupName,
  popupAbout,
  profileForm,
  addButtonNewCard,
  popupNewCard,
  placeForm,
  cards,
  config,
};
