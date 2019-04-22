import { Component, OnInit } from '@angular/core';
import {environment} from '../../environment/environment';



@Component({
  selector: '.app-header-optiondropdown-comp',
  templateUrl: './header-optiondropdown-comp.component.html',
  styleUrls: ['./header-optiondropdown-comp.component.css']
})
export class HeaderOptiondropdownCompComponent implements OnInit {

  env = environment;
  option = 'off';
  user = 'online';

  constructor() { }

  ngOnInit() {

    if (sessionStorage.getItem('dark') !== undefined && sessionStorage.getItem('dark') === 'true') {
      $('body').addClass('dark');
      this.option = 'on';
    } else {
      $('body').removeClass('dark');
      this.option = 'off';
    }

    const date = new Date();
    if (date.getHours() < 18 && date.getHours() > 7) {
      $('body').removeClass('dark');
    } else {
      $('body').addClass('dark');
    }
  }


  changeMod() {

    if (this.option === 'off') {
      this.option = 'on';
      $('body').toggleClass('dark');
      sessionStorage.setItem('dark', 'true');

    } else {
      this.option = 'off';
      $('body').toggleClass('dark');
      sessionStorage.setItem('dark', 'false');

    }
  }

  chageOnlinestate() {
    if (this.env.onlineStatus === 'true') {
      this.env.onlineStatus = 'false';
      this.user = 'offline';
    } else {
      this.env.onlineStatus = 'true';
      this.user = 'online';
    }
  }

}
