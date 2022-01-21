import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityGuideMoveComponent } from './city-guide-move.component';

describe('CityGuideMoveComponent', () => {
  let component: CityGuideMoveComponent;
  let fixture: ComponentFixture<CityGuideMoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityGuideMoveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityGuideMoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
