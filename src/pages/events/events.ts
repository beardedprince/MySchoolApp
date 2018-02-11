import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home'
import {PostpagePage} from '../postpage/postpage'

import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the EventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {
  
  cards: any;
  category: string = 'gear';

  url: string = 'http://www.lasposug.com.ng/wp-json/wp/v2/posts';
	items: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {
    
  }

  ionViewDidLoad() {
    this.http.get( this.url )
    .map(res => res.json())
    .subscribe(data => {
      // we've got back the raw data, now generate the core schedule data
      // and save the data for later reference
      this.items = data;
    });
  }


  Skip(){
    this.navCtrl.setRoot(HomePage)
  }


  itemTapped(event, item) {
		this.navCtrl.setRoot(PostpagePage, {
		  item: item
		});
  }
  
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
}
