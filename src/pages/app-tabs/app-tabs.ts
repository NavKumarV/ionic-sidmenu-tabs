import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-app-tabs',
  templateUrl: 'app-tabs.html',
})
export class AppTabsPage {

  tab1Root = 'CoursesPage';
  tab2Root = 'LibraryPage';
  tab3Root = 'ProfilePage';

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private event: Events) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppTabsPage');
    this.event.subscribe('goFromTabs', data => {
      console.log(data);
      this.navCtrl.push(data);
    });
  }

}
