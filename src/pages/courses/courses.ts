import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-courses',
  templateUrl: 'courses.html',
})
export class CoursesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private event:Events ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoursesPage');
  }

  goToContent(){
    this.navCtrl.push('ContentPage')
  }

  goToInfo(){
    this.event.publish('goFromTabs','InfoPage');
    // this.navCtrl.push('InfoPage')
  }

}
