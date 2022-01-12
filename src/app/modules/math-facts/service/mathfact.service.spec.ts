import { TestBed } from '@angular/core/testing';

import { MathfactService } from './mathfact.service';

describe('MathfactService', () => {
  let service: MathfactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MathfactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
