import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesktopGuard } from 'src/desktop.guard';
import { MobileGuard } from 'src/mobile.guard';
import { MobileLandingPageComponent } from 'src/mobile/mobile-landing-page/mobile-landing-page.component';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MenuPageComponent } from './menu-page/menu-page.component';

const desktopRoutes = [
  { path: '', component: LandingPageComponent },
  { path: 'menu', component: MenuPageComponent },
  { path: 'admin', component: AdminComponent },
];

const mobileRoutes = [
  { path: '', component: MobileLandingPageComponent },
];

const routes: Routes = [
  {
    path: '',
    // component: DesktopWrapperComponent,
    canActivate: [DesktopGuard],
    children: desktopRoutes
  },
  {
    path: 'm',
    // component: MobileAppComponent,
    canActivate: [MobileGuard],
    children: mobileRoutes
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
