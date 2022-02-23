import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
} from '@angular/common/http/testing';
import { OrganismsService } from './organisms.service';

describe('OrganismsService', () => {
  let service: OrganismsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(OrganismsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
