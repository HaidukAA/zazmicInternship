import { enableProdMode, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentsSidebarComponent } from './contents-sidebar.component';
import { RouterModule } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { ActionsComponent } from './actions/actions.component';
import { CategoriesComponent } from './categories/categories.component';
import { FiltersComponent } from './filters/filters.component';
import { ContentsSidebarMenuComponent } from './contents-sidebar-menu/contents-sidebar-menu.component';
import { ContentsSidebarTopComponent } from './contents-sidebar-top/contents-sidebar-top.component';
import { ContentsSidebarUserComponent } from './contents-sidebar-user/contents-sidebar-user.component';
import { DroprightComponent } from './filters/droprightFilterTags/dropright.component';
import {MatNativeDateModule} from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button'
import { DroprightFilterAuthorComponent } from './filters/droprightFilterAuthor/droprightFilterAuthor.component';

@NgModule({
  declarations: [
    ContentsSidebarComponent,
    ViewComponent,
    ActionsComponent,
    CategoriesComponent,
    FiltersComponent,
    ContentsSidebarMenuComponent,
    ContentsSidebarTopComponent,
    ContentsSidebarUserComponent,
    DroprightComponent,
    DroprightFilterAuthorComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  exports: [
    ContentsSidebarComponent,
  ],
  
})
export class SidebarModule { }
