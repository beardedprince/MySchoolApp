import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about';

import { ExcoPage } from '../exco/exco';
import { EventsPage } from '../events/events';
import { SettingPage } from '../setting/setting';
import { ContactPage } from '../contact/contact';
import {CheckerPage} from '../checker/checker'
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  


  constructor(public navCtrl: NavController, public navParams: NavParams)  {

        
  }


  
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    
  }

OpenExco(){
this.navCtrl.setRoot(ExcoPage)  
}
  
openSetting(){
  this.navCtrl.setRoot(SettingPage)
}

OpenContact(){
  this.navCtrl.setRoot(ContactPage)
}

openEvent(){
  this.navCtrl.setRoot(EventsPage)
}

OpenChecker(){
  this.navCtrl.setRoot(CheckerPage)  
  }

  OpenAbout(){
    this.navCtrl.setRoot(AboutPage)  
    }

}

