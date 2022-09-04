import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleAuthorComponent } from './article-author.component';

describe('ArticleAuthorComponent', () => {
  let component: ArticleAuthorComponent;
  let fixture: ComponentFixture<ArticleAuthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleAuthorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
