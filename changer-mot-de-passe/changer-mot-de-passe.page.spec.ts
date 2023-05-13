import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChangerMotDePassePage } from './changer-mot-de-passe.page';

describe('ChangerMotDePassePage', () => {
  let component: ChangerMotDePassePage;
  let fixture: ComponentFixture<ChangerMotDePassePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChangerMotDePassePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
