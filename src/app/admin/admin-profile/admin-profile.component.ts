import { Component, OnInit } from '@angular/core';
import { AppServiceService } from 'src/app/app-service.service';
import { UserDetails } from 'src/app/user-model';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {

  title= 'HeaderSideNav';
  sideNavStatus : boolean = false;
  constructor(private appservice : AppServiceService) { }

  userdetails! : UserDetails[];
  ngOnInit(): void {
    this.getUserDetails();
  }

  getUserDetails(){
    this.appservice.getUsers().subscribe(data =>{
      console.log(data);
      this.userdetails = [data];
    })
  }
}
