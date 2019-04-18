import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class AuthenticationService {

	loginUrl = 'http://localhost/avalswb/web/user/validate';

	constructor( private http: HttpClient ) { }

	login(formData: FormData) {
		return this.http.post<any>(this.loginUrl, formData)
		.pipe(map(user => {
			// login successful if there's a user in the response
			if (user) {
				// store user details and basic auth credentials in local storage 
				// to keep user logged in between page refreshes
				user.authdata = window.btoa(formData.get('username') + ':' + formData.get('password'));
				localStorage.setItem('currentUser', JSON.stringify(user));
			}
			return user;
		}));
	}

	logout() {
		// remove user from local storage to log user out
		localStorage.removeItem('currentUser');
	}

	isUserLogged() {
		var currentUser = localStorage.getItem('currentUser');
		if(!currentUser)
		{
			return false;
		}
		return true;
	}

}
