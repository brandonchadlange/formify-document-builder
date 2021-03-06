import { StringElement } from "../../abstractions/string";
import { Builders } from "../../types/builder";
import { InputElementParams } from "../../types/element";
import { StringBuilder } from "./stringBuilder";

export class StringInputBuilder extends StringBuilder {
  constructor() {
    super("input");
  }

  build(params: InputElementParams, builders: Builders) {
    const element = new StringElement("input");

    if (params.id) {
      element.addAttribute("id", params.id);
    }

    element.classList.add(...params.classes);

    if (params.value) {
      element.addAttribute("value", params.value);
    }

    element.addAttribute("type", params.type);

    if (params.name) {
      element.addAttribute("name", params.name);
    }

    const childrenElements = params.children.map((child) =>
      child.build(builders)
    );

    element.append(...childrenElements);
    element.innerText = params.innerText;

    return element;
  }
}
