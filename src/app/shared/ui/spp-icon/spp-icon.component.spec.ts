import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SppIconComponent } from './spp-icon.component';

describe('SppIconComponent', () => {
  let component: SppIconComponent;
  let fixture: ComponentFixture<SppIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SppIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SppIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
