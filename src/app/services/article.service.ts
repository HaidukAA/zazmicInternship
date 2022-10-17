// import { Injectable } from '@angular/core';
// import { HttpParams } from '@angular/common/http';
// import { Observable } from 'rxjs';

// import { ApiService } from './api.service';

// import { map } from 'rxjs/operators';
// import { Article, ArticleListConfig } from '../common/models/interfaces';

// @Injectable()
// export class ArticlesService {
//   constructor (
//     private apiService: ApiService
//   ) {}

//   query(config: ArticleListConfig): Observable<{articles: Article[], articlesCount: number}> {
//     // Convert any filters over to Angular's URLSearchParams
//     const params = {};

//     Object.keys(config.filters)
    

//     return this.apiService
//     .get(
//       '/articles' + ((config.type === 'feed') ? '/feed' : ''),
//       new HttpParams({ fromObject: params })
//     );
//   }

//   get(slug: string): Observable<Article> {
//     return this.apiService.get('/articles/' + slug)
//       .pipe(map(data => data.article));
//   }

//   destroy(slug: string) {
//     return this.apiService.delete('/articles/' + slug);
//   }

//   save(article: Article): Observable<Article> {
//     // If we're updating an existing article
//     if (article.slug) {
//       return this.apiService.put('/articles/' + article.slug, {article})
//         .pipe(map(data => data.article));

//     // Otherwise, create a new article
//     } else {
//       return this.apiService.post('/articles/', {article})
//         .pipe(map(data => data.article));
//     }
//   }

//   favorite(slug: string): Observable<Article> {
//     return this.apiService.post('/articles/' + slug + '/favorite');
//   }

//   unfavorite(slug: string): Observable<Article> {
//     return this.apiService.delete('/articles/' + slug + '/favorite');
//   }


// }

import {Injectable} from '@angular/core'
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http'
import {catchError, delay, Observable, retry, tap, throwError} from 'rxjs'
import { IArticle } from '../common/models/interfaces/data.model'


@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  constructor(private http: HttpClient,) {}

 articles: IArticle[] = []

  getAll(): Observable<IArticle[]> {
    return this.http.get<IArticle[]>('src/app/common/models/moockdata/data.moock.ts', {
      params: new HttpParams({
        fromObject: {limit: 6}
      })
    }).pipe(
        delay(200),
        retry(2),
        tap(articles => this.articles = articles),
      )
    
  }
  
  create(article: IArticle): Observable<IArticle> {
    return this.http.post<IArticle>('src/app/common/models/moockdata/data.moock.ts', article)
        .pipe(
        // tslint:disable-next-line: no-unused-expression
        tap(art => this.articles.push(art))
    ) }

}