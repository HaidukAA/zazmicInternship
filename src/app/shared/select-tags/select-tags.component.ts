import { Component, Input } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';


@Component({
  selector: 'app-select-tags',
  templateUrl: './select-tags.component.html',
  styleUrls: ['./select-tags.component.scss']
})
export class SelectTagsComponent {
  
  @Input() name: string = '';
  @Input() toppings: string[] = [''];
  @Input() groupName: any;
  searchText;

  constructor() 
  { 
    this.groupName = new UntypedFormGroup({
      tags: new UntypedFormControl(['']),
      tagsSearch: new UntypedFormControl('')
  });

  }
  preview = 'assets/images/svg/delete.svg';
 
  toppingList: string[] = ['Console', 'Material Design', 'HTML 5', 'Canvas', 'Animations', 'Nodejs', 'Data Sciense', 'Artificial Intelligence'];

}
