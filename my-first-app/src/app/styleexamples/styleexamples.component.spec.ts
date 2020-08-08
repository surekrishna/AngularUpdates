import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleexamplesComponent } from './styleexamples.component';

describe('StyleexamplesComponent', () => {
  let component: StyleexamplesComponent;
  let fixture: ComponentFixture<StyleexamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyleexamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleexamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
