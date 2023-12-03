import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiceService } from 'src/app/app-service.service';
import { AuthServiceService } from 'src/app/auth-service.service';
import { UserModel } from 'src/app/user-model';
import swal   from 'sweetalert2' ;

@Component({
  selector: 'app-admin-usermanipulations',
  templateUrl: './admin-usermanipulations.component.html',
  styleUrls: ['./admin-usermanipulations.component.css']
})
export class AdminUsermanipulationsComponent implements OnInit {

  title= 'HeaderSideNav';
  sideNavStatus : boolean = false;

  constructor(private _service : AppServiceService ,private authService : AuthServiceService, private _router : Router) { }

  usermodel! : UserModel[];
  selectedUsername! : string;
  result! : any;

  ngOnInit(): void {
    this.getAllUserDetails();
   
  }

  getAllUserDetails(){
    this._service.getAllUsers().subscribe(data =>{
      console.log(data);
      this.usermodel = data;
      
    })

  }

  upgradeUser(event : any){
    this.selectedUsername =  event.target.value;
    console.log(this.selectedUsername);
    this._service.upgradeUser(this.selectedUsername).subscribe(result =>{
      console.log(result);
      //console.log("upgraded successfully");
      
    },
    error =>{
        console.log(error);

        swal.fire("Good job!", "User upgraded succesfully!","success").then( () => {
          location.reload();
      })

    });

  }

  logout() {
    this.authService.logout();
    this._router.navigate(['./loginsuccess']);

  }
}

