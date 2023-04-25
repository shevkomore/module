import { Injectable } from '@angular/core';
import { Enclosure } from '../types/enclosure';
import { Rectangle } from '../types/shapes/rectangle';
import { EnclosureParalellepiped } from '../types/shapes/enclosure-paralellepiped';

@Injectable({
  providedIn: 'root'
})
export class EnclosureSelectionService {
  private options?: Record<string, Enclosure>;
  private req :Request = new Request("assets/data/enclosure-options.json");
  constructor() { 
    
  }
  async getOptions(): Promise<string[]>{
    if(!this.options){
      this.options = {};
      await this.loadData()
    }
    return Object.keys(this.options);
  }
  async getNamedOptions(): Promise<{text: string, id: string}[]>{
    if(!this.options){
      this.options = {};
      await this.loadData()
    }
    const res = Object.keys(this.options)
    .map<{text: string, id: string} | undefined>(key => 
      {if (this.options) 
        return {text: this.options[key].type, id: key} 
        else return undefined})
      .filter(el => el);
    return res as {text: string, id: string}[];
  }
  async getEnclosure(key: string) :Promise<Enclosure | undefined>{
    if(!this.options){
      this.options = {};
      await this.loadData()
    }
    return this.options[key];
  }
  async getName(key: string) :Promise<string | undefined>{
    if(!this.options){
      this.options = {};
      await this.loadData()
    }
    if(this.options[key]) return this.options[key].type;
    else return undefined;
  }
  private async loadData(){
      let o = await fetch(this.req);
        let data = await o.json();
        this.options = {};
        //DATA PROCESSING 

        /*
        Assume specific shape of data:
        {
          "(id)":{
            "type": ...
            "shape": ... (NOTE: supports length+width as Rectangle | length+width+height as EnclosureParalellepiped)
            "requirements": ... (NOTE: unnecessary)
          }
          ...  repeating
        }
        Trying to use it as such, otherwise throw error
        */
        const items = Object.entries<any>(data);
        items.forEach(pair => {
          if("height" in pair[1].shape)
            pair[1].shape = new EnclosureParalellepiped(pair[1].shape.length, pair[1].shape.width, pair[1].shape.height);
          else pair[1].shape = new Rectangle(pair[1].shape.length, pair[1].shape.width);
          // there shouldn't be any way for this.options to not exist; but compiler disagrees, so...
          if(this.options){
            this.options[pair[0]] = new Enclosure(pair[1].type, pair[1].shape, pair[1].requirements);
          }
        })
  }
}
