import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seatmap } from './seatmap';

describe('Seatmap', () => {
  let component: Seatmap;
  let fixture: ComponentFixture<Seatmap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Seatmap]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Seatmap);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
