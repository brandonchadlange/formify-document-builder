import { IAbstractElement } from "../interfaces/IAbstractElement";
import { IClassList } from "../interfaces/IClassList";
import { padLeftIfValue } from "../utils/padLeftIfValue";

interface KeyValue {
  key: string;
  value: string;
}

export class StringElement implements IAbstractElement<string> {
  private _appends: IAbstractElement<string>[] = [];
  private _attributes: KeyValue[] = [];
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

  addAttribute(key: string, value: string) {
    this._attributes.push({
      key,
      value,
    });
  }

  private buildOpeningTag() {
    let openTag = `<${this.tagName}`;
    openTag += padLeftIfValue(this.buildClassAttribute());
    openTag += padLeftIfValue(this.buildAttributes());
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

  private buildAttributes() {
    if (!this._attributes.length) return "";

    const attributeStrings = this._attributes.map(
      (attribute) => `${attribute.key}="${attribute.value}"`
    );
    return attributeStrings.join(" ");
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
