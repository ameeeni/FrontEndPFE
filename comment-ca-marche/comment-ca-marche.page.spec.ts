import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommentCaMarchePage } from './comment-ca-marche.page';

describe('CommentCaMarchePage', () => {
  let component: CommentCaMarchePage;
  let fixture: ComponentFixture<CommentCaMarchePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CommentCaMarchePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
