import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DocumentsPersonnelleInscrirePage } from './documents-personnelle-inscrire.page';

describe('DocumentsPersonnelleInscrirePage', () => {
  let component: DocumentsPersonnelleInscrirePage;
  let fixture: ComponentFixture<DocumentsPersonnelleInscrirePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DocumentsPersonnelleInscrirePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
