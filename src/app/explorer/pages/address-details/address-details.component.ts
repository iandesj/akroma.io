import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Address } from '../../models/address';
import { AddressTransactions } from '../../models/address-transactions';
import { AddressesService } from '../../services/addresses.service';
import { State } from '../../state/reducers';
import { getSelectedAddress } from '../../state/selectors/addresses.selectors';

@Component({
  selector: 'app-address-details',
  templateUrl: './address-details.component.html',
  styleUrls: ['./address-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddressDetailsComponent implements OnInit {
  address$: Observable<Address>;
  addressTransactions$: Observable<AddressTransactions>;

  constructor(
    private store: Store<State>,
    private addressesService: AddressesService,
  ) { }

  ngOnInit() {
    this.address$ = this.store.select(getSelectedAddress);
    this.address$.subscribe(
      (response: Address) => {
        this.pageNextAddressTransactions(response.hash);
      },
    );
  }

  pageNextAddressTransactions(address: string, page: number = 0) {
    this.addressTransactions$ = this.addressesService.getAddressTransactions(address, page);
  }
}
