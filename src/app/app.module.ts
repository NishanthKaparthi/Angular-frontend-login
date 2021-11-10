import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { MenuComponent } from './menu/menu.component';
import { HelloWorldService } from './hello-world.service';
import { LoginComponent } from './login/login.component';
import { HttpInterceptorService } from './http-interceptor.service';
import { LogoutComponent } from './logout/logout.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    MenuComponent,
    LoginComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorService,
    multi: true},HelloWorldService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
