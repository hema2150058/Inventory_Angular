import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiceService } from '../app-service.service';
import { Inventory } from '../admin-usage';
import { MatDialog } from '@angular/material/dialog';
import { UserPlaceOrderComponent } from '../user/user-place-order/user-place-order.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  title= 'HeaderSideNav';
  sideNavStatus : boolean = false;
  products! : Inventory[];

  allProducts: Inventory[] = [];
  filteredProducts: Inventory[] = [];
  
  order1: any;
  constructor(private appservice : AppServiceService,private router : Router,private dialogRef : MatDialog) { }

  ngOnInit(): void {
    this.getProductsForUser();
  }

  getProductsForUser(){
    this.appservice.getAllProductsForUser().subscribe(data =>{
      console.log(data);
      this.products = data;
      this.allProducts = data;
      this.filteredProducts = [...this.allProducts];
    })
  }

  // storeOrderData(locationNumber : string,materialId:number){
  //   localStorage.setItem("locationNumber",locationNumber);
  //   localStorage.setItem("materialId",JSON.stringify(materialId));
  // }

  storeOrderData(locationNumber : string,materialId:number){
    localStorage.setItem("locationNumber",locationNumber);
    localStorage.setItem("materialId",JSON.stringify(materialId));
    const dialogRef = this.dialogRef.open(UserPlaceOrderComponent,{width:'400px',height:"400px"
    });
    dialogRef.afterClosed().subscribe(result =>{
      this.getProductsForUser();
    })
}
onSearchInputChange(event: Event) {
  const searchInput = (event.target as HTMLInputElement)?.value.trim();

  if (!searchInput) {
    // If search input is empty, show all products
    this.filteredProducts = [...this.allProducts];
  } else {
    // If search input is not empty, filter products based on materialId or locationNumber
    this.filteredProducts = this.allProducts.filter(
      product =>
        product.materialName.includes(searchInput) ||
        product.locationNumber.includes(searchInput)
    );
  }
}

  // order = {  
  //   "locationNumber" : '',
  //   "materialId" : 0,
  //   "orderQty" : 0,
  //   "userName" : localStorage.getItem('userData')
  // }
  // placeOrder(locationNumber : string,materialId : number){
  //   // this.appservice.placeTheOrder(this.order).subscribe(data =>{
  //   //   console.log('Order placed successfully:' ,data);
  //   // })
  //   this.order1 = {  
  //     "locationNumber" : locationNumber,
  //     "materialId" : materialId,
  //     "orderQty" : 0,
  //   }
  //   const dialogRef = this.dialog.open(UserPlaceOrderComponent,{
  //     width:'600px',
  //     data: this.order1,
  //   });
  //   dialogRef.afterClosed().subscribe((result) =>{
  //     console.log('The dialog was closed with result:', result);
  //   });
  // }
}


 