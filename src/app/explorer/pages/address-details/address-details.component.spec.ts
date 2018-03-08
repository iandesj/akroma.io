import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule, combineReducers } from '@ngrx/store';
import { PaginationModule } from 'ngx-bootstrap';

import * as fromRoot from '../../../core/state/reducers';
import { HexToAsciiPipe } from '../../pipes/hex-to-ascii.pipe';
import { UnixTimestampToDatePipe } from '../../pipes/unix-timestamp-to-date.pipe';
import { AddressesService } from '../../services/addresses.service';
import * as fromExplorer from '../../state/reducers';

import { AddressDetailsComponent } from './address-details.component';

describe('AddressDetailsComponent', () => {
  let component: AddressDetailsComponent;
  let fixture: ComponentFixture<AddressDetailsComponent>;

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        imports: [
          RouterTestingModule,
          StoreModule.forRoot({
            ...fromRoot.reducers,
            explorer: combineReducers(fromExplorer.reducers),
          }),
          PaginationModule.forRoot(),
          FormsModule,
          HttpClientTestingModule,
        ],
        declarations: [
          AddressDetailsComponent,
          HexToAsciiPipe,
          UnixTimestampToDatePipe,
        ],
        providers: [
          AddressesService,
        ],
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressDetailsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
