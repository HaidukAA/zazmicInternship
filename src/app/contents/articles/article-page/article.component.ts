import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IArticle } from '../../../common/models/interfaces/data.model';
import { articles } from '../../../common/models/moockdata/data.moock';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  articles=articles;
  article: IArticle | undefined;

  constructor(
    private route: ActivatedRoute,
    
  ) { }

  ngOnInit() {
      
    const routeParams = this.route.snapshot.paramMap;
    const articleIdFromRoute = Number(routeParams.get('articleId'));

    this.article = articles.find(article => article.id === articleIdFromRoute);
  }

}
