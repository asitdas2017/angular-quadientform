import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  createProfile: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.createProfile = this.fb.group({
      name: [''],
      email: '',
      country: ''
    });

  }

  submitProfile() {
    console.log(this.createProfile.value);
  }

}
