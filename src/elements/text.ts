import { IElement } from "../interfaces/IElement";
import { TextElementParams } from "../types/element";
import { Element } from "./element";

const DEFAULTS: TextElementParams = {
  children: [],
  classes: [],
  id: "",
  innerText: "",
  type: "p",
};

class TextElement extends Element {
  constructor(params: TextElementParams = DEFAULTS) {
    super("text", {
      ...DEFAULTS,
      ...params,
    });
  }
}

export function Text(...params: IElement[]);
export function Text(params: TextElementParams);
export function Text(...params: any[]) {
  if (!params.length) return empty();

  const constructorName = params[0].__proto__.constructor.name;
  if (constructorName === "Object") return withElementParams(params[0]);

  return defaultsWithChildren(params);
}

function empty() {
  return new TextElement();
}

function withElementParams(elementParams) {
  return new TextElement(elementParams);
}

function defaultsWithChildren(children: IElement[]) {
  return new TextElement({
    ...DEFAULTS,
    children,
  });
}
