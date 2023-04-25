import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Enclosure } from '../types/enclosure';

@Injectable({
  providedIn: 'root'
})
export class EnclosureDataService {
  private data :Enclosure[] = [];
  private listUpdater = new BehaviorSubject(this.data);
  list = this.listUpdater.asObservable();
  constructor() { }
  addElement(el: Enclosure){ 
    this.data.push(el);
    this.listUpdater.next(this.data);
  }
  removeElement(index: number){
    const len = this.data.length;
    this.data.splice(index, 1);
    if(this.data.length < len)
      this.listUpdater.next(this.data);
  }
  clear(){
    this.data = [];
    this.listUpdater.next(this.data);
  }
  getElements(){ return this.data}
}
