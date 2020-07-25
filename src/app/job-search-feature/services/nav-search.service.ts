// author: Jan Chayopathum
// location in canada for nav-search component

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import caCities from '../../../assets/data/location/ca.json';

@Injectable({
  providedIn: 'root'
})
export class NavSearchService {

  caLocations: string[];

  constructor() {
    let citiies = [...new Set(caCities.map(city => city.city + ", " + city.admin))];
    let provinces = [...new Set(caCities.map(city => city.admin))];
    let country = [...new Set(caCities.map(city => city.country))];
    this.caLocations = citiies.concat(provinces).concat(country);
   }

  getCaLocations(): string[]{
    return this.caLocations;
  }
}
