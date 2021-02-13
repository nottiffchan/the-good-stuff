import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../app/app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MobileLandingPageComponent } from './mobile-landing-page/mobile-landing-page.component';
import { MobileHeaderComponent } from './components/mobile-header/mobile-header.component';
import { MobileFooterComponent } from './components/mobile-footer/mobile-footer.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    MobileLandingPageComponent,
    MobileHeaderComponent,
    MobileFooterComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [
    MobileLandingPageComponent,
    MobileHeaderComponent,
    MobileFooterComponent,
  ]
})
export class MobileAppModule { }
