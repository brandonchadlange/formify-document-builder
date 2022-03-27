import { ElementDetails } from "../types/ElementDetails";

export interface IElementBuilder {
  build(details: ElementDetails, params);
}
