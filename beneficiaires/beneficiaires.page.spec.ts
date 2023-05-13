import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BeneficiairesPage } from './beneficiaires.page';

describe('BeneficiairesPage', () => {
  let component: BeneficiairesPage;
  let fixture: ComponentFixture<BeneficiairesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BeneficiairesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
