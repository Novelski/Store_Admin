import { HttpInterceptor, HttpRequest, HttpHandler, HttpUserEvent, HttpEvent } from "@angular/common/http";
import { Observable, of, Subject } from 'rxjs';
import { tap } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  userstoken: any;
  constructor(private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.headers.get('No-Auth') == "True")
      return next.handle(req.clone());
    this.userstoken = localStorage.getItem('access_token');
    console.log("interceptor", this.userstoken);
    if (localStorage.getItem('access_token') != null)
      if (this.userstoken != null) {
        const clonedreq = req.clone({
          //headers: req.headers.set("Authorization", "Bearer" + localStorage.getItem('access_token'))
          headers: req.headers.set("Authorization", "Bearer" + this.userstoken)
        });
        return next.handle(clonedreq).pipe(
          tap(
            succ => { },
            err => {
              if (err.status === 401)
                this.router.navigateByUrl('/login');
            }
          )
        );
      }
      else {
        this.router.navigateByUrl('/login');
      }
  }
}
