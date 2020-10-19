import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'lib-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit, OnDestroy {

  constructor() { }

  ngOnDestroy(): void {
    console.log('app4 page1 ngOnDestroy');
  }

  ngOnInit(): void {
  }

}
