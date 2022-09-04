import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleCommentEditorComponent } from './article-comment-editor.component';

describe('ArticleCommentEditorComponent', () => {
  let component: ArticleCommentEditorComponent;
  let fixture: ComponentFixture<ArticleCommentEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleCommentEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleCommentEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
