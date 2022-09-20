import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtilesFeedComponent } from './articles-feed/artiles-feed.component';
import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticleCardModule } from 'src/app/shared/article/article-card/article-card.module';

@NgModule({
  declarations: [
    ArtilesFeedComponent],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    ArticleCardModule
  ],
  exports:[ArtilesFeedComponent]
})
export class ArticlesModule { }
