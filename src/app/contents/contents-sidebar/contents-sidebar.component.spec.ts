import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentsSidebarComponent } from './contents-sidebar.component';

describe('ContentsSidebarComponent', () => {
  let component: ContentsSidebarComponent;
  let fixture: ComponentFixture<ContentsSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentsSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
