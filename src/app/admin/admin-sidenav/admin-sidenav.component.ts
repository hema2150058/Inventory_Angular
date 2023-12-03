import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth-service.service';
import { AdminInventoryComponent } from '../admin-inventory/admin-inventory.component';
import { AppServiceService } from 'src/app/app-service.service';
import { PopForAddInvComponent } from '../pop-for-add-inv/pop-for-add-inv.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-admin-sidenav',
  templateUrl: './admin-sidenav.component.html',
  styleUrls: ['./admin-sidenav.component.css']
})
export class AdminSidenavComponent implements OnInit {

  @Input() sideNavStatus : boolean = false;


  constructor( private authService : AuthServiceService,private appservice: AppServiceService,private dialogRef : MatDialog,private _router : Router,) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
    this._router.navigate(['./loginsuccess']);

  }
  addinv(){}
}
