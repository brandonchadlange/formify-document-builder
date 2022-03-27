import { IElementBuilder } from "../../interfaces/IElementBuilder";
import { ElementDetails } from "../../types/ElementDetails";

export class DomElementBuilder implements IElementBuilder {
  build(details: ElementDetails, params: any) {
    throw "Builder Not Implemented";
  }
}
