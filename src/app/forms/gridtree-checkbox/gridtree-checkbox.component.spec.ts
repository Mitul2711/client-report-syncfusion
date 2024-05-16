import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridtreeCheckboxComponent } from './gridtree-checkbox.component';

describe('GridtreeCheckboxComponent', () => {
  let component: GridtreeCheckboxComponent;
  let fixture: ComponentFixture<GridtreeCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridtreeCheckboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridtreeCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
