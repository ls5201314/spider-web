import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class CollectorService {

  add() {
    return this.http.get(`${environment.baseUrl}/website`);
  }

  constructor(private http: HttpClient) {

  }
}
