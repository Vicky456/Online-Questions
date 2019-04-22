import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooderCompComponent } from './fooder-comp.component';

describe('FooderCompComponent', () => {
  let component: FooderCompComponent;
  let fixture: ComponentFixture<FooderCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooderCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooderCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
