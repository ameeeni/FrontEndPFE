import { TestBed } from '@angular/core/testing';

import { ConsulterMesComptesService } from './consulter-mes-comptes.service';

describe('ConsulterMesComptesService', () => {
  let service: ConsulterMesComptesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsulterMesComptesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
