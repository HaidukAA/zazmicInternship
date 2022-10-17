import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from './contents-sidebar/sidebar.module';
import { ContentsRoutingModule } from './contents-routing.module';
import { ContensComponent } from './contens.component';
import { RouterModule } from '@angular/router';
import { ArticlesModule } from './articles/articles.module';

import {MatNativeDateModule} from '@angular/material/core';


@NgModule({
  declarations: [ContensComponent],
  imports: [
    CommonModule,
    SidebarModule,
    ContentsRoutingModule,
    RouterModule,
    ArticlesModule,
    MatNativeDateModule,
  ]
})
export class ContentsModule { }
