import { Action, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromArticle from './article/article.reducer';
import * as fromArticleTag from './article-tag/article-tag.reducer';
import * as fromUser from './user/user.reducer';
import { InjectionToken } from '@angular/core';

export interface State {
    [fromArticle.articlesFeatureKey]: fromArticle.State;
    [fromArticleTag.articleTagsFeatureKey]: fromArticleTag.State;
    [fromUser.usersFeatureKey]: fromUser.State;
}

export const ROOT_REDUCERS = new InjectionToken<
    ActionReducerMap<State, Action>
    >('Root reducers token', {
    factory: () => ({
        [fromArticle.articlesFeatureKey]: fromArticle.reducer,
        [fromArticleTag.articleTagsFeatureKey]: fromArticleTag.reducer,
        [fromUser.usersFeatureKey]: fromUser.reducer,
    }),
});

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
