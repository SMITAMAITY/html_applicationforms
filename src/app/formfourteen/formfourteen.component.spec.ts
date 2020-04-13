import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormfourteenComponent } from './formfourteen.component';

describe('FormfourteenComponent', () => {
  let component: FormfourteenComponent;
  let fixture: ComponentFixture<FormfourteenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormfourteenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormfourteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
