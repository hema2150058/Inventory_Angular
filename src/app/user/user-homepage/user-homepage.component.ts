import { HttpHeaders } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiceService } from 'src/app/app-service.service';
import { AuthServiceService } from 'src/app/auth-service.service';
import { UserDetails } from 'src/app/user-model';
// import { AppServiceService } from '../app-service.service';
// import { AuthServiceService } from '../auth-service.service';
// import { UserDetails } from '../user-model';

@Component({
  selector: 'app-user-homepage',
  templateUrl: './user-homepage.component.html',
  styleUrls: ['./user-homepage.component.css']
})
export class UserHomepageComponent implements OnInit {

  title= 'HeaderSideNav';
  sideNavStatus : boolean = false;
  
  constructor(private _service : AppServiceService ,private authService : AuthServiceService, private _router : Router) { }

  userdetails! : UserDetails[];
  showProducts: boolean = true;
  showTable: boolean = true;
  showReq: boolean = false;
  msg = "this is user order requests";

  ngOnInit(): void {
  //   let api_key = localStorage.getItem('token');
  //   const headers = new HttpHeaders({
  //     'Authorization': `Bearer ${api_key}`
  //   });

  // const requestOptions = { headers: headers };


    this.getUserDetails();
  }

  getUserDetails(){
    
    this.showTable = !this.showTable;
    this._service.getUsers().subscribe(data => {
      console.log(data);
      
      this.userdetails = [data]; 
      console.log(this.userdetails);  
      this.showReq = false;
      this.showProducts = false;

    },
    error =>{
        console.log(error);
    });
    

    }

    viewPreviousrequest(){
      this.showTable = false;
      this.showProducts = false;

      this.showReq = !this.showReq;
      console.log(this.msg);
      //this will redirect to a new page where all the user's requests will be displayed.
      //this._router.navigate(['./userrequests']);
    }

    inventory(){
      this.showReq = false;
      this.showTable = false;
      this.showProducts = !this.showProducts;
    }
 
    logout() {
      this.authService.logout();
      this._router.navigate(['./loginsuccess']);

    }
}


