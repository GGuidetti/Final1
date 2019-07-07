import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bank2Page } from './bank2.page';

describe('Bank2Page', () => {
  let component: Bank2Page;
  let fixture: ComponentFixture<Bank2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bank2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bank2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
