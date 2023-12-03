import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/admin-usage';
import { AppServiceService } from 'src/app/app-service.service';

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.css']
})
export class UserOrdersComponent implements OnInit {

  title= 'HeaderSideNav';
  sideNavStatus : boolean = false;
  constructor(private appservice: AppServiceService) { }
  order! : Order[];

  ngOnInit(): void {
    this.getOrdersForUser();
  }

  getOrdersForUser(){
    this.appservice.getOrderByUserNameForUser().subscribe(data =>{
      console.log(data);
      this.order = data;
    })
  }


}
