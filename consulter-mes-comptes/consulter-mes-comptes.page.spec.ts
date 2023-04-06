import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsulterMesComptesPage } from './consulter-mes-comptes.page';

describe('ConsulterMesComptesPage', () => {
  let component: ConsulterMesComptesPage;
  let fixture: ComponentFixture<ConsulterMesComptesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConsulterMesComptesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
