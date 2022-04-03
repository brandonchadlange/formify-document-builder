import { IClassList } from "./IClassList";

export interface IAbstractElement<T> {
  classList: IClassList;
  render: () => T;
  append: (...elements: IAbstractElement<T>[]) => void;
}
