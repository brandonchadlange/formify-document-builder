import { IElement } from "../interfaces/IElement";
import type { Builders } from "../types/Builders";
import { ElementDetails } from "../types/ElementDetails";

export class ElementBase implements IElement {
  private elementDetails: ElementDetails;

  constructor(elementDetails: ElementDetails) {
    this.elementDetails = elementDetails;
  }

  get name() {
    return this.elementDetails.name;
  }

  get tag() {
    return this.elementDetails.tag;
  }

  build(builders: Builders) {
    throw "Element Not Implemented";
  }
}
