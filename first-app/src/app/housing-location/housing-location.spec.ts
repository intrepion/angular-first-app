import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
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
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(HousingLocation);
    component = fixture.componentInstance;

    fixture.componentRef.setInput('housingLocation', mockHousingLocation);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display housing location information', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.textContent).toContain('Test Home');
    expect(compiled.textContent).toContain('Test City, TS');
  });

  it('should have a learn more link', () => {
    const compiled = fixture.nativeElement;
    
    const learnMoreLink = compiled.querySelector('a');
    expect(learnMoreLink).toBeTruthy();
    
    if (learnMoreLink) {
      expect(learnMoreLink.textContent.trim()).toBe('Learn More');
    }
  });

  it('should render image with correct src and alt', () => {
    const compiled = fixture.nativeElement;
    const image = compiled.querySelector('img.listing-photo');
    expect(image).toBeTruthy();
    expect(image.src).toContain('test.jpg');
    expect(image.alt).toContain('Test Home');
  });
});
