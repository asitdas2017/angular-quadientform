import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { IProfile } from './../models/profile.interface';

@Injectable()
export class ProfileService{

    profileApiURL = 'http://localhost:3000/profiles';
    headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    // params = new HttpParams().set("paramName",paramValue).set("paramName2", paramValue2); //Create new HttpParams

    constructor(private http: HttpClient){}

    // Error Handling for HTTP request
    private handleError(httpErrorResponse: HttpErrorResponse) {
        let errorMessage = 'Unknown error!';
        if (httpErrorResponse.error instanceof ErrorEvent){
            // Client-side errors
            errorMessage = `Error: ${httpErrorResponse.error.message}`;
        } else {
            // Server-side errors
            errorMessage = `\nError code: ${httpErrorResponse.status}\nMessage: ${httpErrorResponse.message}`;
        }
        return throwError(errorMessage);
    }

    // Get profile list from server
    getProfiles(): Observable<IProfile[]> {
        return this.http.get<IProfile[]>(this.profileApiURL).pipe(
            catchError(this.handleError)
        );
    }

    // Get Single profile based on ID
    getProfile(id: string): Observable<IProfile> {
        const findOneURL = `${this.profileApiURL}/${id}`;
        return this.http.get<IProfile>(findOneURL, {headers: this.headers}).pipe(
            catchError(this.handleError)
        );
    }

    // Create new profile and submit to the server
    createProfile(profileSubmittedData: IProfile): Observable<IProfile> {
        return this.http.post<IProfile>(this.profileApiURL, profileSubmittedData);
    }

    // Edit profile information
    editProfile(id: string, profileUpdatedData: IProfile): Observable<IProfile> {
        return this.http.put<IProfile>(this.profileApiURL, profileUpdatedData).pipe(
            catchError(this.handleError)
        );
    }

    // Delete profile
    deleteProfile(id: string): Observable<any> {
        const delURL = `${this.profileApiURL}/${id}`;
        return this.http.delete(delURL, {headers: this.headers });
    }
}
