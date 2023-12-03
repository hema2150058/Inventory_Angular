import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/admin-usage';
import { AppServiceService } from 'src/app/app-service.service';
import { AuthServiceService } from 'src/app/auth-service.service';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css']
})
export class AllOrdersComponent implements OnInit {

  title= 'HeaderSideNav';
  sideNavStatus : boolean = false;

  constructor(private appservice : AppServiceService ,private authService : AuthServiceService, private _router : Router) { }

  allOrders! : Order[];

  ngOnInit(): void {

    this.getAllOrdersDetails();
  }

  getAllOrdersDetails(){
    this.appservice.getAllOrders().subscribe(data => {
      console.log(data);
      this.allOrders = data;
    })
  }
  deleteOrder(orderId : number){
    this.appservice.deleteOrderByOId(orderId).subscribe(data =>{
      console.log(data);
      this.getAllOrdersDetails();
    })
  }

}
