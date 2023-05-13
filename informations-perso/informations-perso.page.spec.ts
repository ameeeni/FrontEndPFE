import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InformationsPersoPage } from './informations-perso.page';

describe('InformationsPersoPage', () => {
  let component: InformationsPersoPage;
  let fixture: ComponentFixture<InformationsPersoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InformationsPersoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
