import { ElementBase } from "./index";
import type { ElementDetails } from "../types/ElementDetails";
import { Builders } from "../types/Builders";
import { IElement } from "../interfaces/IElement";
import { isInstanceOf } from "../utils/isInstanceOf";

const ELEMENT_DETAILS: ElementDetails = {
  name: "container",
  tag: "div",
};

export type ContainerElementParams = {
  height?: string;
  width?: string;
  children?: IElement[];
};

class ContainerElement extends ElementBase {
  private params: ContainerElementParams;

  constructor(params: ContainerElementParams = {}) {
    super(ELEMENT_DETAILS);
    this.params = params;
  }

  build(builders: Builders): void {
    return builders.container.build(
      {
        name: this.name,
        tag: this.tag,
      },
      this.params
    );
  }
}

export function Container(...children: IElement[]);
export function Container(params?: ContainerElementParams);
export function Container(...params: any) {
  if (!params.length) return new ContainerElement();
  if (params.length === 1 && !isInstanceOf(params[0], ElementBase))
    return new ContainerElement(params[0]);

  const invalidElement = params.find(
    (param) => !isInstanceOf(param, ElementBase)
  );

  if (invalidElement) {
    throw "All elements must be of type Element Base";
  }

  return new ContainerElement({
    children: params,
  });
}
