import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { UserService } from './services/user.service';
import { ListResourcesComponent } from './list-resources/list-resources.component';
import { ResourceService } from './services/resource.service';
import { NavbarComponent } from './navbar/navbar.component';
import { InterceptorService } from './services/interceptor.service';
import { HoverDirective } from './hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ListUsersComponent,
    ListResourcesComponent,
    NavbarComponent,
    HoverDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService, 
    UserService, 
    ResourceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
