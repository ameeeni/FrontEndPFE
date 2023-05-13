import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModificationInformationsPersoPage } from './modification-informations-perso.page';

describe('ModificationInformationsPersoPage', () => {
  let component: ModificationInformationsPersoPage;
  let fixture: ComponentFixture<ModificationInformationsPersoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModificationInformationsPersoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
