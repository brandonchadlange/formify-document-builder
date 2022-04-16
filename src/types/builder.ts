import { IBuilder } from "../interfaces/IBuilder";

export type Builder =
  | "container"
  | "text"
  | "form"
  | "input"
  | "image"
  | "link"
  | "label";

export type Builders = Record<Builder, IBuilder>;
