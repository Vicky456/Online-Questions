import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderUserdropdownCompComponent } from './header-userdropdown-comp.component';

describe('HeaderUserdropdownCompComponent', () => {
  let component: HeaderUserdropdownCompComponent;
  let fixture: ComponentFixture<HeaderUserdropdownCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderUserdropdownCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderUserdropdownCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
