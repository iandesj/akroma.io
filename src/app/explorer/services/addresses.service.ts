import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../../environments/environment';
import { Address } from '../models/address';
import { AddressTransactions } from '../models/address-transactions';
import { Transaction } from '../models/transaction';

@Injectable()
export class AddressesService {
  constructor(
    private http: HttpClient,
  ) { }

  getAddress(addressHash: string): Observable<Address> {
    return this.http
      .get<Address>(`${environment.apiUrl}/addresses/${addressHash}`);
  }

  getAddressTransactions(address: string, page: number = 0): Observable<AddressTransactions> {
    const params = { params: new HttpParams().set('page', page.toString()) };
    return this.http
      .get<AddressTransactions>(`${environment.apiUrl}/addresses/${address}/transactions`, params);
  }

}
