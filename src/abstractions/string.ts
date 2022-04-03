import { IAbstractElement } from "../interfaces/IAbstractElement";
import { IClassList } from "../interfaces/IClassList";
import { padLeftIfValue } from "../utils/padLeftIfValue";

export class StringElement implements IAbstractElement<string> {
  private _appends: IAbstractElement<string>[] = [];
  private _innerText: string = "";

  classList: IClassList = new ClassList();
  tagName: string;

  constructor(tagName: string) {
    this.tagName = tagName;
  }

  get innerText() {
    return this._innerText;
  }

  set innerText(innerText: string) {
    this._innerText = innerText;
  }

  render() {
    let tag = "";
    tag += this.buildOpeningTag();
    tag += this._innerText;
    tag += this.buildAppends();
    tag += `</${this.tagName}>`;
    return tag;
  }

  append(...elements: IAbstractElement<string>[]) {
    this._appends = this._appends.concat(elements);
  }

  private buildOpeningTag() {
    let openTag = `<${this.tagName}`;
    openTag += padLeftIfValue(this.buildClassAttribute());
    openTag += ">";
    return openTag;
  }

  private buildClassAttribute() {
    if (!this.classList.length) return "";

    let classAttribute = `class="`;
    classAttribute += this.classList.value;
    classAttribute += `"`;

    return classAttribute;
  }

  private buildAppends() {
    return this._appends.map((append) => append.render()).join("");
  }
}

class ClassList implements IClassList {
  private _classes: string[] = [];

  get value() {
    return this._classes.join(" ");
  }

  get length() {
    return this._classes.length;
  }

  add(...tokens: string[]) {
    this._classes = this._classes.concat(tokens);
  }
}
