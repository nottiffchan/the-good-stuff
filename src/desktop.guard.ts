import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesktopGuard implements CanActivate {
  constructor(
    private router: Router
  ) { }

  // canActivate(
    // route: ActivatedRouteSnapshot,
    // state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return true;

    canActivate() {
      if (window.innerWidth < 1100) {
        this.router.navigate(['/m/']);
        return false;
      }

      return true;
    }
}
