import { IElement } from "../interfaces/IElement";
import { LinkElementParams } from "../types/element";
import { Element } from "./element";

const DEFAULTS: LinkElementParams = {
  children: [],
  classes: [],
  id: "",
  innerText: "",
};

class LinkElement extends Element {
  constructor(params: LinkElementParams = DEFAULTS) {
    super("link", {
      ...DEFAULTS,
      ...params,
    });
  }
}

export function Link(...params: IElement[]);
export function Link(params: LinkElementParams);
export function Link(...params: any[]) {
  if (!params.length) return empty();

  const constructorName = params[0].__proto__.constructor.name;
  if (constructorName === "Object") return withElementParams(params[0]);

  return defaultsWithChildren(params);
}

function empty() {
  return new LinkElement();
}

function withElementParams(elementParams) {
  return new LinkElement(elementParams);
}

function defaultsWithChildren(children: IElement[]) {
  return new LinkElement({
    ...DEFAULTS,
    children,
  });
}
