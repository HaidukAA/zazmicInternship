import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentsSidebarArticleActionComponent } from './contents-sidebar-article-action.component';

describe('ContentsSidebarArticleActionComponent', () => {
  let component: ContentsSidebarArticleActionComponent;
  let fixture: ComponentFixture<ContentsSidebarArticleActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentsSidebarArticleActionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentsSidebarArticleActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
