import "./index.css";

import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithConfirmation } from "../components/PopupWithConfirmation.js";
import { UserInfo } from "../components/UserInfo.js";
import { Api } from "../components/Api.js";

import {
  editButtonProfile,
  popupName,
  popupAbout,
  profileForm,
  addButtonNewCard,
  placeForm,
  avatarCover,
  avatarForm,
  popupAvatarLink,
  config,
} from "../utils/constants.js";

let cardsList;
let user;

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-73",
  headers: {
    authorization: "0453871b-7ff0-422b-ba15-a21262966d2d",
    "Content-type": "application/json",
  },
});

api
  .getProfileData()
  .then((data) => {
    user = data;
    setProfile(user);
    setAvatar(user);
  })
  .then(() => {
    api
      .getInitialCards()
      .then((data) => {
        cardsList = new Section(
          {
            items: data,
            renderer: createNewCard,
          },
          ".elements"
        );
        cardsList.renderItems();
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log(err);
  });

const profileValidator = new FormValidator(config, profileForm);
profileValidator.enableValidation();

const avatarValidator = new FormValidator(config, avatarForm);
avatarValidator.enableValidation();

const placeValidator = new FormValidator(config, placeForm);
placeValidator.enableValidation();

const popupImage = new PopupWithImage(".popup_content_image");
popupImage.setEventListeners();

const popupFormProfile = new PopupWithForm(
  ".popup_content_profile",
  editProfile,
  () => {
    handleFormClose(profileValidator);
  }
);
popupFormProfile.setEventListeners();

const popupFormAvatar = new PopupWithForm(
  ".popup_content_avatar",
  editAvatar,
  () => {
    handleFormClose(avatarValidator);
  }
);
popupFormAvatar.setEventListeners();

const popupFormPlace = new PopupWithForm(
  ".popup_content_card",

  saveNewCard,
  () => {
    handleFormClose(placeValidator);
  }
);
popupFormPlace.setEventListeners();

const popupWithConfirmation = new PopupWithConfirmation(
  ".popup_content_confirmation",
  handleConfirmationSubmit
);
popupWithConfirmation.setEventListeners();

const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  aboutSelector: ".profile__about",
  avatarSelector: ".profile__avatar",
});

function setProfile(data) {
  userInfo.setUserInfo({ nameValue: data.name, aboutValue: data.about });
}

function editProfile(newData) {
  api
    .editProfileData(newData)
    .then((data) => {
      setProfile(data);
    })
    .then(() => {
      popupFormProfile.closeAfterSubmit();
    })
    .catch((err) => {
      console.log(err);
    });
}

function setAvatar(data) {
  userInfo.setAvatar({ link: data.avatar });
}

function editAvatar(newData) {
  api
    .editAvatar(newData)
    .then((data) => {
      setAvatar(data);
    })
    .then(() => {
      popupFormAvatar.closeAfterSubmit();
    })
    .catch((err) => {
      console.log(err);
    });
}

function createNewCard(data) {
  const card = new Card(
    data,
    user,
    "#card",
    handleCardClick,
    handleTrashClick,
    handleToggleLike
  );
  return card.createCard();
}

function saveNewCard(newData) {
  api
    .postNewCard(newData)
    .then((data) => {
      return createNewCard(data);
    })
    .then((newCardElement) => {
      cardsList.addItem(newCardElement, "before");
    })
    .then(() => {
      popupFormPlace.closeAfterSubmit();
    })

    .catch((err) => {
      console.log(err);
    });
}

function handleCardClick(card) {
  popupImage.open(card);
}

function handleTrashClick(card) {
  popupWithConfirmation.open(card);
}

function handleConfirmationSubmit() {
  api.deleteCard(popupWithConfirmation.cardToDelete.id);
  popupWithConfirmation.cardToDelete.removeCard();
}

function handleToggleLike(card) {
  api
    .toggleLike(card, card.isLiked)
    .then((data) => {
      card.likes = data.likes;
      card.setLikes();
    })
    .catch((err) => {
      console.log(err);
    });
}

function handleFormClose(validator) {
  validator.disableSubmitButton();
  validator.removeValidationErrors();
}

editButtonProfile.addEventListener("click", function () {
  const info = userInfo.getUserInfo();
  popupName.value = info.name;
  popupAbout.value = info.about;
  popupFormProfile.open();
});

avatarCover.addEventListener("click", function () {
  popupAvatarLink.value = userInfo.getAvatar();
  popupFormAvatar.open();
});

addButtonNewCard.addEventListener("click", function () {
  popupFormPlace.open();
});
