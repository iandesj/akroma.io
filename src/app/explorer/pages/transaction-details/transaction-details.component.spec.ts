import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule, combineReducers } from '@ngrx/store';

import * as fromRoot from '../../../core/state/reducers';
import { HexToAsciiPipe } from '../../pipes/hex-to-ascii.pipe';
import { UnixTimestampToDatePipe } from '../../pipes/unix-timestamp-to-date.pipe';
import { NetworkService } from '../../services/network.service';
import * as fromExplorer from '../../state/reducers';

import { TransactionDetailsComponent } from './transaction-details.component';

describe('TransactionDetailsComponent', () => {
  let component: TransactionDetailsComponent;
  let fixture: ComponentFixture<TransactionDetailsComponent>;

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        imports: [
          RouterTestingModule,
          StoreModule.forRoot({
            ...fromRoot.reducers,
            explorer: combineReducers(fromExplorer.reducers),
          }),
          HttpClientTestingModule,
        ],
        declarations: [
          TransactionDetailsComponent,
          HexToAsciiPipe,
          UnixTimestampToDatePipe,
        ],
        providers: [
          NetworkService,
        ],
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionDetailsComponent);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
