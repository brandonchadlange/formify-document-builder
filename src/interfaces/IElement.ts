import { Builders } from "../types/builder";

export interface IElement {
  build(builders: Builders): any;
}
