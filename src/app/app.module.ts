import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ContensComponent } from './contents/contens.component';


import { ArticleTagsComponent } from './shared/article/article-tags/article-tags.component';
import { SppCardComponent } from './shared/ui/spp-card/spp-card.component';
import { SppIconComponent } from './shared/ui/spp-icon/spp-icon.component';
import { SppMenuItemComponent } from './shared/ui/spp-menu-item/spp-menu-item.component';
import { SppPageLayoutComponent } from './shared/ui/spp-page-layout/spp-page-layout.component';
import { SppSidebarSectionComponent } from './shared/ui/spp-sidebar-section/spp-sidebar-section.component';
import { SppUseComponent } from './shared/ui/spp-use/spp-use.component';
import { SppViewsComponent } from './shared/ui/spp-views/spp-views.component';


import { CommonModule } from '@angular/common';
import { SidebarModule } from './contents/contents-sidebar/sidebar.module';
import { ArticlesModule } from './contents/articles/articles.module';








@NgModule({
  declarations: [
    AppComponent,
    ContensComponent,
    ArticleTagsComponent,
    SppCardComponent,
    SppIconComponent,
    SppMenuItemComponent,
    SppPageLayoutComponent,
    SppSidebarSectionComponent,
    SppUseComponent,
    SppViewsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    SidebarModule,
    ArticlesModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
