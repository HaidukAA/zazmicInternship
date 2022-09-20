import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-droprightFilterAuthor',
  templateUrl: './droprightFilterAuthor.component.html',
  styleUrls: ['./droprightFilterAuthor.component.scss']
})
export class DroprightFilterAuthorComponent {
  @Input() name: string = '';
  toppings = new FormControl('');
  hidden = false;

  toppingList: string[] = ['TYLER FOLKMAN', 'BHINAV SAGAR', 'DEVIN SONI', 'INDREK LASN', 'STEN SOOTLA', 'JOHN AU-YEUNG'];

}
