import { Component } from '@angular/core';
import {Platform} from "@ionic/angular";
import {SplashScreenWeb} from "@capacitor/splash-screen/dist/esm/web";

import {SplashScreen, SplashScreenPlugin} from '@capacitor/splash-screen';
import {StatusBarPlugin} from "@capacitor/status-bar";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {


  constructor(
   ) {

  }

  /*initializeApp(){
  this.platform.ready().then(()=>{
    this.splashScreen.hide();
    this.login();
  })*/




}
