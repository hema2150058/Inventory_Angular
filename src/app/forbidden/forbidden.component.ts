import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiceService } from '../app-service.service';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-forbidden',
  templateUrl: './forbidden.component.html',
  styleUrls: ['./forbidden.component.css']
})
export class ForbiddenComponent implements OnInit {

  constructor( private authService : AuthServiceService, private _router : Router) { }

  ngOnInit(): void {
  }
  logout() {
    this.authService.logout();
    this._router.navigate(['./loginsuccess']);

  }
}
