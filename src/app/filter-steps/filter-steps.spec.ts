import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterSteps } from './filter-steps';

describe('FilterSteps', () => {
  let component: FilterSteps;
  let fixture: ComponentFixture<FilterSteps>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterSteps]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterSteps);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
