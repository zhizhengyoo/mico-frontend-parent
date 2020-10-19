import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsComponent } from './component/details/details.component';
import { ListComponent } from './component/list/list.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
// import { App3Module } from '../../projects/app3/src/lib/app3.module';
import { App3Module } from 'micro-app3';
// import { AppModule as App2Module} from 'micro-app2';
import { App4Module } from 'micro-app4';
import { RouteReuseStrategy } from '@angular/router';
import { AppReuseStrategy } from './core/app-reuse-strategy';
@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    App3Module,
    // App2Module,
    App4Module,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  providers   : [
    { provide: RouteReuseStrategy, useClass: AppReuseStrategy },
    { provide: NZ_I18N, useValue: zh_CN }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
