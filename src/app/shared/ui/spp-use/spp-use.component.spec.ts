import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SppUseComponent } from './spp-use.component';

describe('SppUseComponent', () => {
  let component: SppUseComponent;
  let fixture: ComponentFixture<SppUseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SppUseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SppUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
