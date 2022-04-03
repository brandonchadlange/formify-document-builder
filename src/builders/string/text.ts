import { StringElement } from "../../abstractions/string";
import { Builders } from "../../types/builder";
import { TextElementParams } from "../../types/element";
import { StringBuilder } from "./stringBuilder";

export class StringTextBuilder extends StringBuilder {
  constructor() {
    super("p");
  }

  build(params: TextElementParams, builders: Builders) {
    const element = new StringElement(params.type);
    element.classList.add(...params.classes);

    const childrenElements = params.children.map((child) =>
      child.build(builders)
    );

    element.append(...childrenElements);
    element.innerText = params.innerText;

    return element;
  }
}
