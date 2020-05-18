import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfileService } from '../../../shared/services/profile.service';
import { CountryService } from '../../../shared/services/country.service';
import { IProfile } from '../../../shared/models/profile.interface';
import { ICountry } from '../../../shared/models/country.interface';

@Component({
  selector: 'app-createprofile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.scss'],
})
export class CreateProfileComponent implements OnInit {

  createProfile: FormGroup;
  formSubmitted = false;
  profile: IProfile;
  countryList: ICountry[];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private profileService: ProfileService,
    private countryService: CountryService) {
      this.countryList = this.countryService.getCountrylist();
    }

  ngOnInit(): void {
    this.createProfile = this.fb.group({
      name: [''],
      email: '',
      country: ''
    });

    // console.log(this.activeRoute.snapshot.paramMap.get('id')

    this.activeRoute.paramMap.subscribe(dataParam => {
      const profileId = dataParam.get('id');
      if (profileId) {
        this.getProfile(profileId);
      }
    });
  }

  submitProfile() {
    this.formSubmitted = true;
    if (!this.createProfile.valid) {
      return false;
    } else {
      this.profileService.createProfile(this.createProfile.value).subscribe(data => {
        console.log(data);
        this.router.navigate(['/profile']);
      });
    }
  }

  getProfile(profileId: string): void {
    this.profileService.getProfile(profileId).subscribe(data => {
      // console.log(data);
      this.createProfile = this.fb.group({
        name: [data.name],
        email: [data.email],
        country: [data.country]
      })
    });
  }

}
