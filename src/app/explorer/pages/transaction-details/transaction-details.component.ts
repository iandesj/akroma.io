import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Network } from '../../models/network';
import { Transaction } from '../../models/transaction';
import { NetworkService } from '../../services/network.service';
import { State } from '../../state/reducers';
import { getSelectedTransaction } from '../../state/selectors/transactions.selectors';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionDetailsComponent implements OnInit {
  transaction$: Observable<Transaction>;
  networkStats$: Observable<Network>;

  constructor(
    private store: Store<State>,
    private networkService: NetworkService,
  ) { }

  ngOnInit() {
    this.transaction$ = this.store.select(getSelectedTransaction);
    this.networkStats$ = this.networkService.getNetworkStats();
  }
}
