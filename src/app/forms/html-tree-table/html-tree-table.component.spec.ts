import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlTreeTableComponent } from './html-tree-table.component';

describe('HtmlTreeTableComponent', () => {
  let component: HtmlTreeTableComponent;
  let fixture: ComponentFixture<HtmlTreeTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlTreeTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlTreeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
