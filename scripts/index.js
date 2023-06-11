//Открытие всех попапов

function openPopup (popup) {
  popup.classList.add('popup_opened');
}

//Закрытие всех попапов

function closePopup (popup) {
  popup.classList.remove('popup_opened');
}

//Закрытие всех попапов кликом по крестику

const closeButtons = document.querySelectorAll('.popup__close-button');

closeButtons.forEach(function(item) {
  item.addEventListener ('click', function() {
    closePopup(item.closest('.popup'));
  });
});

//Редактирование профиля

const popupProfile = document.querySelector('.popup_content_profile');
const editButtonProfile = document.querySelector('.profile__edit-button');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const popupName = popupProfile.querySelector('.popup__item_content_name');
const popupAbout = popupProfile.querySelector('.popup__item_content_about');
const profileForm = popupProfile.querySelector('.popup__form');

function fillProfile () {
  popupName.value = profileName.textContent;
  popupAbout.value = profileAbout.textContent;
}

editButtonProfile.addEventListener('click', function () {
  openPopup(popupProfile);
  fillProfile();
});

function editProfile () {
  profileName.textContent = popupName.value;
  profileAbout.textContent = popupAbout.value;
  }

profileForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  editProfile();
  closePopup(popupProfile);
});

//Добавление и удаление лайков

function addLike (btn) {
  btn.classList.toggle('element__like-button_active');
}

//Открытие картинки

const popupImage = document.querySelector('.popup_content_image');
const popupImageUrl = popupImage.querySelector('.popup__image');
const popupImageName = popupImage.querySelector('.popup__image-name');

function openImage (im) {
  openPopup(popupImage);
  popupImageUrl.src = im.src;
  popupImageUrl.alt = im.nextElementSibling.textContent;
  popupImageName.textContent = im.nextElementSibling.textContent;
  }

// Создание новой карточки

const cardTemplate = document.querySelector('#card').content;
let cardElement;

function createCard () {
  cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  cardElement.querySelector('.element__delete-button').addEventListener('click', function() {
    cardElement.remove();
    });

  const cardLike = cardElement.querySelector('.element__like-button');
  cardLike.addEventListener('click', function() {
    addLike(cardLike);});

  const cardImage = cardElement.querySelector('.element__image');
  cardImage.addEventListener('click', function() {
    openImage(cardImage);
  });
return cardElement;
}


// Добавление начальных карточек

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
  createCard();
  cardElement.querySelector('.element__image').src = item.link;
  cardElement.querySelector('.element__image').alt = item.name;
  cardElement.querySelector('.element__title').textContent = item.name;
  cardsList.append(cardElement);
}
);



//Добавление новой карточки

const addButtonNewCard = document.querySelector('.profile__add-button');
const popupNewCard = document.querySelector('.popup_content_card');
const popupPlace = popupNewCard.querySelector('.popup__item_content_place');
const popupUrl = popupNewCard.querySelector('.popup__item_content_url');
const placeForm = popupNewCard.querySelector('.popup__form');


addButtonNewCard.addEventListener('click', function() {
  openPopup(popupNewCard);
    });

function saveNewCard (evt) {
  evt.preventDefault();
  createCard();
  cardElement.querySelector('.element__image').src = popupUrl.value;
  cardElement.querySelector('.element__image').alt = popupPlace.value;
  cardElement.querySelector('.element__title').textContent = popupPlace.value;
  cardsList.prepend(cardElement);
  closePopup(popupNewCard);
  evt.target.reset();
  }

placeForm.addEventListener('submit', saveNewCard);
