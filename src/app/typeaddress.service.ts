import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class TypeaddressService {

	baseUrl = 'http://localhost/avalswb/web';
	createUrl = this.baseUrl+'/type-address/create';
	updateUrl = this.baseUrl+'/type-address/update';
	deleteUrl = this.baseUrl+'/type-address/delete';
	listUrl = this.baseUrl+'/type-address/list';

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
