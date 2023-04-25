import { Component, Input} from '@angular/core';
import { IonicModule, PopoverController } from '@ionic/angular';
import { DataPopoverComponent } from '../data-popover/data-popover.component';
import { CommonModule, NgForOf } from '@angular/common';
import { ShowableDataContainer } from '../types/showable-data/showable-data-generator';
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss'],
  imports: [IonicModule, CommonModule, NgForOf],
  standalone: true
})
export class DataComponent {
  
  @Input() source!: ShowableDataContainer
  constructor(
    private popoverController: PopoverController
  ) {  }

  async presentPopover(event: Event, text: string){
    const popover = await this.popoverController.create({
      component: DataPopoverComponent,
      event: event,
      componentProps: {data: text}
    });

    await popover.present();

    await popover.onDidDismiss();
  }

}
