import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelCompComponent } from './model-comp.component';

describe('ModelCompComponent', () => {
  let component: ModelCompComponent;
  let fixture: ComponentFixture<ModelCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
