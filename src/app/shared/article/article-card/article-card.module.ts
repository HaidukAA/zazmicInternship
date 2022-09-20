import { NgModule } from '@angular/core';
import { ArticleCardComponent } from './article-card.component';
import { TagsModule } from '../../tags/tags.module';
import { ArticleReactionModule } from '../article-reaction/article-reaction.module';
import { CommonModule } from '@angular/common';
import { HoverDirective } from './hover.directive';


@NgModule({
  declarations: [ArticleCardComponent, HoverDirective],
  imports:[TagsModule,
    ArticleReactionModule,
    CommonModule],
  exports:[ArticleCardComponent, HoverDirective]


})

export class ArticleCardModule { }
