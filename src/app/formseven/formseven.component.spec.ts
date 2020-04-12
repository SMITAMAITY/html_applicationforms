import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsevenComponent } from './formseven.component';

describe('FormsevenComponent', () => {
  let component: FormsevenComponent;
  let fixture: ComponentFixture<FormsevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
