import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { HomeComponent } from './home/home.component';
import { PeopleComponent } from './people/people.component';
import { TypeaddressComponent } from './typeaddress/typeaddress.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'address', component: AddressComponent },
	{ path: 'people', component: PeopleComponent },
	{ path: 'typeaddress', component: TypeaddressComponent },
	{ path: 'user', component: UserComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
