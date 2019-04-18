import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class PeopleService {

	baseUrl = 'http://localhost/avalswb/web';
	createUrl = this.baseUrl+'/people/create';
	updateUrl = this.baseUrl+'/people/update';
	deleteUrl = this.baseUrl+'/people/delete';
	listUrl = this.baseUrl+'/people/list';

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
