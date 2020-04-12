import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormeightComponent } from './formeight.component';

describe('FormeightComponent', () => {
  let component: FormeightComponent;
  let fixture: ComponentFixture<FormeightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormeightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
