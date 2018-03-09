import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  addressTransactions: AddressTransactions;
  currentPage = 1;

  constructor(
    private route: ActivatedRoute,
    private store: Store<State>,
    private addressesService: AddressesService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.address$ = this.store.select(getSelectedAddress);
      this.pageAddressTransactions({ init: true, page: 1 });
    });
  }

  pageAddressTransactions(event: any) {
    // guard to prevent excess firing
    if (this.currentPage === event.page && !event.init) {
      return;
    }
    this.addressTransactions$ = this.addressesService.getAddressTransactions(this.route.snapshot.params.addressHash, event.page - 1);
    this.currentPage = event.page;
  }
}
