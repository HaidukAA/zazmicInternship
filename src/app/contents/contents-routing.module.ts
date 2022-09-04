import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContensComponent } from './contens.component';
import { ArtilesFeedComponent } from './articles/articles-feed/artiles-feed.component';

const routes: Routes = [ 
  //{path: '', component: ArtilesFeedComponent}
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  bootstrap: [ContensComponent],
})
export class ContentsRoutingModule { }

