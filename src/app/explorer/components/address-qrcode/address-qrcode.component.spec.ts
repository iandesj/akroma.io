import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { ModalModule } from 'ngx-bootstrap';

import { AddressQrcodeComponent } from './address-qrcode.component';

describe('AddressQrcodeComponent', () => {
  let component: AddressQrcodeComponent;
  let fixture: ComponentFixture<AddressQrcodeComponent>;

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        imports: [
          ModalModule.forRoot(),
        ],
        declarations: [
          AddressQrcodeComponent,
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressQrcodeComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
