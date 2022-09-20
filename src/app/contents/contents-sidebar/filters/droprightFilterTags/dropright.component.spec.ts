import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DroprightComponent } from './dropright.component';

describe('DroprightComponent', () => {
  let component: DroprightComponent;
  let fixture: ComponentFixture<DroprightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DroprightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DroprightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
