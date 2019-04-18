import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; 
import { ReactiveFormsModule } from '@angular/forms';

import { NavComponent } from './nav/nav.component';
import { PeopleComponent } from './people/people.component';
import { AddressComponent } from './address/address.component';
import { UserComponent } from './user/user.component';
import { TypeaddressComponent } from './typeaddress/typeaddress.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NumberOnlyDirective  } from './numbers.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PeopleComponent,
    AddressComponent,
    UserComponent,
    TypeaddressComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NumberOnlyDirective 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
