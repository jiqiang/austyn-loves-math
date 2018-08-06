import { TestBed, inject } from '@angular/core/testing';

import { ArithmeticService } from './arithmetic.service';

describe('ArithmeticService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArithmeticService]
    });
  });

  it('should be created', inject([ArithmeticService], (service: ArithmeticService) => {
    expect(service).toBeTruthy();
  }));
});
