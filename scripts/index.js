let form = document.querySelector('.popup__form');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-button');
let popup = document.querySelector('.popup');
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');
let popupName = document.querySelector('.popup__item_content_name');
let popupAbout = document.querySelector('.popup__item_content_about');


function openPopup () {
  popup.classList.add('popup_opened');
  popupName.value = profileName.textContent;
  popupAbout.value = profileAbout.textContent;
}

function closePopup () {
  popup.classList.remove('popup_opened');
}

function saveData (evt) {
  evt.preventDefault();
  profileName.textContent = popupName.value;
  profileAbout.textContent = popupAbout.value;
  closePopup();
  }

editButton.addEventListener('click', openPopup);

closeButton.addEventListener('click', closePopup);

form.addEventListener('submit', saveData);

