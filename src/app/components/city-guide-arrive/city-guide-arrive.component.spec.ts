import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityGuideArriveComponent } from './city-guide-arrive.component';

describe('CityGuideArriveComponent', () => {
  let component: CityGuideArriveComponent;
  let fixture: ComponentFixture<CityGuideArriveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityGuideArriveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityGuideArriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
