import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderOptiondropdownCompComponent } from './header-optiondropdown-comp.component';

describe('HeaderOptiondropdownCompComponent', () => {
  let component: HeaderOptiondropdownCompComponent;
  let fixture: ComponentFixture<HeaderOptiondropdownCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderOptiondropdownCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderOptiondropdownCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
