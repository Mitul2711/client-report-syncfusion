import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermisiionTreeComponent } from './permisiion-tree.component';

describe('PermisiionTreeComponent', () => {
  let component: PermisiionTreeComponent;
  let fixture: ComponentFixture<PermisiionTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermisiionTreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PermisiionTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
