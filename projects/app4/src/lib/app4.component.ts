import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'lib-app4',
  template: `
  <div style="background-color: blanchedalmond;height: 50px;">Welcome</div>
  <div class="lib-app4">
    <router-outlet></router-outlet>
  </div>
  `,
  styles: [
  ]
})
export class App4Component implements OnInit, OnDestroy {

  constructor() { }

  ngOnDestroy(): void {
    console.log("App4Component ngOnDestroy");
  }

  ngOnInit(): void {
  }

}
