import { IContextBuilder } from "../interfaces/IContextBuilder";
import { IElement } from "../interfaces/IElement";
import { Builders } from "../types/Builders";

export class ContextBuilder implements IContextBuilder {
  private elements: IElement[];
  private builders: Builders;

  constructor(elements: IElement[], builders: Builders) {
    this.elements = elements;
    this.builders = builders;
  }

  build() {
    return this.elements.map((element) => element.build(this.builders));
  }
}
