//Редактирование профиля

const popupProfile = document.querySelector('.popup_content_profile');
const editButtonProfile = document.querySelector('.profile__edit-button');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const popupName = popupProfile.querySelector('.popup__item_content_name');
const popupAbout = popupProfile.querySelector('.popup__item_content_about');
const profileForm = popupProfile.querySelector('.popup__form');

function openPopupProfile () {
  popupProfile.classList.add('popup_opened');
  popupName.value = profileName.textContent;
  popupAbout.value = profileAbout.textContent;
}

editButtonProfile.addEventListener('click', openPopupProfile);

function editProfile (evt) {
  evt.preventDefault();
  profileName.textContent = popupName.value;
  profileAbout.textContent = popupAbout.value;
  popupProfile.classList.remove('popup_opened');
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
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  cardElement.querySelector('.element__image').src = item.link;
  cardElement.querySelector('.element__title').textContent = item.name;
  cardsList.append(cardElement);
}
);

//Добавление и удаление лайков

const likeButtons = document.querySelectorAll('.element__like-button');

function addLike (btn) {
  btn.classList.toggle('element__like-button_active');
}

likeButtons.forEach(function(item) {
  item.addEventListener('click', function() {
    addLike(item);
  });
});

//Удаление карточки

const deleteButtons = document.querySelectorAll('.element__delete-button');

deleteButtons.forEach(function(item) {
  item.addEventListener('click', function() {
    item.closest('.element').remove();
    });
});

//Открытие картинки

const images = document.querySelectorAll('.element__image');
const popupImage = document.querySelector('.popup_content_image');
const popupImageUrl = popupImage.querySelector('.popup__image');
const popupImageName = popupImage.querySelector('.popup__image-name');

function openImage (im) {
  popupImage.classList.add('popup_opened');
  popupImageUrl.src = im.src;
  popupImageName.textContent = im.nextElementSibling.textContent;
  }

images.forEach (function(item) {
  item.addEventListener ('click', function() {
    openImage(item);
  });
});

//Закрытие всех попапов

const closeButtons = document.querySelectorAll('.popup__close-button');

closeButtons.forEach(function(item) {
  item.addEventListener ('click', function() {
    item.closest('.popup').classList.remove('popup_opened');
  });
});

//Добавление карточки

const popupNewCard = document.querySelector('.popup_content_card');
const addButtonNewCard = document.querySelector('.profile__add-button');
const popupPlace = popupNewCard.querySelector('.popup__item_content_place');
const popupUrl = popupNewCard.querySelector('.popup__item_content_url');
const placeForm = popupNewCard.querySelector('.popup__form');

function openPopupNewCard () {
  popupNewCard.classList.add('popup_opened');
  popupPlace.value = '';
  popupUrl.value = '';
}

addButtonNewCard.addEventListener('click', openPopupNewCard);

function saveNewCard (evt) {
  evt.preventDefault();
  const newCardElement = cardTemplate.querySelector('.element').cloneNode(true);
  newCardElement.querySelector('.element__image').src = popupUrl.value;
  newCardElement.querySelector('.element__title').textContent = popupPlace.value;
  newCardElement.querySelector('.element__delete-button').addEventListener('click', function() {
    newCardElement.remove();
    });
  const newCardLike = newCardElement.querySelector('.element__like-button');
  newCardLike.addEventListener('click', function() {
    addLike(newCardLike);});

  const newCardImage = newCardElement.querySelector('.element__image');
  newCardImage.addEventListener('click', function() {
    openImage(newCardImage);
  }
    );

  cardsList.prepend(newCardElement);
  popupNewCard.classList.remove('popup_opened');
    }

placeForm.addEventListener('submit', saveNewCard);
