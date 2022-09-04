import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { articles } from 'src/app/moockdata/data.moock';

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
      console.log(params)
      this.typeView=this.getClass(params['typeView'])
      console.log(this.typeView)
    })

  }

  getClass(view: string) {
    console.log(view)
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