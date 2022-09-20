import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { articles } from '../../../common/models/moockdata/data.moock';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss']
})
export class ArticleCardComponent implements OnInit {
  
  articles = [...articles];
  typeView='default';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log(this.articles[0])
      // tslint:disable-next-line: no-string-literal
      this.typeView=this.getClass(params['typeView'])
      console.log(this.typeView)
    })

  }



  getClass(view: string) {
    console.log(view)
    switch(view) {
        case 'titles':
            return 'feedBlokTitlesView';
        case 'list':
            return 'feedBlokListView';
        default:
            return 'feedBlokDefaultView';
          
    }
    

  }





}
