import { ElementBase } from "./index";
import type { ElementDetails } from "../types/ElementDetails";
import { Builders } from "../types/Builders";

const ELEMENT_DETAILS: ElementDetails = {
  name: "container",
  tag: "div",
};

export type ContainerElementParams = {
  height?: string;
  width?: string;
};

class ContainerElement extends ElementBase {
  private params: ContainerElementParams;

  constructor(params: ContainerElementParams) {
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

export function Container(params?: ContainerElementParams) {
  return new ContainerElement(params);
}
