import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFleetsComponent } from './all-fleets.component';

describe('AllFleetsComponent', () => {
  let component: AllFleetsComponent;
  let fixture: ComponentFixture<AllFleetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllFleetsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllFleetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
