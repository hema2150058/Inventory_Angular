import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AppServiceService } from 'src/app/app-service.service';
import { PopToEditInventoryComponent } from '../pop-to-edit-inventory/pop-to-edit-inventory.component';
import { Inventory } from 'src/app/admin-usage';


@Component({
  selector: 'app-admin-service',
  templateUrl: './admin-service.component.html',
  styleUrls: ['./admin-service.component.css']
})
export class AdminServiceComponent implements OnInit {

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
 
editInventoryItem(materialId :number, materialName : string){
  // this.appservice.editInventoryByMId(materialId).subscribe(response =>{
  //   console.log(response);

    const dialogRef = this.dialogRef.open(PopToEditInventoryComponent,{width:'400px',height:"400px",
    data : {materialIdPop : materialId,
            materialNamePop : materialName}
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

}