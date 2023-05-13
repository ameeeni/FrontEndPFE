import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsulterMessageriePage } from './consulter-messagerie.page';

describe('ConsulterMessageriePage', () => {
  let component: ConsulterMessageriePage;
  let fixture: ComponentFixture<ConsulterMessageriePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConsulterMessageriePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
