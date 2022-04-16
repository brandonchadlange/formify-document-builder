import { IElement } from "../interfaces/IElement";
import { LabelElementParams } from "../types/element";
import { Element } from "./element";

const DEFAULTS: LabelElementParams = {
  children: [],
  classes: [],
  id: "",
  innerText: "",
};

class LabelElement extends Element {
  constructor(params: LabelElementParams = DEFAULTS) {
    super("label", {
      ...DEFAULTS,
      ...params,
    });
  }
}

export function Label(...params: IElement[]);
export function Label(params: LabelElementParams);
export function Label(...params: any[]) {
  if (!params.length) return empty();

  const constructorName = params[0].__proto__.constructor.name;
  if (constructorName === "Object") return withElementParams(params[0]);

  return defaultsWithChildren(params);
}

function empty() {
  return new LabelElement();
}

function withElementParams(elementParams) {
  return new LabelElement(elementParams);
}

function defaultsWithChildren(children: IElement[]) {
  return new LabelElement({
    ...DEFAULTS,
    children,
  });
}
