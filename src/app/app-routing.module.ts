import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DemoCompComponent} from './test-comp/demo-comp/demo-comp.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DemoCompComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
