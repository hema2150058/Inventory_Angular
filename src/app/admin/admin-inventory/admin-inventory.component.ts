import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Inventory } from 'src/app/admin-usage';
import { AppServiceService } from 'src/app/app-service.service';
import { AuthServiceService } from 'src/app/auth-service.service';
import { PopForAddInvComponent } from '../pop-for-add-inv/pop-for-add-inv.component';

@Component({
  selector: 'app-admin-inventory',
  templateUrl: './admin-inventory.component.html',
  styleUrls: ['./admin-inventory.component.css']
})
export class AdminInventoryComponent implements OnInit {

  title= 'HeaderSideNav';
  sideNavStatus : boolean = false;

  constructor(private appservice : AppServiceService ,private dialogRef : MatDialog, private _router : Router) { }

  inventory! : Inventory[];

  allProducts: Inventory[] = [];
  filteredProducts: Inventory[] = [];

  ngOnInit(): void {
    this.getProductsForUser();
  }

  getProductsForUser(){
    this.appservice.getAllProductsForUser().subscribe(data =>{
      console.log(data);
      this.inventory = data;
      this.allProducts = data;
      this.filteredProducts = [...this.allProducts];
    })
  }
  addInventory(){
    const dialogRef = this.dialogRef.open(PopForAddInvComponent,{width:'400px'
    });
    dialogRef.afterClosed().subscribe(result =>{
      this.getProductsForUser();
    })
}
deleteInventoryItem(materialId :number){
  this.appservice.deleteInventoryByMId(materialId).subscribe(response =>{
    console.log(response);
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

}