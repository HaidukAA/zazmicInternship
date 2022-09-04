import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SppPageLayoutComponent } from './spp-page-layout.component';

describe('SppPageLayoutComponent', () => {
  let component: SppPageLayoutComponent;
  let fixture: ComponentFixture<SppPageLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SppPageLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SppPageLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
