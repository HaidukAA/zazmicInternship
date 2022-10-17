import { Component, Input} from '@angular/core';
import {FormControl} from '@angular/forms';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkVirtualScrollViewport} from "@angular/cdk/scrolling";

@Component({
  selector: 'app-dropright',
  templateUrl: './dropright.component.html',
  styleUrls: ['./dropright.component.scss']
})
export class DroprightComponent {
  @Input() name: string = '';
  toppings = new FormControl('');
  searchText: any;
  hidden = false;
  toppingList: string[] = ['Console', 'Material Design', 'HTML 5', 'Canvas', 'Animations', 'Nodejs', 'Data Sciense'];
}
