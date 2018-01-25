import { LoginModule } from './login/login.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/auth.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
