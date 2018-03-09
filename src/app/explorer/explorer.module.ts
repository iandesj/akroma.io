import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PaginationModule } from 'ngx-bootstrap';

import { BlockOverviewComponent } from './components/block-overview/block-overview.component';
import { BlocksPanelComponent } from './components/blocks-panel/blocks-panel.component';
import { TransactionOverviewComponent } from './components/transaction-overview/transaction-overview.component';
import { TransactionsPanelComponent } from './components/transactions-panel/transactions-panel.component';
import { ExplorerRoutingModule } from './explorer-routing.module';
import { AddressExistsGuard } from './guards/address-exists.guard';
import { BlockExistsGuard } from './guards/block-exists.guard';
import { TransactionExistsGuard } from './guards/transaction-exists.guard';
import { AddressDetailsComponent } from './pages/address-details/address-details.component';
import { BlockDetailsComponent } from './pages/block-details/block-details.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { TransactionDetailsComponent } from './pages/transaction-details/transaction-details.component';
import { HexToAsciiPipe } from './pipes/hex-to-ascii.pipe';
import { UnixTimestampToDatePipe } from './pipes/unix-timestamp-to-date.pipe';
import { AddressesService } from './services/addresses.service';
import { BlocksService } from './services/blocks.service';
import { NetworkService } from './services/network.service';
import { PriceService } from './services/price.service';
import { TransactionsService } from './services/transactions.service';
import { BlocksEffects } from './state/effects/blocks.effects';
import { TransactionsEffects } from './state/effects/transactions.effects';
import { reducers } from './state/reducers';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('explorer', reducers),
    EffectsModule.forFeature([
      BlocksEffects,
      TransactionsEffects,
    ]),
    ExplorerRoutingModule,
    PaginationModule.forRoot(),
    FormsModule,
  ],
  declarations: [
    OverviewComponent,
    BlocksPanelComponent,
    TransactionsPanelComponent,
    BlockOverviewComponent,
    TransactionOverviewComponent,
    BlockDetailsComponent,
    TransactionDetailsComponent,
    HexToAsciiPipe,
    UnixTimestampToDatePipe,
    AddressDetailsComponent,
  ],
  providers: [
    BlocksService,
    NetworkService,
    PriceService,
    TransactionsService,
    AddressesService,
    BlockExistsGuard,
    TransactionExistsGuard,
    AddressExistsGuard,
  ],
})
export class ExplorerModule { }
