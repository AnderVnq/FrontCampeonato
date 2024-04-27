import { TestBed } from '@angular/core/testing';

import { CampeonatoServService } from './campeonato-serv.service';

describe('CampeonatoServService', () => {
  let service: CampeonatoServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CampeonatoServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
