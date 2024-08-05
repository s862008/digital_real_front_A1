import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartParametrsComponent } from './smart-parametrs.component';

describe('SmartParametrsComponent', () => {
  let component: SmartParametrsComponent;
  let fixture: ComponentFixture<SmartParametrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmartParametrsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartParametrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
