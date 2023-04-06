import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashbordAchatPage } from './dashbord-achat.page';
import {async} from "rxjs";

describe('DashbordAchatPage', () => {
  let component: DashbordAchatPage;
  let fixture: ComponentFixture<DashbordAchatPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DashbordAchatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
