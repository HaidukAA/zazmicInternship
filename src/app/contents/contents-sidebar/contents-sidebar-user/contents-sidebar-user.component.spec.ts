import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentsSidebarUserComponent } from './contents-sidebar-user.component';

describe('ContentsSidebarUserComponent', () => {
  let component: ContentsSidebarUserComponent;
  let fixture: ComponentFixture<ContentsSidebarUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentsSidebarUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentsSidebarUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
