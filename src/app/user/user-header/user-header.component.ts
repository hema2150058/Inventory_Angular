import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiceService } from 'src/app/app-service.service';
import { AuthServiceService } from 'src/app/auth-service.service';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent implements OnInit {

  @Output() sideNavToggled = new EventEmitter<boolean>();
  menuStatus: boolean = false;

  constructor( private authService : AuthServiceService, private appservice : AppServiceService,private _router : Router) { }
  
  username = localStorage.getItem('userData');
  
  

  ngOnInit(): void {
    console.log(this.username);
  }
  sideNavToggle(){
    this.menuStatus = !this.menuStatus;
    this.sideNavToggled.emit(this.menuStatus);
  }

  logout() {
    this.authService.logout();
    this._router.navigate(['./loginsuccess']);

  }
}
