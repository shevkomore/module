import { ShowableData } from "./showable-data";

export interface ShowableDataGenerator<T> {
    generateShowableData(obj: T): ShowableData[]
}
