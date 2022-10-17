import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';

import { HelloBlockComponent } from './components/hello-block/hello-block.component';
import { LoginComponent } from './components/login/login.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AuthRoutingModule } from './auth-routing.module';
import { LogoModule } from '../shared/logo/logo.module';
import { ButtonModule } from '../shared/button/button.module';
import { InputModule } from '../shared/input/input.module';

@NgModule({
  declarations: [
    HelloBlockComponent,
    LoginComponent,
    NavigationComponent,
    RegistrationComponent,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    AuthRoutingModule,
    LogoModule,
    ButtonModule,
    InputModule,
  ],
  exports: [
    HelloBlockComponent,
    LoginComponent,
    NavigationComponent,
    RegistrationComponent,
    AuthRoutingModule,
  ]
})
export class AuthModule { }
