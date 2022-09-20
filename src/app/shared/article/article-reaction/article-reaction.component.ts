import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-reaction',
  templateUrl: './article-reaction.component.html',
  styleUrls: ['./article-reaction.component.scss']
})
export class ArticleReactionComponent implements OnInit {


  @Input() imageUser?: string
  @Input() nameUser?: string
  @Input() kudos?: number

  // tslint:disable-next-line: no-empty
  constructor() { }

  // tslint:disable-next-line: no-empty
  ngOnInit(): void {
  
  }

}
