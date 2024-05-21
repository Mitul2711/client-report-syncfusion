import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermisiionTreeClientShubhamComponent } from './permisiion-tree-client-shubham.component';

describe('PermisiionTreeClientShubhamComponent', () => {
  let component: PermisiionTreeClientShubhamComponent;
  let fixture: ComponentFixture<PermisiionTreeClientShubhamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermisiionTreeClientShubhamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PermisiionTreeClientShubhamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
