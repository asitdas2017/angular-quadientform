import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/header/header.component';
import { FooterComponent } from './modules/footer/footer.component';
import { CreateProfileComponent } from './modules/profile/create-profile/create-profile.component';
import { SharedComponent } from './shared/shared.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { DeleteProfileComponent } from './modules/profile/delete-profile/delete-profile.component';

import { ProfileService } from './shared/services/profile.service';
import { CountryService } from './shared/services/country.service';
import { ProfileResolverService } from './shared/services/profile.resolver.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CreateProfileComponent,
    SharedComponent,
    ProfileComponent,
    DeleteProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [ProfileService, CountryService, ProfileResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
