import { StringElement } from "../../abstractions/string";
import { Builders } from "../../types/builder";
import { FormElementParams } from "../../types/element";
import { StringBuilder } from "./stringBuilder";

export class StringFormBuilder extends StringBuilder {
  constructor() {
    super("form");
  }

  build(params: FormElementParams, builders: Builders) {
    const element = new StringElement("form");

    if (params.id) {
      element.addAttribute("id", params.id);
    }

    element.classList.add(...params.classes);

    if (params.action) {
      element.addAttribute("action", params.action);
    }

    if (params.method) {
      element.addAttribute("method", params.method);
    }

    const childrenElements = params.children.map((child) =>
      child.build(builders)
    );

    element.append(...childrenElements);
    element.innerText = params.innerText;

    return element;
  }
}
