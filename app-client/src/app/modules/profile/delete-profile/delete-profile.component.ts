import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProfileService } from './../../../shared/services/profile.service';

@Component({
  selector: 'app-deleteprofile',
  templateUrl: './delete-profile.component.html',
  styleUrls: ['./delete-profile.component.scss']
})
export class DeleteProfileComponent implements OnInit {

  @Input() public userId;
  @Output() deletedCnf: EventEmitter<any> = new EventEmitter();
  profileData: any = {};

  constructor(
    public activeModal: NgbActiveModal,
    public profileService: ProfileService
    ) { }

  ngOnInit(): void {
    this.profileService.getProfile(this.userId).subscribe(data => {
      this.profileData = data[0];
    });
  }

  deleteProfile() {
    this.profileService.deleteProfile(this.userId).subscribe(data => {
      this.deletedCnf.emit(this.userId);
      this.activeModal.close();
    });
  }

}
