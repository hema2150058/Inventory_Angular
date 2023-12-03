import { Component, OnInit } from '@angular/core';
import { UserModel } from '../user-model';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrationsuccess',
  templateUrl: './registrationsuccess.component.html',
  styleUrls: ['./registrationsuccess.component.css']
})
export class RegistrationsuccessComponent implements OnInit {

  cuurentDate :any = new Date();
  user = new UserModel();
  msg = '';
  constructor(private _service : AuthServiceService , private _router : Router) { }
  ngOnInit(): void {
  }

  registerUser(){
    this._service.registerUser(this.user).subscribe(
      data =>{
        console.log("Response recieved");
        this._router.navigate(['/loginsuccess']);
        console.log(this.user);
      },
      error =>{
        console.log("Exception occured");
        this.msg = "Username already exist";
      }
    )
}
}
