import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Order } from 'src/app/admin-usage';
import { AppServiceService } from 'src/app/app-service.service';
import { ProductsComponent } from 'src/app/products/products.component';

@Component({
  selector: 'app-user-place-order',
  templateUrl: './user-place-order.component.html',
  styleUrls: ['./user-place-order.component.css']
})
export class UserPlaceOrderComponent implements OnInit {

  // constructor(public dialogRef: MatDialogRef<ProductsComponent>,
  //   @Inject(MAT_DIALOG_DATA) public data: any,private appservice: AppServiceService) { }
  constructor(private appservice: AppServiceService, private router: Router, private httpClient : HttpClient,public dialogRef : MatDialogRef<UserPlaceOrderComponent>){}
  ngOnInit(): void {
    this.console();
  }
  order =new Order;
  userName = localStorage.getItem('userData');
  locationNumber = localStorage.getItem('locationNumber');
  materialId = localStorage.getItem('materialId');
  orderq! : any;
  console(){
    console.log(this.userName,this.locationNumber,this.materialId);
    
  }
  // onNoClick(){
  //   this.dialogRef.close();
  // }


  // submitOrder(){
  //   const orderData ={
  //   "locationNumber" : this.locationNumber,
  //   "materialId" : this.materialId,
  //   "orderQty" : this.orderq,
  //   "userName" : this.userName
  //   }
    
  //   this.httpClient.post<any>(`http://localhost:8081/order/placeOrder`,orderData).subscribe(response =>{
  //     console.error('Error while placing Order:', response);
  //   },
  //   (error) =>{
      
  //     console.log('Order placed successfully:' ,error);
  //   });
  // }

  submitOrder() {
    // Call your service to send data to the backend
    const orderData ={
      "locationNumber" : this.locationNumber,
      "materialId" : this.materialId,
      "orderQty" : this.orderq,
      "userName" : this.userName
      }
      // this.order.locationNumber = JSON.stringify(this.locationNumber);
      // this.order.materialId = parseInt(this.materialId);
      // this.order.userName = JSON.stringify(this.userName);
      //this.appservice.placeTheOrder(orderData).subscribe(response =>{
      this.httpClient.post<any>(`http://localhost:8081/order/placeOrder`,orderData).subscribe(response =>{
        console.error('Error while placing Order:', response);
        
      },
      (error) =>{
      
            console.log('Order placed successfully:' ,error);
            this.dialogRef.close();
          });
      
    
  }
  

  cancelOrder(){
    this.dialogRef.close();
  }
}
