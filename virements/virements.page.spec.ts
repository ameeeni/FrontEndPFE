import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VirementsPage } from './virements.page';

describe('VirementsPage', () => {
  let component: VirementsPage;
  let fixture: ComponentFixture<VirementsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VirementsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
