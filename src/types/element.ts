import { IElement } from "../interfaces/IElement";

export type ElementParams = {
  children?: IElement[];
  classes?: string[];
  id?: string;
  innerText?: string;
};

type TextElementType = "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type TextElementParams = ElementParams & {
  type?: TextElementType;
};
