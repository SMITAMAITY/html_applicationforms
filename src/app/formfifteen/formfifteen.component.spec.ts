import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormfifteenComponent } from './formfifteen.component';

describe('FormfifteenComponent', () => {
  let component: FormfifteenComponent;
  let fixture: ComponentFixture<FormfifteenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormfifteenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormfifteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
