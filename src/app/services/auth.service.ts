import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
const AUTH_API = 'http://localhost:3600/api/';
@Injectable({
  providedIn: 'root'
})
export class AuthService {



  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService) { }

  singin(user:any){
    return this.http.post(`${AUTH_API }login`,user);
  }

  isAuth():boolean{
    const token = localStorage.getItem('token');
    if(this.jwtHelper.isTokenExpired(token) || !localStorage.getItem('token')){
      return false;
    }
    return true;
  }
}
