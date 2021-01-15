import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private subject = new Subject<any>();
  private keepAfterRouteChange = false;
    private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  apiUrl='http://127.0.0.1:8000/api';
   //displayedColumns = ['Nom', 'Prenom', 'Adresse', 'Telephone', 'Roles', 'Update', 'Delete'];

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
     // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
     this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
          if (this.keepAfterRouteChange) {
              // only keep for a single route change
              this.keepAfterRouteChange = false;
          } else {
              // clear alert message
              this.clear();
          }
      }
  });
   }

  lister() {
    return this.http.get(this.apiUrl + '/admin/users');
  }

  addUser(newUser: any)  {
    return this.http.post(this.apiUrl + '/admin/users', newUser);
  }

  getAlert(): Observable<any> {
    return this.subject.asObservable();
}

success(message: string, keepAfterRouteChange = false) {
    this.keepAfterRouteChange = keepAfterRouteChange;
    this.subject.next({ type: 'success', text: message });
}

error(message: string, keepAfterRouteChange = false) {
    this.keepAfterRouteChange = keepAfterRouteChange;
    this.subject.next({ type: 'error', text: message });
}

clear() {
    // clear by calling subject.next() without parameters
    this.subject.next();
}
}