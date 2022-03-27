import { DomElementBuilder } from "./index";
import { ContainerElementParams } from "../../element/container";
import { ElementDetails } from "../../types/ElementDetails";

export class ContainerDomElementBuilder extends DomElementBuilder {
  build(details: ElementDetails, params: ContainerElementParams) {
    const element = document.createElement(details.tag);
    return element;
  }
}
