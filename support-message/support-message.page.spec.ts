import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SupportMessagePage } from './support-message.page';

describe('SupportMessagePage', () => {
  let component: SupportMessagePage;
  let fixture: ComponentFixture<SupportMessagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SupportMessagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
