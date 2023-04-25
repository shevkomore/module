import { Component } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { CommonModule, NgForOf } from '@angular/common';
import { EnclosureSelectionService } from '../enclosure-services/enclosure-selection.service';

@Component({
  selector: 'app-enclosure-selection',
  templateUrl: './enclosure-selection.component.html',
  styleUrls: ['./enclosure-selection.component.scss'],
  imports: [IonicModule, CommonModule, NgForOf],
  standalone: true
})
export class EnclosureSelectionComponent{
  optionsMap :{text: string, id: string}[];
  finishedLoading: boolean = false;

  constructor(
    private modalController: ModalController,
    private selectionService: EnclosureSelectionService) {
      this.optionsMap = [];
      this.loadSelection().then(() => {this.finishedLoading = true;console.log(this.optionsMap)});
      
    }
    async loadSelection(){
      this.optionsMap = await this.selectionService.getNamedOptions();
    }


  cancel() {
    return this.modalController.dismiss(null, 'cancel');
  }
  
  async select(id: string) {
    return this.modalController.dismiss(await this.selectionService.getEnclosure(id), 'confirm');
  }
}
