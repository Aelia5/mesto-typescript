export class Section {
    constructor(renderer, containerSelector) {
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    addItem(item, position) {
        if (position === 'before') {
            this._container.prepend(item);
        } else if (position === 'after') {
            this._container.append(item);
        }
    }

    renderItems(items) {
        items.forEach((item) => {
            this.addItem(this._renderer(item), 'after');
        });
    }
}
