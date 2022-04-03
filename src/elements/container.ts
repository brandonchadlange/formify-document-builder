import { IElement } from "../interfaces/IElement";
import { ElementParams } from "../types/element";
import { Element } from "./element";

const DEFAULTS: ElementParams = {
  children: [],
  classes: [],
  id: "",
  innerText: "",
};

class ContainerElement extends Element {
  constructor(params: ElementParams = DEFAULTS) {
    super("container", {
      ...DEFAULTS,
      ...params,
    });
  }
}

export function Container(...params: IElement[]);
export function Container(params: ElementParams);
export function Container(...params: any[]) {
  if (!params.length) return empty();

  const constructorName = params[0].__proto__.constructor.name;
  if (constructorName === "Object") return withElementParams(params[0]);

  return defaultsWithChildren(params);
}

function empty() {
  return new ContainerElement();
}

function withElementParams(elementParams) {
  return new ContainerElement(elementParams);
}

function defaultsWithChildren(children: IElement[]) {
  return new ContainerElement({
    ...DEFAULTS,
    children,
  });
}
