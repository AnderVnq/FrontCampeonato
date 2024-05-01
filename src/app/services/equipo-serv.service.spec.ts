import { TestBed } from '@angular/core/testing';

import { EquipoServService } from './equipo-serv.service';

describe('EquipoServService', () => {
  let service: EquipoServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EquipoServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
