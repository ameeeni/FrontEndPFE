import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientProfessionnelPage } from './client-professionnel.page';

describe('ClientProfessionnelPage', () => {
  let component: ClientProfessionnelPage;
  let fixture: ComponentFixture<ClientProfessionnelPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ClientProfessionnelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
