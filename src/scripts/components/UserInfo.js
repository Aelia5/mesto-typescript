export class UserInfo {
  constructor({ nameSelector, aboutSelector }) {
    this._nameElement = document.querySelector(nameSelector);
    this._aboutElement = document.querySelector(aboutSelector);
  }
  getUserInfo() {
    const userInfo = {
      name: this._nameElement.textContent,
      about: this._aboutElement.textContent,
    };
    return userInfo;
  }

  setUserInfo({ nameValue, aboutValue }) {
    this._nameElement.textContent = nameValue;
    this._aboutElement.textContent = aboutValue;
  }
}
