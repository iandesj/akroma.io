import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
    private ref: ChangeDetectorRef,
  ) { }

  ngOnInit() {
    this.address$ = this.store.select(getSelectedAddress);
    this.pageAddressTransactions({ page: 1 });
    // this.address$.subscribe(
    //   (response: Address) => {
    //     this.pageAddressTransactions({ page: 1 });
    //   },
    // ).unsubscribe();
  }

  pageAddressTransactions(event: any) {
    this.addressesService.getAddressTransactions(this.route.snapshot.params.addressHash, event.page - 1)
    .subscribe((result: AddressTransactions) => {
      this.addressTransactions = { ...result };
      this.currentPage = result.currentPage + 1;
      this.ref.markForCheck();
    });
  }
}
