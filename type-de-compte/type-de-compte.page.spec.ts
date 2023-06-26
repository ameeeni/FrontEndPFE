import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TypeDeComptePage } from './type-de-compte.page';

describe('TypeDeComptePage', () => {
  let component: TypeDeComptePage;
  let fixture: ComponentFixture<TypeDeComptePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TypeDeComptePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
