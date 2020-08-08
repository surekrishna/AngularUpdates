import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesexamplesComponent } from './directivesexamples.component';

describe('DirectivesexamplesComponent', () => {
  let component: DirectivesexamplesComponent;
  let fixture: ComponentFixture<DirectivesexamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivesexamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivesexamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
