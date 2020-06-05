import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfileService } from '../../../shared/services/profile.service';
import { CountryService } from '../../../shared/services/country.service';
import { IProfile } from '../../../shared/models/profile.interface';
import { ICountry } from '../../../shared/models/country.interface';
import { IUnsavedRedirect } from 'src/app/guards/unsaved-changes.guard';

@Component({
  selector: 'app-createprofile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.scss'],
})
export class CreateProfileComponent implements OnInit, IUnsavedRedirect {

  pageHeading = { add: 'Create profile', edit: 'Edit profile' };
  routeHeading = '';
  editProfileID: string;
  formSubmitted = false;
  createProfile: FormGroup;
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

  canRedirect(): boolean {
    if (this.createProfile.dirty && !this.formSubmitted) {
      return window.confirm('you have unsaved changes');
    }
    return true;
  }

  ngOnInit(): void {
    if (this.activeRoute.snapshot.paramMap.keys.length) {
      this.routeHeading = this.pageHeading.edit;
    } else {
      this.routeHeading = this.pageHeading.add;
    }

    this.createProfile = this.fb.group({
      name: [''],
      email: '',
      country: ''
    });

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
      if (this.activeRoute.snapshot.paramMap.keys.length) {
        this.profileService.editProfile(this.editProfileID, this.createProfile.value).subscribe(data => {
          this.router.navigate(['/profile']);
        });
      } else {
        this.profileService.createProfile(this.createProfile.value).subscribe(data => {
          this.router.navigate(['/profile']);
        });
      }
    }
  }

  getProfile(profileId: string): void {
    this.profileService.getProfile(profileId).subscribe(data => {
      this.editProfileID = data._id;
      this.createProfile = this.fb.group({
        name: [data.name],
        email: [data.email],
        country: [data.country]
      });
    });
  }

}
