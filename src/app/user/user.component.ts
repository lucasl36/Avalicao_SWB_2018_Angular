import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UserService } from '../user.service';
import { AuthenticationService } from '../authentication.service';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {


	users = [];

	filterForm: FormGroup;
	ffSubmitted = false;
	createForm: FormGroup;
	cfSubmitted = false;
	updateForm: FormGroup;
	ufSubmitted = false;

	constructor(
	            private service: UserService,
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
			login: [''], 
		});
		this.createForm = this.updateForm = this.formBuilder.group({
			name: ['', [Validators.required, Validators.maxLength(125)]],
			login: ['', [Validators.required, Validators.maxLength(225)]], 
			password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(255)]],
		});
	}

	get ff() { return this.filterForm.controls };
	get cf() { return this.createForm.controls };
	get uf() { return this.updateForm.controls };

	filterUser() {
		this.ffSubmitted = true;
		if(this.filterForm.invalid)
		{
			return;
		}
		var formData = new FormData();
		formData.append('name', this.filterForm.get('name').value);
		formData.append('login', this.filterForm.get('login').value);
	}

	createUser() {
		this.cfSubmitted = true;
		if(this.createForm.invalid)
		{
			return;
		}
		var formData = new FormData();
		formData.append('name', this.filterForm.get('name').value);
		formData.append('login', this.filterForm.get('login').value);
		formData.append('password', this.filterForm.get('password').value);
	}

	updateUser() {
		this.ufSubmitted = true;
		if(this.updateForm.invalid)
		{
			return;
		}
		var formData = new FormData();
		formData.append('name', this.filterForm.get('name').value);
		formData.append('login', this.filterForm.get('login').value);
		formData.append('password', this.filterForm.get('password').value);
	}


}
