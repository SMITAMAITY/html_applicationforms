import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormthirteenComponent } from './formthirteen.component';

describe('FormthirteenComponent', () => {
  let component: FormthirteenComponent;
  let fixture: ComponentFixture<FormthirteenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormthirteenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormthirteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
