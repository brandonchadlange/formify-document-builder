import { IBuilder } from "../interfaces/IBuilder";

export type Builder = "container" | "text" | "form";

export type Builders = Record<Builder, IBuilder>;
