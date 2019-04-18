import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class AddressService {

	baseUrl = 'http://localhost/avalswb/web';
	createUrl = this.baseUrl+'/address/create';
	updateUrl = this.baseUrl+'/address/update';
	deleteUrl = this.baseUrl+'/address/delete';
	listUrl = this.baseUrl+'/address/list';


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
