import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../../environments/environment';
import { Network } from '../models/network';

@Injectable()
export class NetworkService {

  constructor(
    private http: HttpClient,
  ) { }

  getNetworkStats(): Observable<Network> {
    return this.http
      .get<Network>(`${environment.apiUrl}/network`);
  }
}
