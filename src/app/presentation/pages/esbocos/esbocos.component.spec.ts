/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EsbocosComponent } from './esbocos.component';

describe('EsbocosComponent', () => {
  let component: EsbocosComponent;
  let fixture: ComponentFixture<EsbocosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsbocosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsbocosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
