import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../../environments/environment';
import { Price } from '../models/price';

@Injectable()
export class PriceService {

  constructor(
    private http: HttpClient,
  ) { }

  getCurrentPrice(): Observable<Price[]> {
    return this.http
      .get<Price[]>(`${environment.apiUrl}/prices`);
  }

}
