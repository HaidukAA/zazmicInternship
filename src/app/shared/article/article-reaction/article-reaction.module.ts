import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleReactionComponent } from './article-reaction.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ArticleReactionComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    ArticleReactionComponent
  ]
})
export class ArticleReactionModule { }
