import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HousingLocation } from './housing-location';
import { HousingLocationInfo } from '../housinglocation';

describe('HousingLocation', () => {
  let component: HousingLocation;
  let fixture: ComponentFixture<HousingLocation>;
  const mockHousingLocation: HousingLocationInfo = {
    id: 99,
    name: 'Test Home',
    city: 'Test City',
    state: 'TS',
    photo: 'test.jpg',
    availableUnits: 10,
    wifi: true,
    laundry: false,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HousingLocation],
    }).compileComponents();

    fixture = TestBed.createComponent(HousingLocation);
    component = fixture.componentInstance;

    fixture.componentRef.setInput('housingLocation', mockHousingLocation);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
