import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieFinderComponentComponent } from './movie-finder-component.component';

describe('MovieFinderComponentComponent', () => {
  let component: MovieFinderComponentComponent;
  let fixture: ComponentFixture<MovieFinderComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieFinderComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieFinderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
