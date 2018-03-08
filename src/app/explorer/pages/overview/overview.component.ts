import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Network } from '../../models/network';
import { Price } from '../../models/price';
import { NetworkService } from '../../services/network.service';
import { PriceService } from '../../services/price.service';


type Panel = 'blocks' | 'transactions';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverviewComponent implements OnInit {
  private activePanel: Panel = 'blocks';
  price$: Observable<Price[]>;
  network$: Observable<Network>;

  constructor(
    private priceService: PriceService,
    private networkService: NetworkService,
  ) { }

  ngOnInit() {
    this.price$ = this.priceService.getCurrentPrice();
    this.network$ = this.networkService.getNetworkStats();
  }

  get isBlocksPanelActive() {
    return this.activePanel === 'blocks';
  }

  get isTransactionsPanelActive() {
    return this.activePanel === 'transactions';
  }

  setActivePanel(panel: Panel) {
    if (this.activePanel === panel) { return; }

    this.activePanel = panel;
  }
}
