import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SppMenuItemComponent } from './spp-menu-item.component';

describe('SppMenuItemComponent', () => {
  let component: SppMenuItemComponent;
  let fixture: ComponentFixture<SppMenuItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SppMenuItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SppMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
