import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsixComponent } from './formsix.component';

describe('FormsixComponent', () => {
  let component: FormsixComponent;
  let fixture: ComponentFixture<FormsixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
