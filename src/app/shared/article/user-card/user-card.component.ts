import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent{

  @Input() imageUserUser?: string
  @Input() nameUserUser?: string
  
}
