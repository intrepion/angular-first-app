import {Component, inject} from '@angular/core';
import {Housing} from '../housing';
import {HousingLocation} from '../housing-location/housing-location';
import { HousingLocationInfo } from '../housinglocation';
@Component({
  selector: 'app-home',
  imports: [HousingLocation],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      @for(housingLocation of housingLocationList; track $index) {
        <app-housing-location [housingLocation]="housingLocation"></app-housing-location>
      }
    </section>
  `,
  styleUrls: ['./home.scss'],
})
export class Home {
  housingLocationList: HousingLocationInfo[] = [];
  housing: Housing = inject(Housing);
  constructor() {
    this.housingLocationList = this.housing.getAllHousingLocations();
  }
}
