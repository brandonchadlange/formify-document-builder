import { ElementParams } from "../types/element";
import { IElement } from "../interfaces/IElement";
import { Builder, Builders } from "../types/builder";

export class Element implements IElement {
  private _builder: Builder;
  private _params: ElementParams;

  constructor(builder: Builder, params: ElementParams) {
    this._builder = builder;
    this._params = params;
  }

  build(builders: Builders) {
    return builders[this._builder].build(this._params, builders);
  }
}
