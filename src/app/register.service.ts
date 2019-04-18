import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
// import { FormControl } from '@angular/forms';

@Injectable({
	providedIn: 'root'
})
export class RegisterService {

	requestUrl = 'http://localhost/avalswb/web/user/create';

	constructor( private http: HttpClient ) { }

	createNewUser(formData: FormData) {
		return this.http.post<any>(this.requestUrl, formData);
	}

}
