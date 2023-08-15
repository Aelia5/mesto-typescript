export class UserInfo {
  constructor({ nameSelector, aboutSelector, avatarSelector }) {
    this._nameElement = document.querySelector(nameSelector);
    this._aboutElement = document.querySelector(aboutSelector);
    this._avatarElement = document.querySelector(avatarSelector);
  }
  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      about: this._aboutElement.textContent,
    };
  }

  getAvatar() {
    return this._avatarElement.src;
  }

  setUserInfo({ nameValue, aboutValue }) {
    this._nameElement.textContent = nameValue;
    this._aboutElement.textContent = aboutValue;
  }

  setAvatar({ link }) {
    this._avatarElement.src = link;
  }
}
