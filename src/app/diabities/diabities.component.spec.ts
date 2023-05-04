/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DiabitiesComponent } from './diabities.component';

describe('DiabitiesComponent', () => {
  let component: DiabitiesComponent;
  let fixture: ComponentFixture<DiabitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiabitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiabitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
