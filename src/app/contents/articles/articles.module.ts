import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtilesFeedComponent } from './articles-feed/artiles-feed.component';
import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticleCardModule } from 'src/app/shared/article/article-card/article-card.module';
import { ArticleComponent } from './article-page/article.component';
import { SidebarModule } from '../contents-sidebar/sidebar.module';
import { ArticleReactionModule } from 'src/app/shared/article/article-reaction/article-reaction.module';
import { ArticleCreateComponent } from './article-create/article-create.component';
import { InputModule } from 'src/app/shared/input/input.module';
import { EditorModule } from 'src/app/shared/editor/editor.module';
import { ImageEditorModule } from 'src/app/shared/image-editor/image-editor.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'src/app/shared/button/button.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { SelectTagsModule } from 'src/app/shared/select-tags/select-tags.module';
import { ArticleEditorComponent } from './article-editor/article-editor.component';
import { TagsModule } from 'src/app/shared/tags/tags.module';


@NgModule({
  declarations: [
    ArtilesFeedComponent,
    ArticleComponent,
    ArticleCreateComponent,
    ArticleEditorComponent],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    ArticleCardModule,
    SidebarModule,
    ArticleReactionModule,
    InputModule,
    EditorModule,
    ImageEditorModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    SelectTagsModule,
    TagsModule
  ],
  exports:[ArtilesFeedComponent]
})
export class ArticlesModule { }
