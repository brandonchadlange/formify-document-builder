import { IBuilder } from "../interfaces/IBuilder";

export type Builder = "container" | "text" | "form" | "input";

export type Builders = Record<Builder, IBuilder>;
