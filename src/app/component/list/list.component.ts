import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {

  data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.'
  ];

  constructor(
    private router: Router,
  ) { }

  ngOnDestroy(): void {
    console.log('ListComponent ngOnDestroy')
  }

  ngOnInit(): void {
  }

  tableChange(): void {
    this.router.navigate(['details']);
  }
}
