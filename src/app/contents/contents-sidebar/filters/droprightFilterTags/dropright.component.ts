import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-dropright',
  templateUrl: './dropright.component.html',
  styleUrls: ['./dropright.component.scss']
})
export class DroprightComponent {
  @Input() name: string = '';
  toppings = new FormControl('');


  toppingList: string[] = ['Console', 'Material Design', 'HTML 5', 'Canvas', 'Animations', 'Nodejs', 'Data Sciense'];
}
