import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IdentiteClientPage } from './identite-client.page';

describe('IdentiteClientPage', () => {
  let component: IdentiteClientPage;
  let fixture: ComponentFixture<IdentiteClientPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IdentiteClientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
