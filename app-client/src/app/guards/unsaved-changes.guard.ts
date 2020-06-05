import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

export interface IUnsavedRedirect {
    canRedirect: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class UnsavedChangesGuard implements CanDeactivate<IUnsavedRedirect> {
    canDeactivate(component: IUnsavedRedirect) {
        return component.canRedirect ? component.canRedirect() : true;
    }
}
