import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { ArtilesFeedComponent } from './contents/articles/articles-feed/artiles-feed.component';


const routes: Routes = [ 

  {path: 'feed', component: ArtilesFeedComponent},

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule],
  bootstrap: [AppComponent],
})
export class AppRoutingModule { }
