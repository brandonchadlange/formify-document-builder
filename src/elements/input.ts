import { IElement } from "../interfaces/IElement";
import { InputElementParams } from "../types/element";
import { Element } from "./element";

const DEFAULTS: InputElementParams = {
  children: [],
  classes: [],
  id: "",
  innerText: "",
  name: "",
  type: "text",
};

class InputElement extends Element {
  constructor(params: InputElementParams = DEFAULTS) {
    super("input", {
      ...DEFAULTS,
      ...params,
    });
  }
}

export function Input(...params: IElement[]);
export function Input(params: InputElementParams);
export function Input(...params: any[]) {
  if (!params.length) return empty();

  const constructorName = params[0].__proto__.constructor.name;
  if (constructorName === "Object") return withElementParams(params[0]);

  return defaultsWithChildren(params);
}

function empty() {
  return new InputElement();
}

function withElementParams(elementParams) {
  return new InputElement(elementParams);
}

function defaultsWithChildren(children: IElement[]) {
  return new InputElement({
    ...DEFAULTS,
    children,
  });
}
