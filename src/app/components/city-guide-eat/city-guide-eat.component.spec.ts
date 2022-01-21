import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityGuideEatComponent } from './city-guide-eat.component';

describe('CityGuideEatComponent', () => {
  let component: CityGuideEatComponent;
  let fixture: ComponentFixture<CityGuideEatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityGuideEatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityGuideEatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
