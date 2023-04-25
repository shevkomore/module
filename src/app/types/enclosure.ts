import { Shape2D } from "../types/shapes/shape2-d";

export class Enclosure implements ShowableDataContainer {
    constructor(
    public type :string,
    public shape :Shape2D,
    public requirements :Array<string>){}

}

