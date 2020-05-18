import { Injectable } from '@angular/core';
import { ICountry } from './../models/country.interface';

@Injectable()
export class CountryService {

    private readonly countries: ICountry[] = [
        { name: 'United State' },
        { name: 'India' },
        { name: 'Canada' },
        { name: 'Germany' },
        { name: 'France' },
        { name: 'Italy' },
        { name: 'Japan' },
        { name: 'United Kingdom' },
        { name: 'Brazil' },
        { name: 'Russia' },
    ];

    getCountrylist(): ICountry[] {
        return this.countries;
    }

}
