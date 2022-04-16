import { IElement } from "../interfaces/IElement";
import { ImageElementParams } from "../types/element";
import { Element } from "./element";

const DEFAULTS: ImageElementParams = {
  children: [],
  classes: [],
  id: "",
  src: "",
  alt: "",
};

class ImageElement extends Element {
  constructor(params: ImageElementParams = DEFAULTS) {
    super("image", {
      ...DEFAULTS,
      ...params,
    });
  }
}

export function Image(...params: IElement[]);
export function Image(params: ImageElementParams);
export function Image(...params: any[]) {
  if (!params.length) return empty();

  const constructorName = params[0].__proto__.constructor.name;
  if (constructorName === "Object") return withElementParams(params[0]);

  return defaultsWithChildren(params);
}

function empty() {
  return new ImageElement();
}

function withElementParams(elementParams) {
  return new ImageElement(elementParams);
}

function defaultsWithChildren(children: IElement[]) {
  return new ImageElement({
    ...DEFAULTS,
    children,
  });
}
