import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/admin-usage';
import { AppServiceService } from 'src/app/app-service.service';
import { PopUpProductinfoComponent } from 'src/app/pop-up-productinfo/pop-up-productinfo.component';
import { MatDialog } from '@angular/material/dialog';
import { strings } from '@material/dialog';
import { PopToDeclineOrderComponent } from '../pop-to-decline-order/pop-to-decline-order.component';


@Component({
  selector: 'app-admin-homepage',
  templateUrl: './admin-homepage.component.html',
  styleUrls: ['./admin-homepage.component.css']
})
export class AdminHomepageComponent implements OnInit {
  
  title= 'HeaderSideNav';
  sideNavStatus : boolean = false;

  pendingOrders!: Order[];
  displayData ='';
  constructor(private appservice : AppServiceService,private router : Router,private dialogRef : MatDialog) {
    appservice.currentAboutData.subscribe((data) => (this.displayData = data || ''));
   }

  ngOnInit(): void {

    this.getAllPendingOrders();
    //this.changeOrderStatus();
  }
  private getAllPendingOrders(){
    this.appservice.getAllPendingOrders().subscribe(data =>{
      console.log(data);
      this.pendingOrders = data;
      
    })
  }
   
  selectedOrderId : string = '';
  accepted(event : any){
    this.selectedOrderId =event.target.value;
    localStorage.setItem("SelectedOrderId",this.selectedOrderId)
    console.log(this.selectedOrderId);
    this.acceptOrderStatus(this.selectedOrderId);
  }

  acceptOrderStatus(selectedOrderId : string){
    this.appservice.changeOrderStatus(selectedOrderId).subscribe(data =>{
      console.log(data);
    },
    error =>{
      console.log(error);
      this.openDialog();
      //location.reload();
    

  });
    
      
    
  }
  openDialog(){
    this.dialogRef.open(PopUpProductinfoComponent,{
      data : {
        name: "samuel"
      }
      
    })
    
  }

  decline(orderId : number){
    const dialog = this.dialogRef.open(PopToDeclineOrderComponent,{
      data : {orderIdPop : orderId},width: '500px',height: '300px'
    })
    dialog.afterClosed().subscribe(result =>{
      this.getAllPendingOrders();
    })
  }


}
