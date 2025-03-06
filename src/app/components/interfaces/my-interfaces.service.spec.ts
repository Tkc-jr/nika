import { TestBed } from '@angular/core/testing';

import { MyInterfacesService } from './my-interfaces.service';

describe('MyInterfacesService', () => {
  let service: MyInterfacesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyInterfacesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
