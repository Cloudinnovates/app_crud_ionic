import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home View Page',
      url: '/home-view',
      icon: 'home'
    },
    {
      title: 'Category Add Page',
      url: '/categories-add',
      icon: 'add'
    },
    {
      title: 'Category List Page',
      url: '/categories-list',
      icon: 'list'
    },
    {
      title: 'Client Add Page',
      url: '/clients-add',
      icon: 'add'
    },
    {
      title: 'Client List Page',
      url: '/clients-list',
      icon: 'list'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
