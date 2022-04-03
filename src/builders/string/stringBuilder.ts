import { StringElement } from "../../abstractions/string";
import { IBuilder } from "../../interfaces/IBuilder";
import { Builders } from "../../types/builder";
import { ElementParams } from "../../types/element";
import { TagName } from "../../types/tag";

export class StringBuilder implements IBuilder {
  private _tagName: TagName;

  constructor(tagName: TagName) {
    this._tagName = tagName;
  }

  build(params: ElementParams, builders: Builders) {
    const element = new StringElement(this._tagName);
    element.classList.add(...params.classes);

    const childrenElements = params.children.map((child) =>
      child.build(builders)
    );

    element.append(...childrenElements);
    element.innerText = params.innerText;

    return element;
  }
}
