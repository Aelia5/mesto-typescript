export class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  addItem(item, position) {
    if (position === "before") {
      this._container.prepend(item);
    } else if (position === "after") {
      this._container.append(item);
    }
  }

  renderItems() {
    this._items.forEach((item) => {
      this.addItem(this._renderer(item), "after");
    });
  }
}
