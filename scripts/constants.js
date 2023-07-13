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
