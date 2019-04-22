import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderInfodropdownCompComponent } from './header-infodropdown-comp.component';

describe('HeaderInfodropdownCompComponent', () => {
  let component: HeaderInfodropdownCompComponent;
  let fixture: ComponentFixture<HeaderInfodropdownCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderInfodropdownCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderInfodropdownCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
