import { Component, OnInit } from '@angular/core';
import { User, UserModel } from '../user-model';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-loginsuccess',
  templateUrl: './loginsuccess.component.html',
  styleUrls: ['./loginsuccess.component.css']
})
export class LoginsuccessComponent implements OnInit {

  user = new UserModel();
  //userresp = new User();
  msg = '';
  userSubscription: Subscription = new Subscription(); 
  constructor(private _service : AuthServiceService , private _router : Router) { }

  ngOnInit(): void {
  }

  loginuser(){
    this._service.loginUser(this.user).subscribe(
      data => {
        localStorage.setItem('userData',this.user.username);
        localStorage.setItem('token',data.jwtAuthToken);
        
        console.log("response recieved")
        console.log(data);

        const role = data.rolename;
        console.log(role);
        if (role === '[ROLE_ADMIN]') {
          this._router.navigate(['/admin-homepage']);
        }else {
          this._router.navigate(['/user-homepage']);
        }
        
        },
        
      error => {
        console.log(error);
        console.error("exception occured");
        this.msg="Username or Password is incorrect";
      }
    )
  }

  gotoregistration(){
    this._router.navigate(['/registration'])
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}

