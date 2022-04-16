import { StringElement } from "../../abstractions/string";
import { Builders } from "../../types/builder";
import { LabelElementParams } from "../../types/element";
import { StringBuilder } from "./stringBuilder";

export class StringLabelBuilder extends StringBuilder {
  constructor() {
    super("label");
  }

  build(params: LabelElementParams, builders: Builders) {
    const element = new StringElement("label");

    if (params.id) {
      element.addAttribute("id", params.id);
    }

    element.classList.add(...params.classes);

    if (params.for) {
      element.addAttribute("for", params.for);
    }

    const childrenElements = params.children.map((child) =>
      child.build(builders)
    );

    element.append(...childrenElements);
    element.innerText = params.innerText;

    return element;
  }
}
