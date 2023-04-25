import { Shape2D } from "./shape2-d";

export interface Shape3D extends Shape2D{
    get Volume() :number;
}
