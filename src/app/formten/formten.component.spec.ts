import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormtenComponent } from './formten.component';

describe('FormtenComponent', () => {
  let component: FormtenComponent;
  let fixture: ComponentFixture<FormtenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormtenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormtenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
