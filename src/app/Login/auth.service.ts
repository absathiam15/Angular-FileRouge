import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../user';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject!: BehaviorSubject<User>;
  public currentUser!: Observable<User>; 
  // infoUser:User;
  private helper = new JwtHelperService();

  constructor(
    private http: HttpClient,
    private router: Router,
    // private user: User
     ) {}

     httpOptions = {
      headers:new HttpHeaders({'Content-Type':'application/json'})
    };
   
    public get currentUserValue():User
    {
      return this.currentUserSubject.value;
    }

    login(data:any)
  {
    return this.http.post<any>(`http://127.0.0.1:8000/api/login`,data)
                .pipe(
                   map((user:any) => {
                    localStorage.setItem('token', user.token);
                     let tokenInfo=this.getInfoToken(user['token']);
                    localStorage.setItem('currentUserInfo',JSON.stringify(tokenInfo));
                    //this.currentUserSubject.next(user);
                    console.log(tokenInfo.roles[0]);
                    return tokenInfo.roles[0];
                })
                );
  }

  getInfoToken(token:string):any
  {
    try {
      return this.helper.decodeToken(token);
    } 
    catch(Error) {
      return null;
    }
  }

  getToken() {
    const token = localStorage.getItem('token');
    console.log(token);
    if (token !== 'undefined') {
      return token;
    }
    else{
      return null;
    }
    }
    
    setUser(user:any) {
      localStorage.setItem('user', JSON.stringify(user));
    }
  
    logout() {
      console.log('Tentative de déconnexion');
      this.router.navigate(['/login']);
    } 
  
}