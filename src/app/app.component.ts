import { Component, ViewChild } from '@angular/core';

import { Platform,MenuController,NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LoginPage } from '../app/login/login.page';
import { AuthService } from '../services/auth.service';
import { HomePage } from '../app/home/home.page';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  rootPage;

  public appMenu = [
    {title: 'Home', url: '/home', icon: 'list'},
    {title: 'Bestanden', url: '/upload', icon: 'add'},
    {title: 'login', url: '/login', icon: 'trash'}


  ]
  @ViewChild(NavController) nav: NavController;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private auth: AuthService,
    private statusBar: StatusBar,
    private menu: MenuController,
    private router: Router,
    private navCtrl: NavController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
    });
  
    this.auth.afAuth.authState
      .subscribe(
        user => {
          if (user) {
            this.rootPage = HomePage;
          } else {
            this.rootPage = LoginPage;
          }
        },
        () => {
          this.rootPage = LoginPage;
        }
      );
  }
  login() {
    this.menu.close();
    this.auth.signOut();
    this.navCtrl.navigateRoot('/login')
  }
  logout() {
    this.menu.close();
    this.auth.signOut();
    this.navCtrl.navigateRoot('/home')

  } 
}
