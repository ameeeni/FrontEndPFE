import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PriseRendezVousPage } from './prise-rendez-vous.page';

describe('PriseRendezVousPage', () => {
  let component: PriseRendezVousPage;
  let fixture: ComponentFixture<PriseRendezVousPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PriseRendezVousPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
