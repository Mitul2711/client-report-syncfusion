import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RopdownlistComponent } from './ropdownlist.component';

describe('RopdownlistComponent', () => {
  let component: RopdownlistComponent;
  let fixture: ComponentFixture<RopdownlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RopdownlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RopdownlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
