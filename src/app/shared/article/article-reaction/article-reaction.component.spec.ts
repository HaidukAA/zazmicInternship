import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleReactionComponent } from './article-reaction.component';

describe('ArticleReactionComponent', () => {
  let component: ArticleReactionComponent;
  let fixture: ComponentFixture<ArticleReactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleReactionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleReactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
