import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProfileService } from './../../shared/services/profile.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteProfileComponent } from './delete-profile/delete-profile.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProfileComponent implements OnInit {

  profiles = [];

  constructor(
    private profileService: ProfileService,
    private modalService: NgbModal
    ) { }

  ngOnInit(): void {
    this.getAllProfiles();
  }

  getAllProfiles() {
    this.profileService.getProfiles().subscribe(data => {
      this.profiles = data;
    });
  }

  deleteModal(id: string) {
    const modalRef = this.modalService.open(DeleteProfileComponent);
    modalRef.componentInstance.userId = id;
    modalRef.componentInstance.deletedCnf.subscribe(data => {
      console.log(data);
      this.getAllProfiles();
    });
  }

}
