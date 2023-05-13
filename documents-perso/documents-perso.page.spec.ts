import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DocumentsPersoPage } from './documents-perso.page';

describe('DocumentsPersoPage', () => {
  let component: DocumentsPersoPage;
  let fixture: ComponentFixture<DocumentsPersoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DocumentsPersoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
