import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleReactionComponent } from './article-reaction.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserCardComponent } from '../user-card/user-card.component';
import { LikesComponent } from '../likes/likes.component';
import { StarComponent } from '../star/star.component';



@NgModule({
  declarations: [
    ArticleReactionComponent,
    UserCardComponent,
    LikesComponent,
    StarComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    ArticleReactionComponent,
  ]
})
export class ArticleReactionModule { }
