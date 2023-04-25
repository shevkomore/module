import { CommonModule } from '@angular/common';
import { Component, Input} from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-data-popover',
  templateUrl: './data-popover.component.html',
  styleUrls: ['./data-popover.component.scss'],
  imports: [IonicModule, CommonModule],
  standalone: true
})
export class DataPopoverComponent {
  @Input() data!: string
  constructor(
    
  ) { }

}
