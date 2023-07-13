import { Card } from "./card.js";
import { FormValidator } from "./FormValidator.js";

const popups = document.querySelectorAll(".popup");
const closeButtons = document.querySelectorAll(".popup__close-button");
const popupProfile = document.querySelector(".popup_content_profile");
const editButtonProfile = document.querySelector(".profile__edit-button");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");
const popupName = popupProfile.querySelector(".popup__item_content_name");
const popupAbout = popupProfile.querySelector(".popup__item_content_about");
const profileForm = popupProfile.querySelector(".popup__form");
const cardsList = document.querySelector(".elements");
const addButtonNewCard = document.querySelector(".profile__add-button");
const popupNewCard = document.querySelector(".popup_content_card");
const popupPlace = popupNewCard.querySelector(".popup__item_content_place");
const popupUrl = popupNewCard.querySelector(".popup__item_content_url");
const placeForm = popupNewCard.querySelector(".popup__form");

const ProfileValidator = new FormValidator(config, profileForm);
ProfileValidator.enableValidation();

const PlaceValidator = new FormValidator(config, placeForm);
PlaceValidator.enableValidation();

function closeByEsc(evt) {
  if (evt.key === "Escape") {
    const activePopup = document.querySelector(".popup_opened");
    closePopup(activePopup);
  }
}

function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closeByEsc);
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  window.removeEventListener("keydown", closeByEsc);
}

function fillProfile(popup) {
  popupName.value = profileName.textContent;
  popupAbout.value = profileAbout.textContent;
  const button = popup.querySelector(".popup__submit-button");
  if (!button.classList.contains("popup__submit-button_active")) {
    ProfileValidator.enableSubmitButton(button);
  }
}

function editProfile() {
  profileName.textContent = popupName.value;
  profileAbout.textContent = popupAbout.value;
}

function saveNewCard(evt) {
  evt.preventDefault();
  if (placeForm.checkValidity()) {
    const newData = {
      name: popupPlace.value,
      link: popupUrl.value,
    };
    const card = new Card(newData, "#card", openPopup);
    const cardElement = card.createCard();
    cardsList.prepend(cardElement);
    closePopup(popupNewCard);
    evt.target.reset();
    const button = placeForm.querySelector(".popup__submit-button");
    PlaceValidator.disableSubmitButton(button);
  }
}

cards.forEach((item) => {
  const card = new Card(item, "#card", openPopup);
  const cardElement = card.createCard();
  cardsList.append(cardElement);
});

popups.forEach(function (popup) {
  popup.addEventListener("click", function (evt) {
    if (evt.target.classList.contains("popup")) {
      closePopup(popup);
    }
  });
});

closeButtons.forEach(function (item) {
  item.addEventListener("click", function () {
    closePopup(item.closest(".popup"));
  });
});

editButtonProfile.addEventListener("click", function () {
  openPopup(popupProfile);
  ProfileValidator.removeValidationErrors(popupProfile);
  fillProfile(popupProfile);
});

profileForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  if (profileForm.checkValidity()) {
    editProfile();
    closePopup(popupProfile);
  }
});

addButtonNewCard.addEventListener("click", function () {
  openPopup(popupNewCard);
});

placeForm.addEventListener("submit", saveNewCard);
