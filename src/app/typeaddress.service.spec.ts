import { TestBed } from '@angular/core/testing';

import { TypeaddressService } from './typeaddress.service';

describe('TypeaddressService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TypeaddressService = TestBed.get(TypeaddressService);
    expect(service).toBeTruthy();
  });
});
