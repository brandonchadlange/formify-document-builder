export interface IClassList {
  value: string;
  length: number;
  add(...tokens: string[]): void;
}
