import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormfiveComponent } from './formfive.component';

describe('FormfiveComponent', () => {
  let component: FormfiveComponent;
  let fixture: ComponentFixture<FormfiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormfiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormfiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
