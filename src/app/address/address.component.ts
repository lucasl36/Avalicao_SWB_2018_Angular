import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AddressService } from '../address.service';
import { AuthenticationService } from '../authentication.service';


@Component({
	selector: 'app-address',
	templateUrl: './address.component.html',
	styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

	addresses = [];

	filterForm: FormGroup;
	ffSubmitted = false;
	createForm: FormGroup;
	cfSubmitted = false;
	updateForm: FormGroup;
	ufSubmitted = false;

	constructor(
	            private service: AddressService,
	            private authService: AuthenticationService,
	            private formBuilder: FormBuilder,
	            private router: Router,
	            ) { }

	ngOnInit() {
		if(!this.authService.isUserLogged())
		{
			this.router.navigate(['/login']);
		}
		this.filterForm = this.formBuilder.group({
			name: [''], 
			active: [''],
			street_name: [''],
			number: [''], 
			description: [''],
			complement: [''],
			id_type_address: [''],
		});
		this.createForm = this.updateForm = this.formBuilder.group({
			name: ['', [Validators.required, Validators.maxLength(125)]], 
			active: ['', [Validators.required]],
			street_name: ['', [Validators.required, Validators.maxLength(200)]],
			number: ['', [Validators.required, Validators.min(1)]], 
			description: ['', [Validators.required, Validators.maxLength(500)]],
			complement: ['', [Validators.maxLength(50)]],
			id_type_address: ['', [Validators.required]],
		});
	}

	get ff() { return this.filterForm.controls };
	get cf() { return this.createForm.controls };
	get uf() { return this.updateForm.controls };

	filterAddresses() {
		this.ffSubmitted = true;
		if(this.filterForm.invalid)
		{
			return;
		}
		var formData = new FormData();
		formData.append('name', this.filterForm.get('name').value);
		formData.append('active', this.filterForm.get('active').value);
		formData.append('street_name', this.filterForm.get('street_name').value);
		formData.append('number', this.filterForm.get('number').value);
		formData.append('description', this.filterForm.get('description').value);
		formData.append('complement', this.filterForm.get('complement').value);
		formData.append('id_type_address', this.filterForm.get('id_type_address').value);

	}

	createAddress() {
		this.cfSubmitted = true;
		if(this.createForm.invalid)
		{
			return;
		}
		var formData = new FormData();
		formData.append('name', this.filterForm.get('name').value);
		formData.append('active', this.filterForm.get('active').value);
		formData.append('street_name', this.filterForm.get('street_name').value);
		formData.append('number', this.filterForm.get('number').value);
		formData.append('description', this.filterForm.get('description').value);
		formData.append('complement', this.filterForm.get('complement').value);
		formData.append('id_type_address', this.filterForm.get('id_type_address').value);

	}

	updateAddress() {
		this.ufSubmitted = true;
		if(this.updateForm.invalid)
		{
			return;
		}
		var formData = new FormData();
		formData.append('name', this.filterForm.get('name').value);
		formData.append('active', this.filterForm.get('active').value);
		formData.append('street_name', this.filterForm.get('street_name').value);
		formData.append('number', this.filterForm.get('number').value);
		formData.append('description', this.filterForm.get('description').value);
		formData.append('complement', this.filterForm.get('complement').value);
		formData.append('id_type_address', this.filterForm.get('id_type_address').value);
	}

}
