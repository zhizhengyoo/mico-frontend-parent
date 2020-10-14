import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsComponent } from './component/details/details.component';
import { ListComponent } from './component/list/list.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';

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
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  providers   : [
    { provide: NZ_I18N, useValue: zh_CN }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
