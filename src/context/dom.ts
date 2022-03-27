import { ContextBuilder } from "./index";
import { ContainerDomElementBuilder } from "../builders/dom/container";
import { IElement } from "../interfaces/IElement";
import { Builders } from "../types/Builders";

const DOM_ELEMENT_BUILDERS: Builders = {
  column: new ContainerDomElementBuilder(),
  container: new ContainerDomElementBuilder(),
  row: new ContainerDomElementBuilder(),
};

class DomContextBuilder extends ContextBuilder {
  constructor(elements: IElement[]) {
    super(elements, DOM_ELEMENT_BUILDERS);
  }
}

export function DomContext(elements: IElement[]) {
  if (typeof window === "undefined") throw "Window is required for DomContext";
  const builder = new DomContextBuilder(elements);
  return builder.build();
}
