import {Component, DoCheck, OnInit} from '@angular/core';
import {environment} from '../../environment/environment';

@Component({
  selector: '.app-header-comp',
  templateUrl: './header-comp.component.html',
  styleUrls: ['./header-comp.component.css']
})
export class HeaderCompComponent implements OnInit, DoCheck {

  constructor() { }

  env = environment;
  user = this.env.user;
  onlineStatus = this.env.onlineStatus;
  profileimage = this.env.profileimage;
  profile = this.env.profile;

  noInfo = 0;

  ngDoCheck() {
    this.user = this.env.user;
    this.onlineStatus = this.env.onlineStatus;
    this.profileimage = this.env.profileimage;
    this.profile = this.env.profile;
  }

  ngOnInit() {
  }

}
