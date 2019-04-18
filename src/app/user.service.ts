import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class UserService {

	baseUrl = 'http://localhost/avalswb/web';
	createUrl = this.baseUrl+'/user/create';
	updateUrl = this.baseUrl+'/user/update';
	deleteUrl = this.baseUrl+'/user/delete';
	listUrl = this.baseUrl+'/user/list';

	constructor( private http: HttpClient ) { }

	filter(formData: FormData)  {

	}

	create(formData: FormData) {

	}

	update(formData: FormData) {

	}

	delete(id: number) {

	}

}
