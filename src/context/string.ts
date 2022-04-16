import {
  StringContainerBuilder,
  StringTextBuilder,
  StringFormBuilder,
  StringInputBuilder,
  StringImageBuilder,
  StringLinkBuilder,
  StringLabelBuilder,
} from "../builders/string/index";
import { IElement } from "../interfaces/IElement";
import { Builders } from "../types/builder";

const builders: Builders = {
  container: new StringContainerBuilder(),
  text: new StringTextBuilder(),
  form: new StringFormBuilder(),
  input: new StringInputBuilder(),
  image: new StringImageBuilder(),
  link: new StringLinkBuilder(),
  label: new StringLabelBuilder(),
};

class StringContextBuilder {
  private _elements: IElement[] = [];

  constructor(...elements: IElement[]) {
    this._elements.push(...elements);
  }

  build() {
    const elems = this._elements.map((element) => element.build(builders));
    const render = elems.map((elem) => elem.render()).join("");
    return render;
  }
}

export function StringContext(...elements) {
  const builder = new StringContextBuilder(...elements);
  return builder.build();
}
