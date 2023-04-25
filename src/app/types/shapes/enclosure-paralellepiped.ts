import { ShowableData } from "../showable-data";
import { Rectangle } from "./rectangle";
import { Shape3D } from "./shape3-d";

export class EnclosureParalellepiped extends Rectangle implements Shape3D{
    constructor(
        length: number, 
        width: number, 
        public height: number){super(length, width)}
    get Volume(): number {
        return this.Area * this.height;
    }
    override get showableData(): ShowableData[] {
        return [
            {
                name: "Dimensions",
                description: "Length and width of the shape.",
                data: this.length.toFixed(2)+"m x "+this.width.toFixed(2)+"m x "+this.height.toFixed(2)+"m"
            },
            {
                name: "Area",
                description: "Area of the floor's surface",
                data: this.Area.toFixed(2)+"m^2"
            },
            {
                name: "Volume",
                description: "Volume of the shape",
                data: this.Volume.toFixed(2)+"m^3"
            }
        ]
    }
}
