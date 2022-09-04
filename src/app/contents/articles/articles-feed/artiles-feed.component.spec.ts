import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtilesFeedComponent } from './artiles-feed.component';

describe('ArtilesFeedComponent', () => {
  let component: ArtilesFeedComponent;
  let fixture: ComponentFixture<ArtilesFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtilesFeedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtilesFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
