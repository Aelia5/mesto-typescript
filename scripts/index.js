import { Card } from "./temp.js";
import { FormValidator } from "./FormValidator.js";

const popups = document.querySelectorAll(".popup");
const popupProfile = document.querySelector(".popup_content_profile");
const editButtonProfile = document.querySelector(".profile__edit-button");
const profileSubmitButton = popupProfile.querySelector(".popup__submit-button");
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

const profileValidator = new FormValidator(config, profileForm);
profileValidator.enableValidation();

const placeValidator = new FormValidator(config, placeForm);
placeValidator.enableValidation();

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
  document.removeEventListener("keydown", closeByEsc);
}

function fillProfile() {
  popupName.value = profileName.textContent;
  popupAbout.value = profileAbout.textContent;
  if (!profileSubmitButton.classList.contains("popup__submit-button_active")) {
    profileValidator.enableSubmitButton();
  }
}

function editProfile() {
  profileName.textContent = popupName.value;
  profileAbout.textContent = popupAbout.value;
}

function createNewCard(data) {
  const card = new Card(data, "#card", openImage);
  const cardElement = card.createCard();
  return cardElement;
}

function saveNewCard(evt) {
  evt.preventDefault();
  const newData = {
    name: popupPlace.value,
    link: popupUrl.value,
  };
  const newCardElement = createNewCard(newData);
  cardsList.prepend(newCardElement);
  closePopup(popupNewCard);
  evt.target.reset();
  placeValidator.disableSubmitButton();
}

function openImage(card) {
  const popup = document.querySelector(".popup_content_image");
  openPopup(popup);
  const popupImage = popup.querySelector(".popup__image");
  popupImage.src = card._link;
  popupImage.alt = card._name;
  popup.querySelector(".popup__image-name").textContent = card._name;
}

cards.forEach((item) => {
  const cardElement = createNewCard(item);
  cardsList.append(cardElement);
});

popups.forEach(function (popup) {
  popup.addEventListener("click", function (evt) {
    if (
      evt.target.classList.contains("popup") ||
      evt.target.classList.contains("popup__close-button")
    ) {
      closePopup(popup);
    }
  });
});

editButtonProfile.addEventListener("click", function () {
  openPopup(popupProfile);
  profileValidator.removeValidationErrors();
  fillProfile(popupProfile);
});

profileForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  editProfile();
  closePopup(popupProfile);
});

addButtonNewCard.addEventListener("click", function () {
  openPopup(popupNewCard);
});

placeForm.addEventListener("submit", saveNewCard);
