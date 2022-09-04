import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from './contents-sidebar/sidebar.module';
import { ArticlesModule } from './articles/articles.module';
import { ContentsRoutingModule } from './contents-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ArticlesModule,
    SidebarModule,
    ContentsRoutingModule
  ]
})
export class ContentsModule { }
