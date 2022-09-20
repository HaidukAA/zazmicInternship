import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent {

  @Input() name?: string
  

  // tslint:disable-next-line: no-empty
  constructor() { }

  ngOnInit(): void {
   
      console.log("Tegs", this.name)
  }
      
   
    


}
