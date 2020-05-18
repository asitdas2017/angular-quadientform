import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateProfileComponent } from './modules/profile/create-profile/create-profile.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { ProfileResolverService } from './shared/services/profile.resolver.service';


const routes: Routes = [
  {
    path: 'home',
    component: CreateProfileComponent
  },
  {
    path: 'edit/:id',
    component: CreateProfileComponent
  },
  {
    path: 'profile',
    component: ProfileComponent,
    resolve: { profileListResolve: ProfileResolverService }

  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
