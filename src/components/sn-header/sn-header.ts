import { Component, Input } from '@angular/core';
import { MenuController } from 'ionic-angular';

/**
 * Generated class for the SnHeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'sn-header',
  templateUrl: 'sn-header.html'
})
export class SnHeaderComponent {

  @Input() title = '';
  @Input() displayMenu = false;

  constructor(private menuCtrl:MenuController) {
    console.log(this.title);
    console.log('Hello SnHeaderComponent Component');
  }

  toggleMenu(){
    this.menuCtrl.toggle();
  }

}
