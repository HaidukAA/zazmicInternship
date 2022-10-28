import {createSelector } from '@ngrx/store';
import * as ArticlesFeedActions from './articles-feed.actions';
import { Article, ArticleParams } from '../../../../store/article/article.model';
import { ArticlesActions, ArticlesUnion } from './articles-feed.actions';
import { State } from 'src/app/store';

export interface ArticlesState {
    articles: any;
    list: Article[];
  }
  
  const initialState: ArticlesState = {
      articles: [],
      list: []
  };
  
  export function articlesReducer(
    state: ArticlesState = initialState,
    action: ArticlesUnion
  ) {
    switch (action.type) {
      case ArticlesActions.ArticlesLoadedSuccess:
        return {
          ...state,
          list: action.payload.articles,
        };
      case ArticlesActions.ArticlesLoadedError:
        return {
          ...state,
          list: [],
        };
      default:
        return state;
    }
  }
  
  const selectArticles = (state: ArticlesState) => state.articles;
  
  export const selectArticlesList = createSelector(
    selectArticles,
    (state: ArticlesState) => state.list
  );