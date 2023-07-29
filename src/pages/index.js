import "./index.css";

import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";

import {
  editButtonProfile,
  popupName,
  popupAbout,
  profileForm,
  addButtonNewCard,
  placeForm,
  cards,
  config,
} from "../utils/constants.js";

const profileValidator = new FormValidator(config, profileForm);
profileValidator.enableValidation();

const placeValidator = new FormValidator(config, placeForm);
placeValidator.enableValidation();

const cardsList = new Section(
  {
    items: cards,
    renderer: createNewCard,
  },
  ".elements"
);
cardsList.renderItems();

const popupImage = new PopupWithImage(".popup_content_image");
popupImage.setEventListeners();

const popupFormProfile = new PopupWithForm(
  ".popup_content_profile",
  editProfile,
  profileValidator
);
popupFormProfile.setEventListeners();

const popupFormPlace = new PopupWithForm(
  ".popup_content_card",
  saveNewCard,
  placeValidator
);
popupFormPlace.setEventListeners();

const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  aboutSelector: ".profile__about",
});

function editProfile(data) {
  userInfo.setUserInfo({ nameValue: data.name, aboutValue: data.about });
}

function createNewCard(data) {
  const card = new Card(data, "#card", handleCardClick);
  const cardElement = card.createCard();
  return cardElement;
}

function saveNewCard(data) {
  const newCardElement = createNewCard({ name: data.place, link: data.url });
  cardsList.addItem(newCardElement, "before");
}

function handleCardClick(card) {
  popupImage.open(card);
}

editButtonProfile.addEventListener("click", function () {
  const info = userInfo.getUserInfo();
  popupName.value = info.name;
  popupAbout.value = info.about;
  popupFormProfile.open();
});

addButtonNewCard.addEventListener("click", function () {
  popupFormPlace.open();
});
