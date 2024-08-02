import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RComplexComponent } from './r-complex.component';

describe('RComplexComponent', () => {
  let component: RComplexComponent;
  let fixture: ComponentFixture<RComplexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RComplexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RComplexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
