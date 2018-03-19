import { TestBed, inject } from '@angular/core/testing';

import { VillanService } from './villan.service';

describe('VillanService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VillanService]
    });
  });

  it('should be created', inject([VillanService], (service: VillanService) => {
    expect(service).toBeTruthy();
  }));
});
