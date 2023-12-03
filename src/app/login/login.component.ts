import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';
import { UserModel } from '../user-model';
import { MatDialog } from '@angular/material/dialog';
import { PopUpProductinfoComponent } from '../pop-up-productinfo/pop-up-productinfo.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
/*
  form: FormGroup = new FormGroup({
    'userName': new FormGroup(''),
    'password': new FormGroup('')
  })
  isSubmit: boolean = false;
  error = null;
  isError: boolean = false;
  usermodel = new UserModel();
  userSubscription: Subscription = new Subscription();
  constructor(private authservice : AuthServiceService, private router: Router, private formBuilder : FormBuilder) { }

  ngOnInit(): void {

    this.userSubscription = this.authservice.user1.subscribe((user) => {
      if (user) {
        this.router.navigate(['./admin-homepage']);
      }
    });


    this.form = this.formBuilder.group(
      {
        userName: ['', [Validators.required]],
        password: ['', [Validators.required]],
      }
    );
  }
 
  onLogin(){
    this.isSubmit = true;

    if (this.form.invalid) {
      return;
    }

    console.log(this.form.value);


    this.authservice.loginUser(this.form.value).subscribe(data => {
      console.log(data);

      this.authservice.loginData(data['userName'],data['password'], data['jwtAuthToken'], data['serverCurrentTime'], data['tokenExpirationTime'])
      //window.location.href = "/admin-homepage";
      this.router.navigate(['/admin-homepage'])
    },
      
      error => {
      console.error("exception occured");
      this.error = error;
      console.log(error);
      this.isError = true

    })

  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  */

  title= "angular-material";
  constructor(private dialogRef : MatDialog){}
    ngOnInit(): void{
      throw new Error('Method not implemented');
    }
    openDialog(){
      this.dialogRef.open(PopUpProductinfoComponent,{
        data : {
          name: "samuel"
        }
      })
    }
  }

