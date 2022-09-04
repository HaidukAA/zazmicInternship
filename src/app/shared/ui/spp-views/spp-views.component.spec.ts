import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SppViewsComponent } from './spp-views.component';

describe('SppViewsComponent', () => {
  let component: SppViewsComponent;
  let fixture: ComponentFixture<SppViewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SppViewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SppViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
