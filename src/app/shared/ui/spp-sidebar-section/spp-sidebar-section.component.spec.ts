import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SppSidebarSectionComponent } from './spp-sidebar-section.component';

describe('SppSidebarSectionComponent', () => {
  let component: SppSidebarSectionComponent;
  let fixture: ComponentFixture<SppSidebarSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SppSidebarSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SppSidebarSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
