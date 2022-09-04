import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentsSidebarTopComponent } from './contents-sidebar-top.component';

describe('ContentsSidebarTopComponent', () => {
  let component: ContentsSidebarTopComponent;
  let fixture: ComponentFixture<ContentsSidebarTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentsSidebarTopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentsSidebarTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
