import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorySnacksPage } from './category-snacks.page';

describe('CategorySnacksPage', () => {
  let component: CategorySnacksPage;
  let fixture: ComponentFixture<CategorySnacksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorySnacksPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorySnacksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
