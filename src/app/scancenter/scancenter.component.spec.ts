/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ScancenterComponent } from './scancenter.component';

describe('ScancenterComponent', () => {
  let component: ScancenterComponent;
  let fixture: ComponentFixture<ScancenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScancenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScancenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
