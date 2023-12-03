import { Component, OnInit } from '@angular/core';
import { AppServiceService } from 'src/app/app-service.service';
import { UserDetails } from 'src/app/user-model';

@Component({
  selector: 'app-user-service',
  templateUrl: './user-service.component.html',
  styleUrls: ['./user-service.component.css']
})
export class UserServiceComponent implements OnInit {

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
