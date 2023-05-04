/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FreecheckupComponent } from './freecheckup.component';

describe('FreecheckupComponent', () => {
  let component: FreecheckupComponent;
  let fixture: ComponentFixture<FreecheckupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreecheckupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreecheckupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
