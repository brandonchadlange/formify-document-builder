import { StringElement } from "../../abstractions/string";
import { Builders } from "../../types/builder";
import { LinkElementParams } from "../../types/element";
import { StringBuilder } from "./stringBuilder";

export class StringLinkBuilder extends StringBuilder {
  constructor() {
    super("a");
  }

  build(params: LinkElementParams, builders: Builders) {
    const element = new StringElement("a");

    if (params.id) {
      element.addAttribute("id", params.id);
    }

    element.classList.add(...params.classes);

    if (params.href) {
      element.addAttribute("href", params.href);
    }

    if (params.target) {
      element.addAttribute("target", params.target);
    }

    const childrenElements = params.children.map((child) =>
      child.build(builders)
    );

    element.append(...childrenElements);
    element.innerText = params.innerText;

    return element;
  }
}
