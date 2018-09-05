import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { NihDataService } from './nih-data.service';
import {SERVICE_BASE_URL} from './constants';

describe('NihDataService', () => {
  let service: NihDataService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [NihDataService]
    });

    service = TestBed.get(NihDataService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should GET USers from API', () => {
    const dummyusers = [
      {"id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz"},
      {"id": 2,
      "name": "Graham",
      "username": "Brt",
      "email": "Sere@apil.biz"}
    ];

    service.getUsers().subscribe(users => {
      expect(users).toEqual(dummyusers);
    });

    const request = httpMock.expectOne(`${SERVICE_BASE_URL}/users`);
    expect(request.request.method).toBe('GET');

    request.flush(dummyusers);


  });

  
});
