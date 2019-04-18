import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

	appname: string = "AvalSWB";

	constructor( private authService : AuthenticationService ) { }

	isUserLogged()
	{
		return this.authService.isUserLogged();
	}

	ngOnInit() {
	}

}
