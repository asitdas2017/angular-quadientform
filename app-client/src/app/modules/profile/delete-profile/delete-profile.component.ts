import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProfileService } from './../../../shared/services/profile.service';
import { IProfile } from './../../../shared/models/profile.interface';

@Component({
  selector: 'app-deleteprofile',
  templateUrl: './delete-profile.component.html',
  styleUrls: ['./delete-profile.component.scss']
})
export class DeleteProfileComponent implements OnInit, AfterViewInit {

  @Input() public userId;
  @Output() deletedCnf: EventEmitter<any> = new EventEmitter();
  profile: any = {};

  constructor(
    public activeModal: NgbActiveModal,
    public profileService: ProfileService
    ) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.profileService.getProfile(this.userId).subscribe(data => {
      // this.profile = data.name;
      console.log(data);
    });
  }

  deleteProfile() {
    this.profileService.deleteProfile(this.userId).subscribe(data => {
      this.deletedCnf.emit('Deleted Confirmation');
      this.activeModal.close();
    });
  }

}
