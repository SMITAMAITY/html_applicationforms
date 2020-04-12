import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormnineComponent } from './formnine.component';

describe('FormnineComponent', () => {
  let component: FormnineComponent;
  let fixture: ComponentFixture<FormnineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormnineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormnineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
