import { TestBed } from '@angular/core/testing';

import { ClientProService } from './client-pro.service';

describe('ClientProService', () => {
  let service: ClientProService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientProService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
