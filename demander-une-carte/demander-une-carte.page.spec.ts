import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DemanderUneCartePage } from './demander-une-carte.page';

describe('DemanderUneCartePage', () => {
  let component: DemanderUneCartePage;
  let fixture: ComponentFixture<DemanderUneCartePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DemanderUneCartePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
