import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateLocalReferenceComponent } from './template-local-reference.component';

describe('TemplateLocalReferenceComponent', () => {
  let component: TemplateLocalReferenceComponent;
  let fixture: ComponentFixture<TemplateLocalReferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateLocalReferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateLocalReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
