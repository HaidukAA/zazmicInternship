import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artiles-feed',
  templateUrl: './artiles-feed.component.html',
  styleUrls: ['./artiles-feed.component.scss']
})
export class ArtilesFeedComponent implements OnInit {

  typeView='default';
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      // tslint:disable-next-line: no-string-literal
      this.typeView=this.getClass(params['typeView'])
    })

  }

  getClass(view: string) {
    switch(view) {
        case 'titles':
            return 'cards';
        case 'list':
            return '';
        default:
            return 'cards';
          
    }


}
}