import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ProfileService } from './profile.service';
import { IProfile } from './../models/profile.interface';

@Injectable()
export class ProfileResolverService implements Resolve<IProfile[]> {

    constructor(private profileService: ProfileService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProfile[]> {
        return this.profileService.getProfiles();
    }

}
