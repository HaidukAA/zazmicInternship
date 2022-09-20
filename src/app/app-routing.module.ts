import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { AuthService } from './auth/services/auth.service';
import { AuthGuard } from './core/guards/auth.guard';
import { ErrorComponent } from './error/error.component';

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'app',
    loadChildren: () => import('./contents/contents.module').then(m => m.ContentsModule),
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: ErrorComponent,
  },
  
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  bootstrap: [AppComponent],
  providers: [AuthService, AuthGuard],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
