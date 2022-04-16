import { StringElement } from "../../abstractions/string";
import { Builders } from "../../types/builder";
import { ImageElementParams } from "../../types/element";
import { StringBuilder } from "./stringBuilder";

export class StringImageBuilder extends StringBuilder {
  constructor() {
    super("img");
  }

  build(params: ImageElementParams, builders: Builders) {
    const element = new StringElement("img");

    if (params.id) {
      element.addAttribute("id", params.id);
    }

    element.classList.add(...params.classes);

    if (params.src) {
      element.addAttribute("src", params.src);
    }

    if (params.alt) {
      element.addAttribute("alt", params.alt);
    }

    return element;
  }
}
