import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleCommentAuthorComponent } from './article-comment-author/article-comment-author.component';
import { ArticleCommentCardComponent } from './article-comment-card/article-comment-card.component';
import { ArticleCommentEditorComponent } from './article-comment-editor/article-comment-editor.component';



@NgModule({
  declarations: [
    ArticleCommentAuthorComponent,
    ArticleCommentCardComponent,
    ArticleCommentEditorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ArticleCommentsModule { }
