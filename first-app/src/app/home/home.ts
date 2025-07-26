import {Component, inject} from '@angular/core';
import {Housing} from '../housing';
import {HousingLocation} from '../housing-location/housing-location';
import { HousingLocationInfo } from '../housinglocation';
@Component({
  selector: 'app-home',
  imports: [HousingLocation],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class Home {
  housingLocationList: HousingLocationInfo[] = [];
  housing: Housing = inject(Housing);
  filteredLocationList: HousingLocationInfo[] = [];
  constructor() {
    this.housingLocationList = this.housing.getAllHousingLocations();
    this.filteredLocationList = this.housingLocationList;
  }
  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }
    this.filteredLocationList = this.housingLocationList.filter((housingLocation) =>
      housingLocation?.city.toLowerCase().includes(text.toLowerCase()),
    );
  }
}
