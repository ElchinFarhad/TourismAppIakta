import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityQuizComponent } from './city-quiz.component';

describe('CityQuizComponent', () => {
  let component: CityQuizComponent;
  let fixture: ComponentFixture<CityQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityQuizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
