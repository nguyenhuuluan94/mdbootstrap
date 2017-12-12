import { AgmCoreModule } from '@agm/core';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { AdsComponent } from './homepage/ads/ads.component';
import { CourseComponent } from './homepage/course/course.component';
import { FeaturesComponent } from './homepage/features/features.component';
import { FooterComponent } from './homepage/footer/footer.component';
import { HomeComponent } from './homepage/home/home.component';
import { WelcomeComponent } from './homepage/welcome/welcome.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ServicesComponent } from './services/services.component';
import { MDBBootstrapModule } from './typescripts/free';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: ServicesComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'about', component: AboutComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    NavbarComponent,
    FeaturesComponent,
    AdsComponent,
    FooterComponent,
    HomeComponent,
    WelcomeComponent,
    ServicesComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MDBBootstrapModule.forRoot(),
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key
      apiKey: 'Your_api_key'
    }),
    RouterModule.forRoot(
      appRoutes,
      // {enableTracing: true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:      [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
