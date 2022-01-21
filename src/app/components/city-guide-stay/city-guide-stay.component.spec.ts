import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityGuideStayComponent } from './city-guide-stay.component';

describe('CityGuideStayComponent', () => {
  let component: CityGuideStayComponent;
  let fixture: ComponentFixture<CityGuideStayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityGuideStayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityGuideStayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
