import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImporterComptesPage } from './importer-comptes.page';

describe('ImporterComptesPage', () => {
  let component: ImporterComptesPage;
  let fixture: ComponentFixture<ImporterComptesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ImporterComptesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
