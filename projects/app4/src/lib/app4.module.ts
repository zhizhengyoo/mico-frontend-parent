import { NgModule } from '@angular/core';
import { App4Component } from './app4.component';
import { HomeComponent } from './home/home.component';
import { Page1Component } from './page1/page1.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { BrowserModule } from '@angular/platform-browser';
import { App4RoutingModule } from './app4-routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [App4Component, HomeComponent, Page1Component],
  imports: [
    BrowserModule,
    NgZorroAntdModule,
    App4RoutingModule,
  ],
  providers   : [
    { provide: NZ_I18N, useValue: zh_CN }
  ],
  exports: [App4Component, HomeComponent, Page1Component],
  bootstrap: [App4Component]
})
export class App4Module { }
