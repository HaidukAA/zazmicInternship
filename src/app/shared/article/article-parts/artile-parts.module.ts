import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleAuthorComponent } from './article-author/article-author.component';
import { ArticleReactionsComponent } from './article-reactions/article-reactions.component';



@NgModule({
  declarations: [
    ArticleAuthorComponent,
    ArticleReactionsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ArtilePartsModule { }
