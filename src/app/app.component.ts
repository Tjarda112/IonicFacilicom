import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LoginPage } from '../app/login/login.page';
import { AuthService } from '../services/auth.service';


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
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private auth: AuthService,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
      this.rootPage = LoginPage;
  }
}
