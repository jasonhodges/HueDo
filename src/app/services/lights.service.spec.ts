import { TestBed, inject } from '@angular/core/testing';

import { LightsService } from './lights.service';

describe('LightsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LightsService]
    });
  });

  it('should ...', inject([LightsService], (service: LightsService) => {
    expect(service).toBeTruthy();
  }));
});
