//Открытие и закрытие форм

const popupProfile = document.querySelector('.popup_content_profile');
const editButtonProfile = document.querySelector('.profile__edit-button');
const closeButtonProfile = popupProfile.querySelector('.popup__close-button');
const popupNewCard = document.querySelector('.popup_content_card');
const addButtonNewCard = document.querySelector('.profile__add-button');
const closeButtonNewCard = popupNewCard.querySelector('.popup__close-button');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const popupName = popupProfile.querySelector('.popup__item_content_name');
const popupAbout = popupProfile.querySelector('.popup__item_content_about');
const popupPlace = popupNewCard.querySelector('.popup__item_content_place');
const popupUrl = popupNewCard.querySelector('.popup__item_content_url');


function openPopupProfile () {
  popupProfile.classList.add('popup_opened');
  popupName.value = profileName.textContent;
  popupAbout.value = profileAbout.textContent;
}

function openPopupNewCard () {
  popupNewCard.classList.add('popup_opened');
  popupPlace.value = '';
  popupUrl.value = '';
}

function closePopupProfile () {
  popupProfile.classList.remove('popup_opened');
}

function closePopupNewCard () {
  popupNewCard.classList.remove('popup_opened');
}

editButtonProfile.addEventListener('click', openPopupProfile);
addButtonNewCard.addEventListener('click', openPopupNewCard);
closeButtonProfile.addEventListener('click', closePopupProfile);
closeButtonNewCard.addEventListener('click', closePopupNewCard)

//Редактирование профиля

const profileForm = popupProfile.querySelector('.popup__form');

function editProfile (evt) {
  evt.preventDefault();
  profileName.textContent = popupName.value;
  profileAbout.textContent = popupAbout.value;
  closePopupProfile();
  }

profileForm.addEventListener('submit', editProfile);

// Начальные карточки

const cardTemplate = document.querySelector('#card').content;
const cardsList = document.querySelector('.elements');

const initialCards = [
  {
    name: 'Байкал',
    link: 'https://aelia5.github.io/mesto/images/baikal.jpg'
  },
  {
    name: 'Эльбрус',
    link: 'https://aelia5.github.io/mesto/images/elbrus.jpg'
  },
  {
    name: 'Кунгурская пещера',
    link: 'https://aelia5.github.io/mesto/images/kungur.jpg'
  },
  {
    name: 'Домбай',
    link: 'https://aelia5.github.io/mesto/images/dombay.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://aelia5.github.io/mesto/images/kamchatka.jpg'
  },
  {
    name: 'Куршская коса',
    link: 'https://aelia5.github.io/mesto/images/kosa.jpg'
  }
];

initialCards.forEach(function (item) {
  let cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  cardElement.querySelector('.element__image').src = item.link;
  cardElement.querySelector('.element__title').textContent = item.name;
  cardsList.append(cardElement);
}
)

//Добавление карточки

const placeForm = popupNewCard.querySelector('.popup__form');

function saveNewCard (evt) {
  evt.preventDefault();
  let newCardElement = cardTemplate.querySelector('.element').cloneNode(true);
  newCardElement.querySelector('.element__image').src = popupUrl.value;
  newCardElement.querySelector('.element__title').textContent = popupPlace.value;
  cardsList.prepend(newCardElement);
  closePopupNewCard();
  }

placeForm.addEventListener('submit', saveNewCard);
