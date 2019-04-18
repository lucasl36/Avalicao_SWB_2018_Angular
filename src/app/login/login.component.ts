import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	loginForm: FormGroup;
	submitted = false;

	constructor( private authService : AuthenticationService, private formBuilder: FormBuilder, private router: Router) { 
		this.loginForm = this.formBuilder.group({
			username: ['', [Validators.required, Validators.maxLength(225)]],
			password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(225)]]
		})        
	}

	get f() { return this.loginForm.controls; }

	validateCredentials() {
		this.submitted = true;
		if(this.loginForm.invalid)
		{
			return;
		}
		var formData = new FormData();
		formData.append('login', this.loginForm.get('username').value);
		formData.append('password', this.loginForm.get('password').value);
		this.authService.login(formData)
		.pipe(first())
		.subscribe(data => { 
			this.router.navigate(['/']); }, 
			error => { console.log(error); 
			});
	}

	ngOnInit() {
		this.authService.logout();
		console.log(this.authService.isUserLogged());
	}

}
