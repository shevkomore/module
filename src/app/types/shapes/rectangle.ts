import { ShowableData } from "../showable-data";
import { ShowableDataContainer } from "../showable-data/showable-data-generator";
import { Shape2D } from "./shape2-d";

export class Rectangle implements Shape2D, ShowableDataContainer{
    constructor(
        public length:number,
        public width:number
    ){}
    get showableData(): ShowableData[] {
        return [
            {
                name: "Dimensions",
                description: "Length and width of the shape.",
                data: this.length.toFixed(2)+"m x "+this.width.toFixed(2)+"m"
            },
            {
                name: "Area",
                description: "Area of the shape",
                data: this.Area.toFixed(2)+"m^2"
            }
        ]
    }
    
    get Area(): number {
        return this.length * this.width
    }
}
