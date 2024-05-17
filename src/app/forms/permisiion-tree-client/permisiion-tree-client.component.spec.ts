import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermisiionTreeClientComponent } from './permisiion-tree-client.component';

describe('PermisiionTreeClientComponent', () => {
  let component: PermisiionTreeClientComponent;
  let fixture: ComponentFixture<PermisiionTreeClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermisiionTreeClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PermisiionTreeClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
