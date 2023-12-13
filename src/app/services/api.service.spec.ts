import 'jest';

import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler]
    });
    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get an instance of Http Headers', () => {
    //@ts-expect-error
    const spyServiceGetHeaders = jest.spyOn(service, 'getHeaders');
    //@ts-expect-error
    const headersResult = service.getHeaders();
    expect(spyServiceGetHeaders).toHaveBeenCalled();
    expect(headersResult).toBeInstanceOf(HttpHeaders);;
  });
});
