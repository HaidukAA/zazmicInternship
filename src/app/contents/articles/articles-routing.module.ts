import { NgModule } from '@angular/core';
import { ArtilesFeedComponent } from './articles-feed/artiles-feed.component';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './article-page/article.component';
import { ArticleCreateComponent } from './article-create/article-create.component';
import { ArticleEditorComponent } from './article-editor/article-editor.component';

const routes: Routes = [ 
  {path: '', component: ArtilesFeedComponent},
  {path: 'articles/:articleId', component: ArticleComponent},
  {path: 'createArticle', component:ArticleCreateComponent},
  {path: 'editeArticle/:articleId', component:ArticleEditorComponent},

 ]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule { }
