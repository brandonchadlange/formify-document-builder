import { IAbstractElement } from "../interfaces/IAbstractElement";

export class DomElement implements IAbstractElement<HTMLElement> {
  private _element: HTMLElement;
  tagName: string;

  constructor(tagName: string) {
    this.tagName = tagName;
    this._element = document.createElement(tagName);

    this.classList.add = (...tokens: string[]) =>
      this._element.classList.add(...tokens);
  }

  get classList() {
    return this._element.classList;
  }

  render() {
    return this._element;
  }

  append(...elements: IAbstractElement<HTMLElement>[]) {
    this._element.append(...elements.map((element) => element.render()));
  }
}
