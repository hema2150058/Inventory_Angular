import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User, UserModel } from './user-model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  user1 = new BehaviorSubject<User | null>(null);
  timeout = new Subject<boolean>();
  private tokenExirationTimer: any;

  serviceUrl : string = "http://localhost:8001/";
  //requestHeader = new HttpHeaders({ 'No-Auth': 'True'});

  constructor(private http: HttpClient, private router: Router) { }

  public registerUser(user : any): Observable<any> {
    console.log(user);
    return this.http.post<any>("http://localhost:8001/register",user);
  }

  public loginUser(user: UserModel): Observable<any> {
    console.log(user);
    return this.http.post<any>("http://localhost:8001/login", user);
  }

  checklogin() {
    const user = localStorage.getItem('userData');
    if (!user) {
      return false;
    }
    return true;
  }

  loginData(username: string,
    password: string,
    token: string,
    serverCurrentTime: number,
    tokenExpirationTime: number) {
    const user1 = new User(
      username,
      password,
      token,
      serverCurrentTime,
      tokenExpirationTime
    );
    this.storeUser(user1);

  }

  autoLogin() {

    const user = localStorage.getItem('userData');
    if (!user) return;

    const parsedUser: {
      username: string;
      password: string;
      _token: string;
      serverCurrentTime: number;
      _tokenExpirationTime: number;
    } = JSON.parse(user);
    const loadedUser = new User(
      parsedUser.username,
      parsedUser.password,
      parsedUser._token,
      parsedUser.serverCurrentTime,
      parsedUser._tokenExpirationTime
    );

    if (loadedUser.token) {
      this.user1.next(loadedUser);
      const expirationDuration =
        loadedUser.tokenExpirationTime - new Date().getTime();
      this.autoLogout(expirationDuration);
    }
  }

  autoLogout(expirationDuration: number) {
    this.tokenExirationTimer = setTimeout(() => {
      this.timeout.next(true);
      this.logout();
    }, expirationDuration);
  }

  logout() {
    this.user1.next(null);
    window.location.href = "/loginsuccess";
    this.removeUser();
    if (this.tokenExirationTimer) {
      clearTimeout(this.tokenExirationTimer);
    }
    this.tokenExirationTimer = null;
  }

  private storeUser(user: User) {
    localStorage.setItem('userData', JSON.stringify(user));
  }
  private removeUser() {
    localStorage.removeItem('userData');
  }

}
