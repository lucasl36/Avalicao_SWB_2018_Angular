import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

	registerForm: FormGroup;
	submitted = false;

	constructor( private registerService : RegisterService, private formBuilder: FormBuilder, private router: Router ) { 
		this.registerForm = this.formBuilder.group({
			name: ['', [Validators.required, Validators.maxLength(125)]],
			username: ['', [Validators.required, Validators.maxLength(225)]],
			password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(225)]]
		})
	}

	get f() { return this.registerForm.controls; }

	createNewUser() {
		this.submitted = true;
		if(this.registerForm.invalid)
		{
			return;
		}
		var formData = new FormData();
		formData.append('name', this.registerForm.get('name').value);
		formData.append('login', this.registerForm.get('username').value);
		formData.append('password', this.registerForm.get('password').value);
		this.registerService.createNewUser(formData)
		// .pipe(first())
		.subscribe(
		           data => { this.router.navigate(['/login']); }, 
		           error => { console.log(error); 
		           });
	}

	ngOnInit() {
	}

}
