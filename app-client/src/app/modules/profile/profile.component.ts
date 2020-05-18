import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteProfileComponent } from './delete-profile/delete-profile.component';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfileService } from './../../shared/services/profile.service';
import { IProfile } from './../../shared/models/profile.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProfileComponent implements OnInit {

  profiles: IProfile[];

  constructor(
    private profileService: ProfileService,
    private router: Router,
    private route: ActivatedRoute,
    private modalService: NgbModal
    ) {
      this.profiles = this.route.snapshot.data.profileListResolve;
    }

  ngOnInit(): void {
    console.log(this.profiles);
  }

  getAllProfiles() {
    this.profileService.getProfiles().subscribe(data => {
      this.profiles = data;
    });
  }

  editProfile(id: string): void {
    this.router.navigate(['/edit', id]);
  }

  deleteModal(id: string) {
    const modalRef = this.modalService.open(DeleteProfileComponent);
    modalRef.componentInstance.userId = id;
    modalRef.componentInstance.deletedCnf.subscribe(data => {
      // console.log(data);
      // this.getAllProfiles();
    });
  }

}
