import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { CreateProfileComponent } from './modules/profile/create-profile/create-profile.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { ProfileResolverService } from './shared/services/profile.resolver.service';
import { UnsavedChangesGuard } from './guards/unsaved-changes.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
    resolve: { profileListResolve: ProfileResolverService }
  },
  {
    path: 'addprofile',
    component: CreateProfileComponent,
    canDeactivate: [UnsavedChangesGuard]
  },
  {
    path: 'editprofile/:id',
    component: CreateProfileComponent,
    canDeactivate: [UnsavedChangesGuard]
  },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
