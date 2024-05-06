import { TestBed } from '@angular/core/testing';

import { JugadorServService } from './jugador-serv.service';

describe('JugadorServService', () => {
  let service: JugadorServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JugadorServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
