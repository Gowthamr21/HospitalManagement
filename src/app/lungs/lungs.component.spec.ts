/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LungsComponent } from './lungs.component';

describe('LungsComponent', () => {
  let component: LungsComponent;
  let fixture: ComponentFixture<LungsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LungsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LungsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
