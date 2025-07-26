import { Component } from '@angular/core';
import {HousingLocation} from '../housing-location/housing-location';

@Component({
  selector: 'app-home',
  imports: [HousingLocation],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
