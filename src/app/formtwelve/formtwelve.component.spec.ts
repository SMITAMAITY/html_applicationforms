import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormtwelveComponent } from './formtwelve.component';

describe('FormtwelveComponent', () => {
  let component: FormtwelveComponent;
  let fixture: ComponentFixture<FormtwelveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormtwelveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormtwelveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
