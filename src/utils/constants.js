const popupProfile = document.querySelector(".popup_content_profile");
const editButtonProfile = document.querySelector(".profile__edit-button");
const popupName = popupProfile.querySelector(".popup__item_content_name");
const popupAbout = popupProfile.querySelector(".popup__item_content_about");
const profileForm = popupProfile.querySelector(".popup__form");
const addButtonNewCard = document.querySelector(".profile__add-button");
const popupNewCard = document.querySelector(".popup_content_card");
const placeForm = popupNewCard.querySelector(".popup__form");
const avatarCover = document.querySelector(".profile__cover");
const popupAvatar = document.querySelector(".popup_content_avatar");
const avatarForm = popupAvatar.querySelector(".popup__form");
const popupAvatarLink = popupAvatar.querySelector(
  ".popup__item_content_avatar"
);

const config = {
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
  avatarForm,
  avatarCover,
  popupAvatarLink,
  config,
};
