import {Component, DoCheck, OnInit} from '@angular/core';
import { environment } from '../environment/environment';
@Component({
  selector: '.app-nav-comp',
  templateUrl: './nav-comp.component.html',
  styleUrls: ['./nav-comp.component.css']
})
export class NavCompComponent implements OnInit, DoCheck {

  env = environment;
  user = this.env.user;
  onlineStatus = this.env.onlineStatus;
  profileimage = this.env.profileimage;

  ngDoCheck() {
    this.user = this.env.user;
    this.onlineStatus = this.env.onlineStatus;
    this.profileimage = this.env.profileimage;
  }

  constructor() { }

  ngOnInit() {
  }

}
