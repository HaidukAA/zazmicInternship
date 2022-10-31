import { NgModule } from '@angular/core';
import { ArticleCardComponent } from './article-card.component';
import { TagsModule } from '../../tags/tags.module';
import { ArticleReactionModule } from '../article-reaction/article-reaction.module';
import { CommonModule } from '@angular/common';
import { HoverDirective } from './hover.directive';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [ArticleCardComponent, HoverDirective],
  imports:[TagsModule,
    ArticleReactionModule,
    CommonModule,
    RouterModule],
  exports:[ArticleCardComponent, HoverDirective]


})

export class ArticleCardModule { }
