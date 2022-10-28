import { Action } from '@ngrx/store';

export enum ArticlesActions {
    LoadArticles = '[Articles Page] Load Articles',
    ArticlesLoadedSuccess = '[Articles Page] Articles Loaded Success',
    ArticlesLoadedError = '[Articles Page] Articles Loaded Error',
  }
  
  export interface Article {
    id: number;
    author: string;
    title: string;
  }
  
  export class LoadArticles implements Action {
    readonly type = ArticlesActions.LoadArticles;
  }
  
  export class ArticlesLoadedSuccess implements Action {
    readonly type = ArticlesActions.ArticlesLoadedSuccess;
  
    constructor(public payload: { articles: Article[] }) {}
  }
  
  export class ArticlesLoadedError implements Action {
    readonly type = ArticlesActions.ArticlesLoadedError;
  }
  
  export type ArticlesUnion =
    | LoadArticles
    | ArticlesLoadedSuccess
    | ArticlesLoadedError;