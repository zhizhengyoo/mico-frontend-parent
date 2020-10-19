import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnDestroy(): void {
    console.log('DetailsComponent ngOnDestroy');
  }

  ngOnInit(): void {
  }

}
