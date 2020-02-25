import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontOfficeComponent } from './front-office.component';

describe('FrontOfficeComponent', () => {
  let component: FrontOfficeComponent;
  let fixture: ComponentFixture<FrontOfficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontOfficeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
