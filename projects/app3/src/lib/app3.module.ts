import { NgModule } from '@angular/core';
import { App3Component } from './app3.component';
import { TestComponent } from './test/test.component';



@NgModule({
  declarations: [App3Component, TestComponent],
  imports: [
  ],
  exports: [App3Component, TestComponent]
})
export class App3Module { }
