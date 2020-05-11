import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ProfileService } from './../../shared/services/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  createProfile: FormGroup;
  formSubmitted = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private profileService: ProfileService) { }

  ngOnInit(): void {
    this.createProfile = this.fb.group({
      name: [''],
      email: '',
      country: ''
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

}
