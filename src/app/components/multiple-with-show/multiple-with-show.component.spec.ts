import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleWithShowComponent } from './multiple-with-show.component';

describe('MultipleWithShowComponent', () => {
  let component: MultipleWithShowComponent;
  let fixture: ComponentFixture<MultipleWithShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleWithShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleWithShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
