import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { HomePage } from '../home/home.page';
import { AuthService } from '../../services/auth.service';
import { SignupPage } from '../signup/signup.page'
import { Router } from '@angular/router'; 



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginForm: FormGroup;
	loginError: string;

	constructor(
		private navCtrl: NavController,
    private auth: AuthService,
    private router: Router,
		fb: FormBuilder
	) {
		this.loginForm = fb.group({
			email: ['', Validators.compose([Validators.required, Validators.email])],
			password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
		});
  }
  login() {
		let data = this.loginForm.value;

		if (!data.email) {
			return;
		}

		let credentials = {
			email: data.email,
			password: data.password
		};
		this.auth.signInWithEmail(credentials)
			.then(
				() => this.navCtrl.navigateRoot('/home'),
				error => this.loginError = error.message
			);
  }
  signup(){
    this.router.navigateByUrl('/signup');
  }
}
