import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatereporttemplateComponent } from './createreporttemplate.component';

describe('CreatereporttemplateComponent', () => {
  let component: CreatereporttemplateComponent;
  let fixture: ComponentFixture<CreatereporttemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatereporttemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatereporttemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
