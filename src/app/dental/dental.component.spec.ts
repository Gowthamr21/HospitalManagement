/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DentalComponent } from './dental.component';

describe('DentalComponent', () => {
  let component: DentalComponent;
  let fixture: ComponentFixture<DentalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DentalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
