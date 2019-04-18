import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeaddressComponent } from './typeaddress.component';

describe('TypeaddressComponent', () => {
  let component: TypeaddressComponent;
  let fixture: ComponentFixture<TypeaddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeaddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeaddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
