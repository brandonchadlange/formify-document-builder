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

type FormElementMethod = "get" | "post";

export type FormElementParams = ElementParams & {
  method?: FormElementMethod;
  action?: string;
};

type InputElementType =
  | "text"
  | "number"
  | "checkbox"
  | "date"
  | "datetime-local"
  | "time"
  | "email"
  | "password"
  | "radio"
  | "url";

export type InputElementParams = ElementParams & {
  name?: string;
  type?: InputElementType;
};
