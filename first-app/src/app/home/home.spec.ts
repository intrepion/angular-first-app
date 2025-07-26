import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Home } from './home';

describe('Home', () => {
  let component: Home;
  let fixture: ComponentFixture<Home>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render search form', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('input[placeholder="Filter by city"]')).toBeTruthy();
    expect(compiled.querySelector('button.primary')).toBeTruthy();
  });

  it('should display housing locations', () => {
    const compiled = fixture.nativeElement;
    const housingElements = compiled.querySelectorAll('app-housing-location');
    expect(housingElements.length).toBeGreaterThanOrEqual(0);
  });
});
