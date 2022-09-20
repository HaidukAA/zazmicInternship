import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContensComponent } from './contens.component';


const routes: Routes = [ 
  // {path: '', component: ArtilesFeedComponent}
  {
    path: '',
    component: ContensComponent,
    children:[{path: 'feed',
    loadChildren: () => import('./articles/articles.module').then(m => m.ArticlesModule),} ]
  },
]


@NgModule({
  declarations:[],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentsRoutingModule { }

