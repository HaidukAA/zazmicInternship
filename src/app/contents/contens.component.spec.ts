import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContensComponent } from './contens.component';

describe('ContensComponent', () => {
  let component: ContensComponent;
  let fixture: ComponentFixture<ContensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
