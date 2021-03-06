import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FoodTileComponent } from './food-item/food-tile/food-tile.component';
import { FoodItemPageComponent } from './food-item/food-item-page/food-item-page.component';
import { MobileAppModule } from '../mobile/DesktopApp.module';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderComponent,
    FooterComponent,
    MenuPageComponent,
    FoodTileComponent,
    FoodItemPageComponent,
    AdminComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    MobileAppModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
