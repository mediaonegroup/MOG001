import { MenuShiftType } from '../pages/menu/shift-transition';
import { Component, ViewChild } from '@angular/core';
import { MenuController, AlertController, Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { NewsPage } from '../pages/news/news';
import { SplashPage } from '../pages/splash/splash';
import { PostPage } from '../pages/post/post';
import { CouponsPage } from '../pages/coupons/coupons';
import { InfosPage } from '../pages/infos/infos';
import { SponsorsPage } from '../pages/sponsors/sponsors';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { PlayerPage } from '../pages/player/player';
import { OneSignal } from '@ionic-native/onesignal';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(
      public platform: Platform, 
      public statusBar: StatusBar, 
      public splashScreen: SplashScreen, 
      private iab: InAppBrowser, 
      private alertCtrl: AlertController,
      private oneSignal: OneSignal) {

            this.initializeApp();
      
              this.platform.ready().then(() => {
                  
                        this.oneSignal.startInit('a0a8ed74-488f-497b-b5fc-0810ed1690e3', '428241288967');

                        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

                        this.oneSignal.handleNotificationReceived().subscribe(() => {
                         // do something when notification is received
                        });

                        this.oneSignal.handleNotificationOpened().subscribe(() => {
                          // do something when a notification is opened
                        });

                        this.oneSignal.endInit();
                  
                  
              // Okay, so the platform is ready and our plugins are available.
              // Here you can do any higher level native things you might need.
            if (this.platform.is('cordova')) {
                  
                  this.statusBar.styleDefault();
                this.splashScreen.hide();
            }
            });
      
      
            localStorage.setItem("player", "stop");
            // used for an example of ngFor and navigation
            this.pages = [
              { title: 'Home', component: HomePage },
              { title: 'Actualité', component: NewsPage },
              { title: 'Informations', component: InfosPage },
              { title: 'Partenaires', component: SponsorsPage }
            ];

    }

  initializeApp() {
      
      
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
     // this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString("#32bacd");
        //this.statusBar.overlaysWebView(true)
      this.splashScreen.hide();
    });
            MenuController.registerType('shift', MenuShiftType);
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
   
     openInstagram() {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
        const browser = this.iab.create('https://www.instagram.com/glissenville/?hl=fr','_blank',{location:'yes', hardwareback: 'no'}); 
  }
   

   
}
