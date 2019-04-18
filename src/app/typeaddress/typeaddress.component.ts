import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { TypeaddressService } from '../typeaddress.service';
import { AuthenticationService } from '../authentication.service';

@Component({
	selector: 'app-typeaddress',
	templateUrl: './typeaddress.component.html',
	styleUrls: ['./typeaddress.component.scss']
})
export class TypeaddressComponent implements OnInit {

	typeaddresses = [];

	filterForm: FormGroup;
	ffSubmitted = false;
	createForm: FormGroup;
	cfSubmitted = false;
	updateForm: FormGroup;
	ufSubmitted = false;

	constructor(
	            private service: TypeaddressService,
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
			name: [''], active: ['']
		});
		this.createForm = this.updateForm = this.formBuilder.group({
			name: ['', [Validators.required, Validators.maxLength(125)]], active: ['']
		});
	}

	get ff() { return this.filterForm.controls };
	get cf() { return this.createForm.controls };
	get uf() { return this.updateForm.controls };

	filterTypeAddresses() {
		this.ffSubmitted = true;
		if(this.filterForm.invalid)
		{
			return;
		}
		var formData = new FormData();
		formData.append('name', this.filterForm.get('name').value);
		formData.append('active', this.filterForm.get('active').value);

	}

	createTypeAddress() {
		this.cfSubmitted = true;
		if(this.createForm.invalid)
		{
			return;
		}
		var formData = new FormData();
		formData.append('name', this.createForm.get('name').value);
		formData.append('active', this.createForm.get('active').value);

	}

	updateTypeAddress() {
		this.ufSubmitted = true;
		if(this.updateForm.invalid)
		{
			return;
		}
		var formData = new FormData();
		formData.append('id', this.updateForm.get('id').value);
		formData.append('name', this.updateForm.get('name').value);
		formData.append('active', this.updateForm.get('active').value);
	}

}
