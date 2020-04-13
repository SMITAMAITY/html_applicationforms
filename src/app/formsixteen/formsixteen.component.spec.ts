import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsixteenComponent } from './formsixteen.component';

describe('FormsixteenComponent', () => {
  let component: FormsixteenComponent;
  let fixture: ComponentFixture<FormsixteenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsixteenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsixteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
