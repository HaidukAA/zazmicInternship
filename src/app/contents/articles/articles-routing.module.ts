import { NgModule } from '@angular/core';
import { ArtilesFeedComponent } from './articles-feed/artiles-feed.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ 
  {path: '', component: ArtilesFeedComponent}
 ]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule { }
