import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrdonnerUnVirementPage } from './ordonner-un-virement.page';

describe('OrdonnerUnVirementPage', () => {
  let component: OrdonnerUnVirementPage;
  let fixture: ComponentFixture<OrdonnerUnVirementPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OrdonnerUnVirementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
