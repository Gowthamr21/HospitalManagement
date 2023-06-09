/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BloodbankComponent } from './bloodbank.component';

describe('BloodbankComponent', () => {
  let component: BloodbankComponent;
  let fixture: ComponentFixture<BloodbankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloodbankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodbankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
