import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityMainPageComponent } from './city-main-page.component';

describe('CityMainPageComponent', () => {
  let component: CityMainPageComponent;
  let fixture: ComponentFixture<CityMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityMainPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
