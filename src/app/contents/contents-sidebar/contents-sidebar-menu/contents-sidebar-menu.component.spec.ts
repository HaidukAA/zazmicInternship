import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentsSidebarMenuComponent } from './contents-sidebar-menu.component';

describe('ContentsSidebarMenuComponent', () => {
  let component: ContentsSidebarMenuComponent;
  let fixture: ComponentFixture<ContentsSidebarMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentsSidebarMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentsSidebarMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
