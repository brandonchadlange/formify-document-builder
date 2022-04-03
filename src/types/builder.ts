import { IBuilder } from "../interfaces/IBuilder";

export type Builder = "container" | "text";

export type Builders = Record<Builder, IBuilder>;
