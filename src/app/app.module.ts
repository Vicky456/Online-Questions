import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavCompComponent } from './nav-comp/nav-comp.component';
import { HeaderCompComponent } from './ui-comp/header-comp/header-comp.component';
import { FooderCompComponent } from './ui-comp/fooder-comp/fooder-comp.component';
import { HeaderUserdropdownCompComponent } from './ui-comp/header-userdropdown-comp/header-userdropdown-comp.component';
import { HeaderInfodropdownCompComponent } from './ui-comp/header-infodropdown-comp/header-infodropdown-comp.component';
import { DemoCompComponent } from './test-comp/demo-comp/demo-comp.component';
import { HeaderOptiondropdownCompComponent } from './ui-comp/header-optiondropdown-comp/header-optiondropdown-comp.component';
import { HttpClientModule } from '@angular/common/http';
import { ModelCompComponent } from './nav-comp/model-comp/model-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    NavCompComponent,
    HeaderCompComponent,
    FooderCompComponent,
    HeaderUserdropdownCompComponent,
    HeaderInfodropdownCompComponent,
    DemoCompComponent,
    HeaderOptiondropdownCompComponent,
    ModelCompComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
