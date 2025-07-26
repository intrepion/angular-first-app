import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { Details } from './details';
import { Housing } from '../housing';
import { HousingLocationInfo } from '../housinglocation';

describe('Details', () => {
  let component: Details;
  let fixture: ComponentFixture<Details>;
  let mockHousingService: jasmine.SpyObj<Housing>;

  const mockHousingLocation: HousingLocationInfo = {
    id: 1,
    name: 'Test Home',
    city: 'Test City',
    state: 'TS',
    photo: 'test.jpg',
    availableUnits: 5,
    wifi: true,
    laundry: false,
  };

  beforeEach(async () => {
    const mockActivatedRoute = {
      snapshot: {
        params: { id: '1' }
      }
    };

    mockHousingService = jasmine.createSpyObj('Housing', ['getHousingLocationById', 'submitApplication']);
    mockHousingService.getHousingLocationById.and.returnValue(Promise.resolve(mockHousingLocation));

    await TestBed.configureTestingModule({
      imports: [Details],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: Housing, useValue: mockHousingService }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Details);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getHousingLocationById with correct parameter from route', () => {
    expect(mockHousingService.getHousingLocationById).toHaveBeenCalledWith(1);
  });

  it('should have a reactive form with required fields', () => {
    expect(component.applyForm).toBeDefined();
    expect(component.applyForm.get('firstName')).toBeDefined();
    expect(component.applyForm.get('lastName')).toBeDefined();
    expect(component.applyForm.get('email')).toBeDefined();
  });

  it('should call submitApplication when form is submitted', () => {
    component.applyForm.patchValue({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com'
    });
    
    component.submitApplication();
    
    expect(mockHousingService.submitApplication).toHaveBeenCalledWith('John', 'Doe', 'john@example.com');
  });
});
