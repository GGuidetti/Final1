import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Listar2Page } from './listar2.page';

describe('Listar2Page', () => {
  let component: Listar2Page;
  let fixture: ComponentFixture<Listar2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Listar2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Listar2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
