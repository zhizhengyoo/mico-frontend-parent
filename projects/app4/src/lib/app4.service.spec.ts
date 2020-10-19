import { TestBed } from '@angular/core/testing';

import { App4Service } from './app4.service';

describe('App4Service', () => {
  let service: App4Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(App4Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
