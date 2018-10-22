import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { Content } from 'ionic-angular';

import { MenuController } from 'ionic-angular';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  @ViewChild(Content) content: Content;

  rootPage: any = HomePage;
  

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    public menuCtrl: MenuController) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  // menuClosed() {
  //   console.log("Menu closed");

  //   // Enable the following line to repro the ionClose movie
    
  //   //this.content.scrollToTop();

  // }

  // menuOpened() {
  //   console.log("Menu opened");

  //   // Enable the following line to repro the ionOpen movie

  //   //this.content.scrollToTop();
  // }
  
  close() {

    console.log("Closing menu...");

    setTimeout(() => { 
      console.log("Scrolling to top...");
      this.content.scrollToTop(0); 
      });

    this.menuCtrl.close();

    console.log("Menu closed");
  }

}
