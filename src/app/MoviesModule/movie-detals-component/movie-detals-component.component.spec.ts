import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetalsComponentComponent } from './movie-detals-component.component';

describe('MovieDetalsComponentComponent', () => {
  let component: MovieDetalsComponentComponent;
  let fixture: ComponentFixture<MovieDetalsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieDetalsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetalsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
