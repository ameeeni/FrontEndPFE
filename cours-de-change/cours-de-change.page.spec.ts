import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoursDeChangePage } from './cours-de-change.page';

describe('CoursDeChangePage', () => {
  let component: CoursDeChangePage;
  let fixture: ComponentFixture<CoursDeChangePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CoursDeChangePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
