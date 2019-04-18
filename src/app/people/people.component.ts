import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { PeopleService } from '../people.service';
import { AuthenticationService } from '../authentication.service';


@Component({
	selector: 'app-people',
	templateUrl: './people.component.html',
	styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

	peoples = [];

	filterForm: FormGroup;
	ffSubmitted = false;
	createForm: FormGroup;
	cfSubmitted = false;
	updateForm: FormGroup;
	ufSubmitted = false;

	constructor(
	            private service: PeopleService,
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
			cpfcnpj: [''],
			rgie: [''],
			people_type: [''], 
			mail_address: [''],
			phone: [''],
			cell_phone: [''],
			birth: [''],
			employess_amount: [''],
		});
		this.createForm = this.updateForm = this.formBuilder.group({
			name: ['', [Validators.required, Validators.maxLength(125)]], 
			cpjcnpj: ['', [Validators.required, Validators.maxLength(15)]],
			rgie: ['', [Validators.required, Validators.maxLength(50)]],
			people_type: ['', [Validators.required]], 
			mail_address: ['', [Validators.required, Validators.maxLength(100)]],
			phone: ['', [Validators.required, Validators.maxLength(20)]],
			cell_phone: ['', [Validators.required, Validators.maxLength(20)]],
			birth: ['', [Validators.required]],
			employess_amount: ['', [Validators.required, Validators.min(1)]],
		});
	}

	get ff() { return this.filterForm.controls };
	get cf() { return this.createForm.controls };
	get uf() { return this.updateForm.controls };

	filterPeople() {
		this.ffSubmitted = true;
		if(this.filterForm.invalid)
		{
			return;
		}
		var formData = new FormData();
		formData.append('name', this.filterForm.get('name').value);
		formData.append('cpfcnpj', this.filterForm.get('cpfcnpj').value);
		formData.append('rgie', this.filterForm.get('rgie').value);
		formData.append('people_type', this.filterForm.get('people_type').value);
		formData.append('mail_address', this.filterForm.get('mail_address').value);
		formData.append('phone', this.filterForm.get('phone').value);
		formData.append('cell_phone', this.filterForm.get('cell_phone').value);
		formData.append('birth', this.filterForm.get('birth').value);
		formData.append('employess_amount', this.filterForm.get('employess_amount').value);

	}

	createPeople() {
		this.cfSubmitted = true;
		if(this.createForm.invalid)
		{
			return;
		}
		var formData = new FormData();
		formData.append('name', this.filterForm.get('name').value);
		formData.append('cpfcnpj', this.filterForm.get('cpfcnpj').value);
		formData.append('rgie', this.filterForm.get('rgie').value);
		formData.append('people_type', this.filterForm.get('people_type').value);
		formData.append('mail_address', this.filterForm.get('mail_address').value);
		formData.append('phone', this.filterForm.get('phone').value);
		formData.append('cell_phone', this.filterForm.get('cell_phone').value);
		formData.append('birth', this.filterForm.get('birth').value);
		formData.append('employess_amount', this.filterForm.get('employess_amount').value);

	}

	updatePeople() {
		this.ufSubmitted = true;
		if(this.updateForm.invalid)
		{
			return;
		}
		var formData = new FormData();
		formData.append('name', this.filterForm.get('name').value);
		formData.append('cpfcnpj', this.filterForm.get('cpfcnpj').value);
		formData.append('rgie', this.filterForm.get('rgie').value);
		formData.append('people_type', this.filterForm.get('people_type').value);
		formData.append('mail_address', this.filterForm.get('mail_address').value);
		formData.append('phone', this.filterForm.get('phone').value);
		formData.append('cell_phone', this.filterForm.get('cell_phone').value);
		formData.append('birth', this.filterForm.get('birth').value);
		formData.append('employess_amount', this.filterForm.get('employess_amount').value);
	}

}
