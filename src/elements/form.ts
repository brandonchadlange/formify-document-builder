import { IElement } from "../interfaces/IElement";
import { FormElementParams } from "../types/element";
import { Element } from "./element";

const DEFAULTS: FormElementParams = {
  children: [],
  classes: [],
  id: "",
  innerText: "",
  action: "",
};

class FormElement extends Element {
  constructor(params: FormElementParams = DEFAULTS) {
    super("form", {
      ...DEFAULTS,
      ...params,
    });
  }
}

export function Form(...params: IElement[]);
export function Form(params: FormElementParams);
export function Form(...params: any[]) {
  if (!params.length) return empty();

  const constructorName = params[0].__proto__.constructor.name;
  if (constructorName === "Object") return withElementParams(params[0]);

  return defaultsWithChildren(params);
}

function empty() {
  return new FormElement();
}

function withElementParams(elementParams) {
  return new FormElement(elementParams);
}

function defaultsWithChildren(children: IElement[]) {
  return new FormElement({
    ...DEFAULTS,
    children,
  });
}
