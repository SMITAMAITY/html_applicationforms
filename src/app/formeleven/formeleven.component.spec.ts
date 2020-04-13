import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormelevenComponent } from './formeleven.component';

describe('FormelevenComponent', () => {
  let component: FormelevenComponent;
  let fixture: ComponentFixture<FormelevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormelevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormelevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
