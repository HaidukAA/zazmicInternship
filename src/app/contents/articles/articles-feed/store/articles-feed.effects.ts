import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap} from 'rxjs/operators';
import { of } from 'rxjs';

import * as ArticlesActions from '../../../../store/article/article.actions';
import { ArticlesLoadedError, ArticlesLoadedSuccess, Article } from './articles-feed.actions';
import { BlogService } from 'src/app/auth/services/blog.service';


@Injectable()
export class ArticlesEffects {
  @Effect()
  loadArticles$ = this.actions$.pipe(
    ofType(ArticlesActions.loadArticles),
    mergeMap(() =>
      this.articlesService.getArticles().pipe(
        map(
          (articles: any) =>
            new ArticlesLoadedSuccess({
                articles
            })
        ),
        catchError(() => of(new ArticlesLoadedError()))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private articlesService: BlogService
  ) {}
}
