import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloBlockComponent } from './hello-block.component';

describe('HelloBlockComponent', () => {
  let component: HelloBlockComponent;
  let fixture: ComponentFixture<HelloBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelloBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
