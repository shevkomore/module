import { Component, OnDestroy, OnInit } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { EnclosureSelectionComponent } from '../enclosure-selection/enclosure-selection.component';
import { Subscription } from 'rxjs';
import { Enclosure } from '../types/enclosure';
import { DataComponent } from '../data/data.component';
import { NgForOf } from '@angular/common';
import { EnclosureDataService } from '../enclosure-services/enclosure-data.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, DataComponent, NgForOf]
})
export class HomePage implements OnInit, OnDestroy{
  list: Enclosure[] = [];
  private dataSubscription ?:Subscription
  totalArea: number = 0;
  constructor(
    private modalController: ModalController,
    private dataService: EnclosureDataService) {
  }

  async openSelection(){
    const modal = await this.modalController.create({
      component: EnclosureSelectionComponent
    });
    modal.present();
    const {data, role} = await modal.onWillDismiss();
    if(role === "confirm" && data){
      this.dataService.addElement(data);
    }
  }

  deleteElement(index: number){
    this.dataService.removeElement(index);
  }
  
  ngOnInit(): void {
    this.dataSubscription = this.dataService.list.subscribe(
      list => {
        this.list = list;
        this.totalArea = 0;
        list.forEach(el => this.totalArea += el.shape.Area);
      })
  }
  ngOnDestroy(): void {
    this.dataSubscription?.unsubscribe();
  }
}
