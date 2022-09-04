import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtilesFeedComponent } from './articles-feed/artiles-feed.component';
import { ArticleCardComponent } from 'src/app/shared/article/article-card/article-card.component';



@NgModule({
  declarations: [
    ArtilesFeedComponent,
    ArticleCardComponent 
  ],
  imports: [
    CommonModule,
  ],
  exports:[ArtilesFeedComponent]
})
export class ArticlesModule { }
