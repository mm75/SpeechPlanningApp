/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CanticosComponent } from './canticos.component';

describe('CanticosComponent', () => {
  let component: CanticosComponent;
  let fixture: ComponentFixture<CanticosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanticosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanticosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
