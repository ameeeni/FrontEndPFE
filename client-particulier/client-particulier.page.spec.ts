import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientParticulierPage } from './client-particulier.page';
import {async} from "rxjs";

describe('ClientParticulierPage', () => {
  let component: ClientParticulierPage;
  let fixture: ComponentFixture<ClientParticulierPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ClientParticulierPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
