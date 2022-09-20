import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DroprightFilterAuthorComponent } from './droprightFilterAuthor.component';

describe('DroprightFilterAuthorComponent', () => {
  let component: DroprightFilterAuthorComponent;
  let fixture: ComponentFixture<DroprightFilterAuthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DroprightFilterAuthorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DroprightFilterAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
