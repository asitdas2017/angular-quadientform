import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { ProfileService } from './profile.service';
import { IProfile } from './../models/profile.interface';

@Injectable()
export class ProfileResolverService implements Resolve<IProfile[] | string> {

    constructor(private profileService: ProfileService, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProfile[] | string> {
        return this.profileService.getProfiles().pipe(
            catchError((err: string) => {
                // this.router.navigate(['/addprofile']);
                return of(err);
            })
        );
    }

}
